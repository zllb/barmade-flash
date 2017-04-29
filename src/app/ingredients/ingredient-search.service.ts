import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from './Ingredient.Service';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Injectable()
export class IngredientSearchService {

  constructor(
    
  ) {}

}
