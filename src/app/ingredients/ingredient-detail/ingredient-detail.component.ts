import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css']
})
export class IngredientDetailComponent implements OnInit {

  ingredient: Ingredient = new Ingredient(1, 'test','data')
  constructor() { }

  ngOnInit() {
  }

}
