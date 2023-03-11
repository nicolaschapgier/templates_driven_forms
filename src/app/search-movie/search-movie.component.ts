import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { rangeDateValidator } from './isRequired.validator';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent {
  constructor(private fb: FormBuilder) {}

  types = [
    { name: 'film' },
    { name: 'serie' },
    { name: 'episode' }
  ];

  fiches = [
    {name : "complete"},
    {name: "courte"},
  ]
  
  orderForm = this.fb.group({
    identifiant: ['', Validators.required],
    titre: ['', Validators.required],
    type: [this.types[1].name, Validators.required],
    anneeDeSortie:['',[Validators.required, rangeDateValidator(1900,2350)]],
    fiche:[''],
  });

  onSubmit(): void {
    console.log('orderForm submitted : ', this.orderForm.value);
  }
}
