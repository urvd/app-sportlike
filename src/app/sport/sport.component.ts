import { Component } from '@angular/core';
import { ClassementComponent } from "./classement/classement.component";
import { AffichesComponent } from "./affiches/affiches.component";
import { ResultatsComponent } from "./resultats/resultats.component";
import { DatafootService } from '../services/datafoot.service';

@Component({
  selector: 'app-sport',
  imports: [ClassementComponent, AffichesComponent, ResultatsComponent],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
  constructor(private footService: DatafootService) {}
  foot_result:any;

  ngOnInit() {
    this.footService.data$.subscribe(response => {
      this.foot_result = response;
    });
  }

  refreshData() {
    this.footService.refreshData();
  }
}
