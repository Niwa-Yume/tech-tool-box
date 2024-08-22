import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

    socialLinks = {
      x: "https://x.com/Niwa76156428",  // Remplacez par votre lien X
      instagram: "https://www.instagram.com/niwa_yume",  // Remplacez par votre lien Instagram
      portfolio: "https://portfolio-design-figma-alpha.vercel.app/",  // Remplacez par votre lien de portfolio
      linkedin: "https://www.linkedin.com/in/julien-castro/",  // Remplacez par votre lien LinkedIn
    };

    openLink(url: string): void {
      window.open(url, '_blank');
    }

}

