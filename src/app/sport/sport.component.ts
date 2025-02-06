import { Component } from '@angular/core';
import { ClassementComponent } from "./classement/classement.component";
import { AffichesComponent } from "./affiches/affiches.component";
import { ResultatsComponent } from "./resultats/resultats.component";
import { DatafootService } from '../services/datafoot.service';
import { Equipe } from '../models/sport.model';

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
  matchsClassement = [];

  ngOnInit() {
    this.footService.data$.subscribe(response => {
      this.foot_result = response;
      if(response && response.saison)
        this.season = response.saison;

      if(response.championnat)
        this.championship = response.championnat;

      const eqs:[] = response.equipes;
      if(response.equipes && Array(response.equipes).length != 0){
        this.equipes.push(response.equipes);
       /*for(const e of response.equipes)
          this.equipes.push(e);*/
      }

      if(response.rencontres){
        for(const e of response.rencontres){
          if(e.etape && e.matches && e.etape === 'Qualification'
            && Array(e.matches).length > 0){
            for(const m of e.matches)
              this.matchsClassement.push(m);
          }
        }
      }
    });
  }

  refreshData() {
    this.footService.refreshData();
  }
}
