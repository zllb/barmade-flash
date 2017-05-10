import { Component, OnInit } from '@angular/core';
// models 
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
// services 
import { IngredientsService } from '../ingredients/ingredient.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-mixing-glass',
  templateUrl: './mixing-glass.component.html',
  styleUrls: ['./mixing-glass.component.css'],
  providers: [IngredientsService]
})
export class MixingGlassComponent implements OnInit {

  ingredients: Ingredient[] = [];
  recipes: Recipe[] = [];
  
  constructor(
    private iService: IngredientsService
    // private rService: RecipeService
  ) { }

  ngOnInit() {
    // this.ingredients = this.iService.getIngredients();

  }

}
