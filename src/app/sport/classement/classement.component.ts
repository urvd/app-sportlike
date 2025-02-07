import { Component, Input } from '@angular/core';
import { Match } from '../../models/match.models';
import { Equipe } from '../../models/sport.model';
import { CommonModule } from '@angular/common';
import { ClassementResultat } from '../../models/classement.model';

@Component({
  selector: 'app-classement',
  imports: [CommonModule],
  templateUrl: './classement.component.html',
  styleUrl: './classement.component.css'
})
export class ClassementComponent {
  @Input() matchsCls: Match[] = [];
  @Input() equipesCls: Equipe[] = [];
  classementResultat?: ClassementResultat;
  ngOnInit(){
    this.classementResultat
          = new ClassementResultat(this.equipesCls.map(e => e.nomsimple));
    
  }
}
