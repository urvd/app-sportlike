import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { capitalizeFirstLetter } from '../../utilities/base';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class HeaderComponent {
  constructor(private location: Location) {
    console.log("Chemin complet :", this.location.path()); // Ex: /produits/42
  }
  title =  capitalizeFirstLetter('app-custom');
  page = "";
  ngOnInit(){
    if(this.location.path().includes('sports')){
      this.page = capitalizeFirstLetter('sports');
    }else if(this.location.path().includes('home')){
      this.page = capitalizeFirstLetter('home');
    }
    else{
      this.page = capitalizeFirstLetter('home');
    }
  }
}
