import { Component } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  contact = "contact";
  prenom = "prenom";
  nom = "nom";
  mdp = "mdp";

  user : User = new User("n@mail.com", "Nicolas","Chpg", "toto")

  constructor(){};

  onSubmit():void {
    console.log(this.user)
  }
}
