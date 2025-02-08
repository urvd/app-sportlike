import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TestBussnessClassementResultat} from "./models/classement.model";
import { TestBussnessMatchAfficheResultat } from './models/affiche.model';
import { capitalizeFirstLetter } from './utilities/base';
import { HeaderComponent } from "./head/header/header.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = capitalizeFirstLetter('SportLike');

  constructor(){
    //TU :
    //TestBussnessMatchAfficheResultat()
    //TestBussnessClassementResultat();
  }
}
