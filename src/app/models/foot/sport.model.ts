
export interface Score {
  readonly score1:number;
  readonly score2:number;
}

export interface Adversaire {
  readonly adversaire1: string;
  readonly adversaire2: string;
}

export interface Equipe {
  nomcomplet:string;
  nomsimple:string;
  abreviation:string;
}

export interface MatchResultat{
  score: Score;
  adversaire: Adversaire;
}

export type FiltrageType = "date" | "heure" | "equipe" | "etape" ;





/* Rule affiches
* Qualification
* 1er au 8ème => qualifié etape 8 eme
* 9ème au 24 => qualifié etape Barrage
* autres => éliminé
* Barrage
* 9ème au 16ème : match ret à domicile
* 17 ème au 24 : match ret à l'ext
*/
