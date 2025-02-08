import { Component, Input } from '@angular/core';
import { Match } from '../../models/match.models';
import { Equipe } from '../../models/sport.model';
import { CommonModule } from '@angular/common';
import { ClassementResultat } from '../../models/classement.model';

@Component({
  selector: 'app-classement',
  imports: [CommonModule],
  templateUrl: './classement.component.html',
  styleUrl: './classement.component.scss'
})
export class ClassementComponent {
  @Input() matchsCls: Match[] = [];
  @Input() equipesCls: Equipe[] = [];
  classementResultat?: ClassementResultat;
  isClsCalculated = false;
  ngOnInit(){
    this.classementResultat
          = new ClassementResultat(this.equipesCls.map(e => e.nomsimple));
    this.classementCalcul();
  }

  classementCalcul(){
    if(this.classementResultat
       && this.classementResultat?.classements.length > 0){
        for(const match of this.matchsCls){
          this.classementResultat.update({
            adversaire:
              {adversaire1:match.dom_equipe, adversaire2:match.ext_equipe},
            score:
              {score1:match.dom_score, score2: match.ext_score}
            });
        }
        this.isClsCalculated = true;
    }
  }
}
