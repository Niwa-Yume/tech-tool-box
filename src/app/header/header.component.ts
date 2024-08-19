import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive]
})
export class HeaderComponent {
  // Variable pour contrôler l'état du menu mobile
  isMenuOpen = false;

  // Méthode pour basculer l'état du menu mobile
  toggleMobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}