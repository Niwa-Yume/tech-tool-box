import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroSectionComponent, HeaderComponent],  // Importez votre composant autonome ici
  standalone: true,  // Si AppComponent est autonome
})
export class AppComponent {
  title = 'tech-tool-box';
}
