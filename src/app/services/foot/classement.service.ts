import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, timeout } from 'rxjs';
import { DatafootService } from './datafoot.service';
import { Classement } from '../../models/foot/classement.model';
import { Adversaire, MatchResultat } from '../../models/foot/sport.model';
import { AppSportError } from '../../utilities/base';

@Injectable({
  providedIn: 'root'
})
export class ClassementService {
  constructor(private datafootService: DatafootService){

  }
  private dataSubject =
    new BehaviorSubject<Classement[]>([]);
  dataClassement$ = this.dataSubject.asObservable();

  /*refreshData() {
    this.dataSubject.next('Nouvelle donnée générée à ' + new Date().toLocaleTimeString());
  }*/
  classements: Classement[] = [];
  equipes: string[] = [];

  initialise(){
    this.datafootService.data$.subscribe(res => {
      if(res.equipes && Array.isArray(res.equipes)){
        if(res.equipes){
          //console.log('équipes get '+ JSON.stringify(this.equipes));
          for(const equipe of res.equipes){
            let cls = new Classement();
            cls.setEquipe(equipe.nomsimple);
            //console.log('build classement'+ JSON.stringify(cls));
            this.classements.push(cls);
          }
          //console.log("*Classements init " + JSON.stringify(this.classements));
        }

        this.dataSubject.next(this.classements);
      }
      this.dataSubject.next([]);
    }
    );

  }

  private _search(adv: Adversaire):any {
    let foundEquipeClass1 = false;
    let foundEquipeClass2 = false;
    let indexCls1 = -1;
    let indexCls2 = -1;
    for(let i = 0; i < this.classements.length; i++){
      if(!foundEquipeClass1 &&
        this.classements[i].getClassement().equipe == adv.adversaire1){
        indexCls1 = i;
        foundEquipeClass1 = true;
      }else if(!foundEquipeClass2 &&
          this.classements[i].getClassement().equipe == adv.adversaire2){
        indexCls2 = i;
        foundEquipeClass2 = true;
      }
      if(foundEquipeClass1 && foundEquipeClass2) {
        break;
      }
    }
    return {index1: indexCls1, index2: indexCls2};
  }

  update(mr: MatchResultat){
    //search classement des deux adversaire
    console.log("*Classements update");
    const indexCls = this._search(mr.adversaire);
    console.log("indexes " +JSON.stringify(indexCls));
    if(!indexCls || indexCls.index1 == -1){
      const err =  new AppSportError("Aucun classement n'a été trouvé pour l'équipe "
              .concat(mr.adversaire.adversaire1 + "."));
      const ret:any = {scope_error:'sports',msgerror:err.message};
      console.log("##APP ERROR## =>");
      console.log(ret);
    }
    if(!indexCls || indexCls.index2 == -1){
      const err = new AppSportError("Aucun classement n'a été trouvé pour l'équipe "
              .concat(mr.adversaire.adversaire2 + "."));
        const ret:any = {scope_error:'sports',msgerror:err.message};
        console.log("##APP ERROR## =>");
        console.log(ret);
    }
    //Update classement de l'equipe de l'adversaire1
    this.classements[indexCls.index1].updateWithMatchScore(mr.score);
    //Update classement de l'equipe de l'adversaire2
    this.classements[indexCls.index2]
    .updateWithMatchScore({score1:mr.score.score2,score2:mr.score.score1});
    this.dataSubject.next(this.classements);
  }
}
