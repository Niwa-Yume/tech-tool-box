import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from "./about/about.component";
import { FeaturesComponent } from "./features/features.component";
import { CtaComponent } from "./cta/cta.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroSectionComponent, HeaderComponent, AboutComponent, FeaturesComponent, CtaComponent, FooterComponent],  // Importez votre composant autonome ici
  standalone: true,  // Si AppComponent est autonome
})
export class AppComponent {
  title = 'tech-tool-box';
}
