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
  value: any;
  tools: Tool[] = []; // Corrigez le type ici

  constructor(private toolsService: ToolsService) {} // Injectez ToolsService

  ngOnInit() {
    this.toolsService.getTools().subscribe({
      next: (data: Tool[]) => {
        console.log('Tools loaded:', data);
        this.tools = data;
      },
      error: (error) => {
        console.error('Error loading tools:', error);
        // Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
      }
    });  
  }
}
