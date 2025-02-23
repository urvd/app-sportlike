import { Component, Input } from '@angular/core';
import { Match } from '../../models/match.models';
import { CommonModule } from '@angular/common';
import { Equipe } from '../../models/sport.model';

@Component({
  selector: 'app-resultats',
  imports: [CommonModule],
  templateUrl: './resultats.component.html',
  styleUrl: './resultats.component.scss'
})
export class ResultatsComponent {
  @Input() matchsList: Match[] = [];
  @Input() equipesList: Equipe[] = [];
  @Input() equipes: string[] = [];
  isResultFiltred = false;

  //TODO: Create filtering services & view
  //TODO: trier les matchs par defaut par date
  ngOnInit(){

  }
}
