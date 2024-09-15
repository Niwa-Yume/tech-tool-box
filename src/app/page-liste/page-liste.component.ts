import { Component, OnInit } from '@angular/core'; // Ajoutez OnInit
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms'; // Ajoutez cette ligne
import { ToolsService } from '../../services/outils.service'; // Corrigez le chemin
import { Tool } from '../../services/outils.service'; // Ajoutez cette ligne pour importer l'interface Tool
import { CommonModule } from '@angular/common'; // Ajoutez cette ligne
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-page-liste',
  standalone: true,
  imports: [InputTextModule, FormsModule, CommonModule, InputIconModule,IconFieldModule,ButtonModule, CardModule], // Ajoutez FormsModule ici
  providers: [ToolsService],
  templateUrl: './page-liste.component.html',
  styleUrls: ['./page-liste.component.css'] // Corrigez styleUrl en styleUrls
})
export class PageListeComponent implements OnInit { // Implémentez OnInit
  value: string = ''; // Initialisez la valeur comme une chaîne vide
  tools: Tool[] = []; // Corrigez le type ici
  filteredTools: Tool[] = []; // Ajout d'un tableau pour les outils filtrés
  categories: string[] = []; // Ajout d'un tableau pour les catégories

  constructor(private toolsService: ToolsService) {} // Injectez ToolsService

  ngOnInit() {
    this.toolsService.getTools().subscribe({
      next: (data: Tool[]) => {
        console.log('Tools loaded:', data);
        this.tools = data;
        this.filteredTools = data; // Initialiser les outils filtrés
        this.categories = [...new Set(data.map(tool => tool.categorie))]; // Extraire les catégories uniques
      },
      error: (error) => {
        console.error('Error loading tools:', error);
      }
    });  
  }

  filterByCategory(category: string) { // Méthode pour filtrer par catégorie
    this.filteredTools = category ? this.tools.filter(tool => tool.categorie === category) : this.tools;
    this.searchTools(); // Appeler la fonction de recherche après le filtrage par catégorie
  }

  searchTools() { // Méthode pour rechercher des outils
    this.filteredTools = this.tools.filter(tool => 
      tool.name.toLowerCase().includes(this.value.toLowerCase()) || 
      tool.description.toLowerCase().includes(this.value.toLowerCase())
    );
  }
}
