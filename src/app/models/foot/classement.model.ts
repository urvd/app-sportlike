

import { APLWarning, AppSportError } from '../utilities/base';
import { Score, Adversaire, Equipe } from './sport.model';



/*
export class ClassementResultat {
  classements: Classement[] = [];

  constructor(equipes:string[]){
    for(const equipe of equipes){
      this._addClassement(equipe);
    }
  }
  private _addClassement(equipe: string){
    this.classements.push(new Classement(equipe));
  }

  private _search(adv: Adversaire):any {
    let foundEquipeClass1 = false;
    let foundEquipeClass2 = false;
    let indexCls1 = -1;
    let indexCls2 = -1;
    for(let i = 0; i < this.classements.length; i++){
      if(!foundEquipeClass1 &&
        this.classements[i].getEquipe == adv.adversaire1){
        indexCls1 = i;
        foundEquipeClass1 = true;
      }else if(!foundEquipeClass2 &&
              this.classements[i].getEquipe() == adv.adversaire2){
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
    const indexCls = this._search(mr.adversaire);
    //console.log("indexes " +JSON.stringify(indexCls));
    if(indexCls && indexCls.index1 == -1){
      const err =  new AppSportError("Aucun classement n'a été trouvé pour l'équipe "
              .concat(mr.adversaire.adversaire1 + "."));
      const ret:any = {scope_error:'sports',msgerror:err.message};
      console.log("##APP ERROR## =>");
      console.log(ret);
    }
    if(indexCls && indexCls.index2 == -1){
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
  }

}
*/
/*interface Classement {
  equipe: string;
  match_joue: number;
  match_gain?: number;
  match_nul?: number;
  match_perte?: number;
  but_pour?: number;
  but_contre?: number;
  but_diff?: number;
  points?: number;
}*/

export class Classement /*implements Classement*/ {
  private equipe: string = "";
  private match_joue: number = 0;
  private match_gain: number = 0;
  private match_nul: number = 0;
  private match_perte: number = 0;
  private but_pour: number = 0;
  private but_contre: number = 0;
  private but_diff: number = 0;
  private points?: number = 0;

  constructor()  {
  }

  updateWithMatchScore(score: Score){
    if(score.score1 < 0 || score.score2 < 0){
      throw new APLWarning('Match de '.concat(this.equipe)
                  + ' : Score strictement négatif');
    }else{
      this.match_joue ++;
      if(score.score1 > score.score2){
        this.match_gain++;
      } else if(score.score1 < score.score2){
        this.match_perte = this.match_perte?this.match_perte++:0;
      } else {
        this.match_nul = this.match_nul?this.match_nul++:0;
      }
      this.but_pour += score.score1;
      this.but_contre = this.but_contre + score.score2;
      this.but_diff = this.but_pour - this.but_contre;
    }
  }

  getClassement():any {
    return {equipe:this.equipe, match_joue: this.match_joue, match_gain: this.match_gain,
          match_nul: this.match_nul, match_perte: this.match_perte, but_pour: this.but_pour,
          but_contre: this.but_contre, but_diff: this.but_diff, points: this.points};
  }
  setEquipe(equipe:string){
    this.equipe = equipe;
  }
  getMJ(){
    return this.match_joue;
  }
}

/*use cases :
  obj : ClassementResultat
  exemple1 :
*/
export function TestBussnessClassementResultat(){
  console.log("%Creation début de classements%\n");

  let classements:Classement[] = [];
  console.log("Classement resultat:\n", classements);

  for(let i = 0;i < classements.length; i++) {
    classements[i].setEquipe("fvfv");
    console.log("Classement " + i + " -> "
      .concat(classements[i].getClassement().equipe
       +":\n"),classements[i].getClassement());
  }
}

