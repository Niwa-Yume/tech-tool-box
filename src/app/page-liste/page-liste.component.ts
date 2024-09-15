import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import {ToolsService} from '../services/outils.service';


@Component({
  selector: 'app-page-liste',
  standalone: true,
  imports: [InputTextModule,ToolsService],
  templateUrl: './page-liste.component.html',
  styleUrl: './page-liste.component.css'
})
export class PageListeComponent {
  value: any;

}
