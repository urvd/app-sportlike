import { Component, Input } from '@angular/core';
import { Match } from '../../models/match.models';
import { Equipe } from '../../models/sport.model';
import { CommonModule } from '@angular/common';
import { Classement } from '../../models/classement.model';
import { ClassementService } from '../../services/classement.service';

@Component({
  selector: 'app-classement',
  imports: [CommonModule],
  templateUrl: './classement.component.html',
  styleUrl: './classement.component.scss'
})
export class ClassementComponent {
  @Input() matchsCls: Match[] = [];
  @Input() equipesCls: string[] = [];
  classements: Classement[] = [];
  isClsCalculated = false;

  constructor(private classementService: ClassementService){
  }
  
  ngOnInit(){
    this.classementService.initialise(this.equipesCls);
          /*FIXME : ClassementResultat don build classement
          * deal with list of classements directly ?
          */
    this.classementService.dataClassement$.subscribe(res => {
      if(res && res.length > 0){
        for(let match of this.matchsCls){
          this.classementService.update({
            adversaire:{adversaire1:match.dom_equipe,
              adversaire2:match.ext_equipe},
            score:{score1:match.dom_score, score2: match.ext_score}
          });
        }
        this.isClsCalculated = true;
      }
    });
  }

}
