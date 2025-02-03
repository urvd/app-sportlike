import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestBussnessClassementResultat} from "./models/classement.model";
import { TestBussnessMatchAfficheResultat } from './models/matchaffiche.model';
import { capitalizeFirstLetter } from './utilities/base';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = capitalizeFirstLetter('app-custom');
  
  constructor(){
    this.title =  capitalizeFirstLetter('app-custom');
  
    TestBussnessMatchAfficheResultat()
    TestBussnessClassementResultat();
  }
}
