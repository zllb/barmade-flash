import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

import { Observable }        from 'rxjs/Observable';
// import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class IngredientsService {

  constructor() { }

  private ingredients: Ingredient[] = [
      new Ingredient(1, 'Sweet Vermouth', 'Dolin Rouge Vermouth'),
      new Ingredient(2, 'Bourbon Whiskey', 'Four Roses Single Barrel'),
      new Ingredient(3, 'Aromatic Bitters', 'Angostura brand bitters'), 
      new Ingredient(4, 'Maraschino Cherry', 'Luxardo Maraschino Cherries'), 
      new Ingredient(5, 'Heavy Whipping Cream','Kemps Heavy Whipping Cream'),
      new Ingredient(5, 'Cold Brewed Coffee','Generic Brand X'),
      new Ingredient(6, 'Maple Syrup',"pa's homemade maple syrup"),
      new Ingredient(7, 'Blood Orange Juice','Juice of the blood orange'),
      new Ingredient(8, 'Single Malt Scotch','Dewars 12 year'),
      new Ingredient(9, 'Cherry Liqour','Cherry Heering'),
      new Ingredient(10, 'Lemon Juice','Juice of the lemon'),
      new Ingredient(11, 'Egg White','Egg Whites'),
      new Ingredient(12, 'Simple Syrup','Plain Simple Syrup'),
      new Ingredient(13, 'Orange Peel','Orange Peel Garnish'),
      new Ingredient(14, 'Lemon peel','Lemon Peel garnish'),
      new Ingredient(15, 'Gin','Pine Needle Piss')
  ]

  getIngredients(){ 
    return this.ingredients.slice();
  }

  getIngredient(id: number){ 
    const ingredient = this.ingredients.find(
      (x) => {
        return x.id === id;
    });

    return ingredient;
  }

  getIngredientsObservable(){ 
    return Observable.of(this.ingredients);
  }

}
