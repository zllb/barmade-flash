import { Component, OnInit } from '@angular/core';

import { IngredientsService } from './ingredient.service';
import { IngredientSearchService } from './ingredient-search.service';
import { Ingredient }        from '../shared/ingredient.model';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'], 
  providers: [IngredientsService, IngredientSearchService]
})
export class IngredientsComponent implements OnInit {
  
  ingredientsObservable: Observable<Ingredient[]>;
  private searchTerms = new Subject<string>();
  ingredients: Ingredient[];

  constructor(
    private iService: IngredientsService,
    private searchService: IngredientSearchService
  ) { }

  ngOnInit() {
    this.ingredients = this.iService.getIngredients()
    // console.log(this.ingredients)
  }

  search(value: string){ 
    this.ingredients = this.searchService.search(value);
  }


}
