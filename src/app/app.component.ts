import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { capitalizeFirstLetter } from './utilities/base';
import { HeaderComponent } from "./foot/header/header.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(){
    //TU :
    //TestBussnessMatchAfficheResultat()
    //TestBussnessClassementResultat();
  }
}
