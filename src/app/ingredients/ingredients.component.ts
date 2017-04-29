import { Component, OnInit } from '@angular/core';
import { IngredientsService } from './ingredient.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'], 
  providers: [IngredientsService]
})
export class IngredientsComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(
    private ingredientsService: IngredientsService 
  ) { }

  ngOnInit() {
    this.ingredients = this.ingredientsService.getIngredients()
    // console.log(this.ingredients)
  }

}
