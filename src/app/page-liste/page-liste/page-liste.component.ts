// page-liste.component.ts
import { Component, OnInit, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { MultiSelectModule } from 'primeng/multiselect';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { RouterModule } from '@angular/router';

// Définition des interfaces pour la structure des données
interface Outil {
  nom: string;
  description: string;
  tags: string[];
  lien: string;
}

interface Categorie {
  nom: string;
  outils: Outil[];
}

@Component({
  selector: 'app-page-liste',
  standalone: true, // Composant standalone, nouvelle fonctionnalité d'Angular 17
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ChipModule,
    CardModule,
    TabViewModule,
    MultiSelectModule,
    RippleModule,
    TooltipModule
  ],
  templateUrl: './page-liste.component.html',
  styleUrls: ['./page-liste.component.css']
})
export class PageListeComponent implements OnInit {
  // Utilisation de signal pour l'état réactif
  categories = signal<Categorie[]>([
    {
      nom: 'Outils IA',
      outils: [
        { nom: 'GPT-3', description: 'Modèle de langage d\'OpenAI', tags: ['payant', 'api'], lien: 'https://openai.com/gpt-3' },
        { nom: 'TensorFlow', description: 'Framework open-source pour le machine learning', tags: ['gratuit', 'open-source'], lien: 'https://www.tensorflow.org/' }
      ]
    },
    {
      nom: 'Outils de Script',
      outils: [
        { nom: 'GPT-3', description: 'Modèle de langage d\'OpenAI', tags: ['payant', 'api'], lien: 'https://openai.com/gpt-3' },
        { nom: 'TensorFlow', description: 'Framework open-source pour le machine learning asdfasdfafadfasfasfdasasdfasdfadsasdfasdfasfasadsadDqdASDafasdfasdfasdfasfafasfasdfasfasfasfsdfasdfafasdfasfafdfaf', tags: ['gratuit', 'open-source'], lien: 'https://www.tensorflow.org/' }
      ]
    },
    // Ajoutez d'autres catégories ici...
  ]);

  termeRecherche = signal('');
  tagsSelectionnes = signal<string[]>([]);

  // Computed property pour les catégories filtrées
  categoriesFiltrees = computed(() => {
    return this.categories().map(categorie => ({
      ...categorie,
      outils: categorie.outils.filter(outil =>
        (this.termeRecherche() === '' || outil.nom.toLowerCase().includes(this.termeRecherche().toLowerCase()) ||
          outil.description.toLowerCase().includes(this.termeRecherche().toLowerCase())) &&
        (this.tagsSelectionnes().length === 0 || this.tagsSelectionnes().every(tag => outil.tags.includes(tag)))
      )
    })).filter(categorie => categorie.outils.length > 0);
  });

  // Computed property pour tous les tags uniques
  outils = signal<Outil[]>([
    { nom: 'GPT-3', description: 'Modèle de langage d\'OpenAI', tags: ['payant', 'api'], lien: 'https://openai.com/gpt-3' },
    { nom: 'TensorFlow', description: 'Framework open-source pour le machine learning', tags: ['gratuit', 'open-source'], lien: 'https://www.tensorflow.org/' }
    // Ajoutez d'autres outils ici...
  ]);

  outilsFiltres = computed(() => {
    return this.outils().filter(outil =>
      this.termeRecherche() === '' || 
      outil.nom.toLowerCase().includes(this.termeRecherche().toLowerCase()) ||
      outil.description.toLowerCase().includes(this.termeRecherche().toLowerCase())
    );
  });

  constructor() {
    // Utilisation d'effect pour les effets secondaires
    effect(() => {
      console.log('Terme de recherche mis à jour:', this.termeRecherche());
      console.log('Tags sélectionnés mis à jour:', this.tagsSelectionnes());
    });
  }

  ngOnInit() {
    // Le ngOnInit est moins nécessaire avec l'utilisation de signal et computed,
    // mais peut être utilisé pour des initialisations supplémentaires si nécessaire
  }

}