import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from './ingredient.service';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/switch'

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Injectable()
export class IngredientSearchService {

  constructor(
    private iService: IngredientsService
  ) {}

  search(name: string){ 
    return this.iService.getIngredients()
               .filter((i) => { 
                  return i.name.toLowerCase().includes(name.toLowerCase());
               })
  }

  obsSearch(term: string){
    return this.iService.getIngredientsObservable()
  }

}
