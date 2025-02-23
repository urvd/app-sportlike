
export type Etape = 'Qualification' | 'Barrage' | '8ème de final' | 'Quart de final'
                    | 'Demi-final' | 'Final';

export interface Match {
  date: string;
  time: string;
  dom_equipe: string;
  ext_equipe: string;
  dom_score: number;
  ext_score: number;
  etape: string;
}
