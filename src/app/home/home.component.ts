import { Component } from '@angular/core';
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { AboutComponent } from "../about/about.component";
import { FeaturesComponent } from "../features/features.component";
import { CtaComponent } from "../cta/cta.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, AboutComponent, FeaturesComponent, CtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
