import { Component } from '@angular/core';
import { Order } from '../order';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  // title: string = '';
  // quantity: number = 0;
  // date = new Date();
  // contact:string = '';

  model: Order = new Order ("coucou", 0, new Date(), "coucou@mail.com");

  
  onSubmit(): void{
    //form submitted
    console.log(this.model)
  }
}
