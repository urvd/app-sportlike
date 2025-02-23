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
    this.classementService.initialise();
          /*FIXME : ClassementResultat do build classement
          * deal with list of classements directly ?
          */



    this.classementService.dataClassement$.subscribe((res) => {
      if(!res || !Array.isArray(res)){
        this.isClsCalculated = false;
      }else{
        for(const cl of res){
          this.classements.push(cl);
        }
        for(const match of this.matchsCls){
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
  ngAfterViewInit(){
    if(this.classements.length > 0){
      for(const match of this.matchsCls){
        this.classementService.update({
          adversaire:{adversaire1:match.dom_equipe,
          adversaire2:match.ext_equipe},
          score:{score1:match.dom_score, score2: match.ext_score}
        });
      }
      this.isClsCalculated = true;
    }
  }

}
