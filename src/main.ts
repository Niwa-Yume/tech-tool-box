import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeroSectionComponent } from './app/hero-section/hero-section.component';

bootstrapApplication(AppComponent, appConfig,)
  .catch((err) => console.error(err));
