import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-page-liste',
  standalone: true,
  imports: [RouterModule, IconFieldModule, InputTextModule, InputIconModule],
  templateUrl: './page-liste.component.html',
  styleUrl: './page-liste.component.css'
})
export class PageListeComponent {

}
