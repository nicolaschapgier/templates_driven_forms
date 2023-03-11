import { Component } from '@angular/core';
import { Order } from '../order';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { minDateValidator } from './min-date.validator';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  // Declare all controls with validation rules
  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    payments: this.fb.array([]) // FormArray Control
  });

  addPayments(){
    // create FormGroup with two FormControl
    // On créé un nouveau groupe avec une date et un montant
    const paymentForm = this.fb.group({
      date:['',[Validators.required, minDateValidator(new Date())]],
      amount:['',Validators.required],
    });
    // parse abstract control to FormArray
    // On crée la constante "payments" que l'on associe à celle du groupe orderForm
    // Lorsque tu dois récupérer un contrôle, tu es obligé de passer par .get() de FormGroup.
    // .get() retourne un objet de type AbstractControl (dont héritent FormGroup, FormControl et FormArray).
    // Problème, un objet de type AbstractControl ne possède pas de méthode .push...
    // On doit donc indiquer que notre contrôle payments est bien du type FormArray en utilisant la syntaxe 
    // "maVariable as MonTypeDeClasse" 
    const payments = this.orderForm.get('payments') as FormArray;
    // On push la valeur de paymentForm dans payments
    payments.push(paymentForm);
  }

  get payments():FormArray{
    return this.orderForm.get("payments") as FormArray;
  }
  
  // ngOnInit(){
  //   this.orderForm.valueChanges.subscribe(value =>{
  //     console.log("orderForm value changes : ", value)
  //   })
  // }
  
  constructor(private fb: FormBuilder) {}
  model: Order = new Order('coucou', 0, new Date(), 'coucou@mail.com');

  onSubmit(): void {
    // Get form value as JSON object
    // console.log('orderForm submitted : ', this.orderForm.value);
  }
}
