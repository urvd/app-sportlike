import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TestBussnessClassementResultat} from "./models/classement.model";
import { TestBussnessMatchAfficheResultat } from './models/matchaffiche.model';
import { capitalizeFirstLetter } from './utilities/base';
import { HeaderComponent } from "./head/header/header.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = capitalizeFirstLetter('app-custom');

  constructor(){

    TestBussnessMatchAfficheResultat()
    TestBussnessClassementResultat();
  }

}
