

import { Score, Adversaire } from './sport.model';

interface MatchResultat{
  score: Score;
  adversaire: Adversaire;
}
export class ClassementResultat {
  readonly season: string = "2024-2025"
  readonly championnat:string = "";
  readonly classements: Classement[] = [];
  constructor(season: string, championnat: string){
    this.season = season;
    this.championnat = championnat;
  }
  addClasement(cla: Classement){
    this.classements.push(cla);
  }

  private _search(adv: Adversaire):any {
    let foundEquipeClass1 = false;
    let foundEquipeClass2 = false;
    let indexCls1 = -1;
    let indexCls2 = -1;
    for(let i = 0; i < this.classements.length; i++){
      if(!foundEquipeClass1 &&
        this.classements[i].equipe == adv.adversaire1){
        indexCls1 = i;
        foundEquipeClass1 = true;
      }else if(!foundEquipeClass2 &&
              this.classements[i].equipe == adv.adversaire2){
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
    console.log("indexes " +JSON.stringify(indexCls));
    if(indexCls && indexCls.index1 == -1){
      throw Error("Aucun classement n'a été trouvé pour l'équipe "
              .concat(mr.adversaire.adversaire1 + "."))
    }
    if(indexCls && indexCls.index2 == -1){
      throw Error("Aucun classement n'a été trouvé pour l'équipe "
              .concat(mr.adversaire.adversaire2 + "."))
    }
    //Update classement de l'equipe de l'adversaire1
    this.classements[indexCls.index1].updateWithMatchScore(mr.score)
    //Update classement de l'equipe de l'adversaire2
    this.classements[indexCls.index2].updateWithMatchScore(mr.score)
  }

}

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
  readonly equipe: string = "";
  private match_joue: number = 0;
  private match_gain: number = 0;
  private match_nul: number = 0;
  private match_perte: number = 0;
  private but_pour: number = 0;
  private but_contre: number = 0;
  private but_diff: number = 0;
  private points?: number = 0;

  constructor(equipe: string)  {
    this.equipe = equipe;
  }

  updateWithMatchScore(score: Score){
    if(score.score1 < 0 || score.score2 < 0){
      throw new Error('Impossible score strictement négatif'); //TODO : creer une class d'erreur
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
}

/*use cases :
  obj : ClassementResultat, Classement
  exemple1 :
*/
console.log("%Creation du championnat%\n");
const classResult = new ClassementResultat("2024-2025", "ligue champ EU")
console.log("Classement resultat:\n", classResult);
const cls1 = new Classement("paris-saint-germain");
const cls2 = new Classement("brest");


console.log("%Initialisé les classements% \n");

classResult.addClasement(cls1);
classResult.addClasement(cls2);

for(const cl of classResult.classements) {
  console.log("Classement -> ".concat(cl.equipe +":\n"),
             cl.getClassement());
}
console.log("Classement resultat:\n", classResult);


console.log("%MAJ des classements après match & score%\n");
classResult.update({score:{score1:2,score2:1},
                    adversaire: {adversaire1: "paris-saint-germain",adversaire2: "brest"}});

console.log("Classement resultat:\n", classResult);
 //lorseque on récupe les resultats de match
//*/
