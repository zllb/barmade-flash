import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { IngredientsService } from '../ingredient.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css']
})
export class IngredientDetailComponent implements OnInit {

  ingredient: Ingredient = new Ingredient(1, 'test','data')
  constructor(
    private route: ActivatedRoute,
    private ingredientsService: IngredientsService
  ) { }

  ngOnInit() {
    this.route.params 
        .subscribe(
          (params: Params) => {
            this.ingredient = this.ingredientsService.getIngredient(+params['id'])
          }
        )

  }

}
