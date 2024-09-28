import { Component } from '@angular/core';
import { HeroSectionComponent } from './composant-home/hero-section/hero-section.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from "./composant-home/about/about.component";
import { FeaturesComponent } from "./composant-home/features/features.component";
import { CtaComponent } from "./composant-home/cta/cta.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroSectionComponent, HeaderComponent, AboutComponent, FeaturesComponent, CtaComponent, FooterComponent,RouterOutlet, FontAwesomeModule],  // Importez votre composant autonome ici
  standalone: true,  // Si AppComponent est autonome
})
export class AppComponent {
  title = 'tech-tool-box';
}
