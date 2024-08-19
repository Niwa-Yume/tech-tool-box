import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig, 
  //providers sert à ajouter des services à l'application (dans ce cas les routes qui servent à la navigation)
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));