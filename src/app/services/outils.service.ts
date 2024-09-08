import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Outil {
  id: number;
  nom: string;
  description: string;
  tags: string[];
  lien: string;
  image: string;
  utilisateursCibles?: string[];
  fonctionnalitesPrincipales?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class OutilService {
  private outils: Outil[] = [
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
  ];

  getOutils(): Observable<Outil[]> {
    return of(this.outils);
  }

  getOutilById(id: number): Observable<Outil | undefined> {
    return of(this.outils.find(outil => outil.id === id));
  }
}