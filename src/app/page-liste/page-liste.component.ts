import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToolsService, Tool } from '../../services/outils.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-page-liste',
  standalone: true,
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, CardModule],
  templateUrl: './page-liste.component.html',
  styleUrls: ['./page-liste.component.css']
})
export class PageListeComponent implements OnInit {
  searchTerm: string = '';
  tools: Tool[] = [];
  filteredTools: Tool[] = [];
  filterList: string[] = ['AI', 'Github', 'Analytics'];

  constructor(private toolsService: ToolsService) {}

  ngOnInit() {
    this.toolsService.getTools().subscribe({
      next: (data: Tool[]) => {
        this.tools = data;
        this.filteredTools = [...this.tools];
        console.log('Tools retrieved:', this.tools);
        console.log('Initial filteredTools:', this.filteredTools);
        console.log('Unique tool categories:', [...new Set(this.tools.map(tool => tool.Categorie))]);
      },
      error: (error) => {
        console.error('Error loading tools:', error);
      }
    });
  }

  filterTools(category: string) {
    console.log('Filtering by category:', category);
    
    if (category.toLowerCase() === 'tous') {
      this.filteredTools = [...this.tools];
    } else {
      this.filteredTools = this.tools.filter(tool => {
        const toolCategory = (tool.Categorie || '').toLowerCase();
        const filterCategory = category.toLowerCase();
        const result = toolCategory === filterCategory;
        console.log(`Tool ${tool.name}, category: ${toolCategory}, matches ${filterCategory}: ${result}`);
        return result;
      });
    }
    
    console.log('Filtered tools:', this.filteredTools);
  }

  searchTools() {
    const searchTerm = this.searchTerm.toLowerCase();
    this.filteredTools = this.tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      ((tool.Categorie || '').toLowerCase().includes(searchTerm))
    );
    console.log('Search results:', this.filteredTools);
  }
}