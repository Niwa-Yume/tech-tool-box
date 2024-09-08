// page-liste.component.ts
import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { OutilService, Outil } from '../../services/outils.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { MultiSelectModule } from 'primeng/multiselect';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';

// Définition des interfaces pour la structure des données qui sert à l'affichage et à la logique
interface Categorie {
  nom: string;
  outils: Outil[];
}

@Component({
  selector: 'app-page-liste',
  standalone: true, // Composant standalone, nouvelle fonctionnalité d'Angular 17
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, ChipModule, CardModule, TabViewModule, MultiSelectModule, RippleModule, TooltipModule],
  templateUrl: './page-liste.component.html',
  styleUrls: ['./page-liste.component.css']
})
export class PageListeComponent implements OnInit {
  // Utilisation de signal pour l'état réactif


  termeRecherche = signal('');
  tagsSelectionnes = signal<string[]>([]);

  // Computed property pour tous les tags uniques
  outils = signal<Outil[]>(
    [
      {
        id: 1,
        nom: 'GPT-3',
        description: 'Modèle de langage d\'OpenAI',
        tags: ['payant', 'api', 'chatbot', 'IA'],
        lien: 'https://openai.com/gpt-3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1200px-OpenAI_Logo.svg.png',
        utilisateursCibles: ['Développeurs', 'Entreprises'],
        fonctionnalitesPrincipales: ['Génération de texte', 'Traduction', 'Résumé']
      },
      {
        id: 2,
        nom: 'TensorFlow',
        description: 'Framework open-source pour le machine learning',
        tags: ['gratuit', 'open-source', 'IA', 'machine learning'],
        lien: 'https://www.tensorflow.org/',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png'
      },
      {
        id: 3,
        nom: 'PyTorch',
        description: 'Bibliothèque d\'apprentissage automatique open source',
        tags: ['gratuit', 'open-source', 'IA', 'machine learning'],
        lien: 'https://pytorch.org/',
        image: 'https://pytorch.org/assets/images/pytorch-logo.png'
      },
      {
        id: 4,
        nom: 'Scikit-learn',
        description: 'Bibliothèque Python pour l\'apprentissage automatique',
        tags: ['gratuit', 'open-source', 'machine learning', 'data science'],
        lien: 'https://scikit-learn.org/',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png'
      },
      {
        id: 5,
        nom: 'Keras',
        description: 'Interface de programmation pour l\'apprentissage profond',
        tags: ['gratuit', 'open-source', 'deep learning', 'IA'],
        lien: 'https://keras.io/',
        image: 'https://keras.io/img/logo.png'
      },
      {
        id: 6,
        nom: 'NLTK',
        description: 'Boîte à outils pour le traitement du langage naturel',
        tags: ['gratuit', 'open-source', 'NLP', 'text mining'],
        lien: 'https://www.nltk.org/',
        image: 'https://miro.medium.com/max/592/1*YM2HXc7f4v02pZBEO8h-qw.png'
      },
      {
        id: 7,
        nom: 'Pandas',
        description: 'Bibliothèque Python pour l\'analyse de données',
        tags: ['gratuit', 'open-source', 'data analysis', 'data science'],
        lien: 'https://pandas.pydata.org/',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png'
      },
      {
        id: 8,
        nom: 'OpenCV',
        description: 'Bibliothèque de vision par ordinateur',
        tags: ['gratuit', 'open-source', 'computer vision', 'image processing'],
        lien: 'https://opencv.org/',
        image: 'https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_no_text-1.png'
      },
      {
        id: 9,
        nom: 'Dialogflow',
        description: 'Plateforme de développement de chatbots de Google',
        tags: ['payant', 'api', 'chatbot', 'NLP'],
        lien: 'https://cloud.google.com/dialogflow',
        image: 'https://miro.medium.com/max/400/1*BXaq7UZ-QoMH0vF0Znjy4w.png'
      },
      {
        id: 10,
        nom: 'Hugging Face',
        description: 'Plateforme pour les modèles de langage pré-entraînés',
        tags: ['gratuit', 'api', 'NLP', 'transformers'],
        lien: 'https://huggingface.co/',
        image: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg'
      },
      {
        id: 11,
        nom: 'RapidMiner',
        description: 'Plateforme d\'analyse prédictive et d\'apprentissage automatique',
        tags: ['payant', 'data mining', 'machine learning', 'business intelligence'],
        lien: 'https://rapidminer.com/',
        image: 'https://rapidminer.com/wp-content/uploads/2019/11/RapidMiner-Logo-RGB-1.svg'
      },
      {
        id: 12,
        nom: 'Weka',
        description: 'Collection d\'algorithmes d\'apprentissage automatique pour la fouille de données',
        tags: ['gratuit', 'open-source', 'data mining', 'machine learning'],
        lien: 'https://www.cs.waikato.ac.nz/ml/weka/',
        image: 'https://www.cs.waikato.ac.nz/ml/weka/images/weka.png'
      }
    ].map((outil, index) => ({ ...outil, id: index + 1 }))
  );

  //Permet de filtrer les outils en fonction du terme de recherche et des tags sélectionnés
  outilsFiltres = computed(() => {
    return this.outils().filter(outil =>
      this.termeRecherche() === '' ||
      outil.nom.toLowerCase().includes(this.termeRecherche().toLowerCase()) ||
      outil.description.toLowerCase().includes(this.termeRecherche().toLowerCase())
    );
  });
  //le constructeur est utilisé pour initialiser les données et les effets secondaires
  constructor(private router: Router, private outilService: OutilService) {
    // Utilisation d'effect pour les effets secondaires comme le logging pour le terme de recherche et les tags sélectionnés
    effect(() => {
      console.log('Terme de recherche mis à jour:', this.termeRecherche());
      console.log('Tags sélectionnés mis à jour:', this.tagsSelectionnes());
    });
  }

  ngOnInit() {
    this.outilService.getOutils().subscribe(outils => {
      this.outils.set(outils);
    });
  }

  navigateTo(lien: string): void {
    this.router.navigate([lien]);
  }

  navigateToDetail(outil: Outil): void {
    this.router.navigate(['/page-liste', outil.id]);
  }
}