# Tech Tool Box

## Description du Projet

Tech Tool Box est une plateforme innovante destinée à rassembler et à organiser diverses ressources techniques pour les développeurs et les professionnels de la technologie. Ce site web permet aux utilisateurs de rechercher, filtrer, et évaluer des ressources, tout en offrant une interface de gestion pour les administrateurs.

## Fonctionnalités

- **Recherche de Ressources** : Une barre de recherche permettant de trouver facilement des ressources techniques.
- **Filtrage par Catégorie** : Fonctionnalité de filtrage pour trier les ressources par catégorie.
- **Système de Vote** : Les utilisateurs peuvent voter pour les ressources, aidant ainsi à mettre en avant les contenus les plus utiles.
- **Gestion des Utilisateurs et des Ressources** : Une interface pour les administrateurs afin de gérer les ressources et les utilisateurs.

## Technologies Utilisées

### Frontend : Angular
- **Framework** : Angular est utilisé pour développer une interface utilisateur dynamique et réactive.
### Backend : Supabase
- **Base de Données** : Supabase est utilisé comme backend pour gérer les opérations CRUD (Create, Read, Update, Delete) sur les ressources et les utilisateurs.
- **Authentification** : Gestion de l'authentification et de l'autorisation des utilisateurs.

- **URL du Projet Supabase** : `https://pzzqrgtqfxjlnrpzbawf.supabase.co`

## Installation

1. **Clonez le dépôt** :
    ```sh
    git clone https://github.com/yourusername/tech-tool-box.git
    cd tech-tool-box
    ```

2. **Installez les dépendances du frontend** :
    ```sh
    cd frontend
    npm install
    ```

3. **Lancez l'application frontend** :
    ```sh
    ng serve
    ```

4. **Configurez les variables d'environnement pour Supabase** :
    - Créez un fichier `.env` dans le dossier racine du projet.
    - Ajoutez les informations de votre projet Supabase :
      ```env
      SUPABASE_URL=https://pzzqrgtqfxjlnrpzbawf.supabase.co
      SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6enFyZ3RxZnhqbG5ycHpiYXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwNDM0MDMsImV4cCI6MjAzODYxOTQwM30.U5sfg0WhMM-DfsPL6kY0bgNwTP_Od_fDdlPfwk2SPTY
      ```

## Utilisation

- **Page d'Accueil** : Accueille les utilisateurs avec une introduction au site et des liens vers les principales fonctionnalités.
- **Recherche et Filtrage** : Utilisez la barre de recherche et les filtres pour trouver des ressources pertinentes.
- **Profil Utilisateur** : Gérez les informations de votre profil et vos ressources favorites.
- **Interface Admin** : Gérez les ressources et les utilisateurs via une interface dédiée.

## Contributing

Les contributions sont les bienvenues ! Pour des changements majeurs, veuillez ouvrir une issue d'abord pour discuter de ce que vous aimeriez changer. Assurez-vous de mettre à jour les tests si nécessaire.

## License

[MIT](https://choosealicense.com/licenses/mit/)

