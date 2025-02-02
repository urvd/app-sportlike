import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClassementResultat, Classement} from "./models/classement.model";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-custom';
  constructor(){
    console.log("%Creation du championnat%\n");
    const classResult = new ClassementResultat("2024-2025", "ligue champ EU")
    console.log("Classement resultat:\n", classResult);

    let cls1 = new Classement("paris-saint-germain");
    let cls2 = new Classement("brest");


    console.log("%Initialisé les classements% \n");

    classResult.addClasement(cls1);
    classResult.addClasement(cls2);

    for(const cl of classResult.classements) {
      console.log("Classement -> ".concat(cl.equipe +":\n"),
                cl.getClassement());
    }
    console.log("Classement resultat:\n", classResult);


    console.log("%MAJ des classements après match & score%\n");
    classResult.update({score:{score1:2,score2:1},
                        adversaire: {adversaire1: "paris-saint-germain",adversaire2: "brest"}});

    console.log("Classement resultat:\n", classResult);
  }
}
