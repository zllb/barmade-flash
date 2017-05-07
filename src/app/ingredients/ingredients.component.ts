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
// import 'rxjs/add/operator/switchMap';


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
    // this.ingredientsObservable = this.searchTerms
    //   .debounceTime(300)        // wait 300ms after each keystroke before considering the term
    //   .distinctUntilChanged()   // ignore if next search term is same as previous
    //   .switchMap(term => term   // switch to new observable each time the term changes
    //     // return the http search observable
    //     ? this.searchService.obsSearch(term)
    //     // or the observable of empty heroes if there was no search term
    //     : Observable.of<Ingredient[]>([]))
    //   .catch(error => {
    //     // TODO: add real error handling
    //     console.log(error);
    //     return Observable.of<Ingredient[]>([]);
    //   });
  }

  search(value: string){ 
    this.ingredients = this.searchService.search(value);
    // TODO: 
    // This will make far too many http calls, so we need to implent the Subject when the HTTP
  }

  searchObs(term: string){
    this.ingredientsObservable = this.searchService.obsSearch(term);
  }


}
