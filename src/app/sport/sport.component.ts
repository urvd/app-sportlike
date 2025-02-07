import { Component } from '@angular/core';
import { ClassementComponent } from "./classement/classement.component";
import { AffichesComponent } from "./affiches/affiches.component";
import { ResultatsComponent } from "./resultats/resultats.component";
import { DatafootService } from '../services/datafoot.service';
import { Equipe } from '../models/sport.model';
import { MatchService } from '../services/foot/match.service';
import { Match, Etape } from '../models/match.models';

@Component({
  selector: 'app-sport',
  imports: [ClassementComponent, AffichesComponent, ResultatsComponent],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
  constructor(private footService: DatafootService) {}
  foot_result:any;
  season: string = "";
  championship: string = "";
  equipes:Equipe[] = [];
  matchs: Match[] = [];

  ngOnInit() {

    this.footService.data$.subscribe(response => {
      if(response && response.saison)
        this.season = response.saison;

      if(response.championnat)
        this.championship = response.championnat;

      console.log("Match : " + this.season + " - " + this.championship);

      if(response.equipes && Array(response.equipes).length != 0){
        this.equipes.push(response.equipes);
      }

      if(response.rencontres){
        for(const e of response.rencontres){
          if(e.etape && e.matchs && Array(e.matchs).length > 0){
            console.log("Match récuperer : (" + Array(e.matchs).length + ")");
            for(const m of e.matchs){
              if(m.date && m.time && m.dom_equipe && m.ext_equipe
                && m.dom_score && m.ext_score){
                const mtch: Match = {
                  "date": m.date,
                  "time": m.time,
                  "dom_equipe": m.dom_equipe,
                  "ext_equipe": m.ext_equipe,
                  "dom_score": m.dom_score,
                  "ext_score": m.ext_score,
                  "etape": e.etape,
                };
                console.log("Match récuperer : " + JSON.stringify(mtch));
                this.matchs.push(mtch);
              }
            }
          }
        }
      }
    });
  }

  matchClassement():Match[]{
    return this.matchs.filter(m => m.etape == 'Qualification');
  }

  matchFilter(etape?:Etape):Match[]{
    return etape?
      this.matchs.filter(m => m.etape == etape):this.matchs;
  }
}
