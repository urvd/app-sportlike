
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





