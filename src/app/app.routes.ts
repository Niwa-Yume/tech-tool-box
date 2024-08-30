import { Routes } from '@angular/router';
import { PageAboutComponent } from './composant-page-apropos/page-about/page-about.component';
import { HomeComponent } from './composant-home/home/home.component';
import { PageListeComponent } from './page-liste/page-liste/page-liste.component';
import { ComposantDetailComponent } from './page-liste/composant-detail/composant-detail.component';

export const routes: Routes = [
    { path: 'page-about', component: PageAboutComponent }, 
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' },
    { path: 'page-liste', component: PageListeComponent},
    { path: 'page-liste/:id', component: ComposantDetailComponent},
];