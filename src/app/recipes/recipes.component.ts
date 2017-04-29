import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeSelected: string;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;
  dataSource: Observable<any>;
  recipes: Recipe[];
  filteredRecipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    this.dataSource = Observable
      .create((observer: any) => {
        observer.next(this.recipeSelected);
      })
      .mergeMap((token: string) => this.getRecipesAsObservable(token));
    }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.filteredRecipes = this.recipeService.getRecipes();
  }

  getRecipesAsObservable(token: string): Observable<any> {
    let query = new RegExp(token, 'ig');

    return Observable.of(
      this.recipes.filter((recipe: any) => {
        return query.test(recipe.name);
      })
    );
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    this.filteredRecipes = this.recipeService.getFilteredRecipes(e.value);
  }

  filterReset() {
    this.filteredRecipes = this.recipeService.getRecipes();
  }

}
