
import { Score, Adversaire } from './sport.model';

interface MatchAffiche {
  adversaire1: string;
  adversaire2: string;
  score1: number;
  score2: number;
  gagnant?: number;
  etape:string;
  //setAdversaire(adv: Adversaire):any;
  //setScore(s: Sc):any;
}
class MatchAffiche implements MatchAffiche {
  adversaire1: string = "";
  adversaire2: string = "";
  score1: number = 0;
  score2: number = 0;
  gagnant?: number = 0
  etape:string = "";

  MatchAffiche(){
      this.adversaire2 = "";
      this.score1 = 0;
      this.score2 = 0;
      this.gagnant = 0;
  }
  setAdversaire(adv: Adversaire, etape: string){
      if(adv.adversaire1 && adv.adversaire2 && etape
      || adv.adversaire1 != "" && adv.adversaire2 != ""){
          this.adversaire2 = adv.adversaire2;
          this.etape = this.etape;
      }
  }
  setScore(sc: Score) {
      if(sc.score1 != sc.score2)  {
          this.score1 = sc.score1;
          this.score2 = sc.score2;
          this.gagnant = this.score1 > this.score2 ? 1:2;
      }
  }
  getMatchAffiche(): any {
      return {adversaire1: this.adversaire1, adversaire2: this.adversaire2,
              score1: this.score1, score2: this.score2, gagnant: this.gagnant};
  }
}
/*use cases :
  obj : MatchAffiche
  exemple1 :*/
  const uma1 = new MatchAffiche();
/*  console.log("Initialisation\n", uma1.getMatchAffiche());

  uma1.setAdversaire({adversaire1: "paris-saint-germain", adversaire2: "brest"});
  console.log("Initialisation aves les adversaires\n", uma1.getMatchAffiche());

  // cas d'erreur
  uma1.setScore({score1: 2, score2: 2})
  console.log("Donner les scores\n", uma1.getMatchAffiche());
  //cas normal
  uma1.setScore({score1: 2, score2: 1})
  console.log("Donner les scores\n", uma1.getMatchAffiche());

*/
