import { Routes } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'page-about', component: PageAboutComponent }, // Corrigé de './page-about' à 'about'
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' }
    // Ajoutez ici d'autres routes si nécessaire
];