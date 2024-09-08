import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OutilService, Outil } from '../../services/outils.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ImageModule } from 'primeng/image';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-composant-detail',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ChipModule,
    ImageModule,
    TabViewModule,
    PanelModule
  ],
  templateUrl: './composant-detail.component.html',
  styleUrls: ['./composant-detail.component.css']
})
export class ComposantDetailComponent implements OnInit {
  outil: Outil | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private outilService: OutilService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.outilService.getOutilById(id).subscribe(
      outil => {
        if (outil) {
          this.outil = outil;
        } else {
          this.router.navigate(['/page-liste']);
        }
      },
      error => {
        console.error('Erreur lors du chargement de l\'outil:', error);
        this.router.navigate(['/page-liste']);
      }
    );
  }

  ouvrirLienAffiliation() {
    if (this.outil && this.outil.lien) {
      window.open(this.outil.lien, '_blank');
    }
  }
}
