import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Manhattan',
      'The Manhattan is one of six basic drinks listed in David A. Embury\'s classic The Fine Art of Mixing Drinks',
      'https://upload.wikimedia.org/wikipedia/commons/a/a1/A_Manhattan.jpg',
      [
        new Ingredient(1, 'Rye Whiskey', 'Rye Whiskey'),
        new Ingredient(2, 'Sweet Vermouth', 'Dolin Rouge Vermouth'),
        new Ingredient(3, 'Bitters', 'Angostura Bitters')
      ],
      [
        'Add all ingredients to a mixing glass',
        'Fill glass with ice',
        'Stir well and strain into a chilled cocktail glass',
        'Garnish with a cherry'
      ]),
    new Recipe(
      2,
      'French Sidecar',
      'Perhaps most closely related to the older brandy crusta',
      'https://upload.wikimedia.org/wikipedia/commons/9/94/Sidecar-cocktail.jpg',
      [
        new Ingredient(1, 'Cointreau', 'its alcoholic'),
        new Ingredient(2, 'Lemon Juice', 'Fresh Lemon Juice'),
        new Ingredient(3, 'Cognac', 'Cognac')
      ],
      [
        'Shake well with cracked ice',
        'Strain into a chilled cocktail glass that has had its outside rim rubbed with lemon juice and dipped in sugar'
      ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    const recipe = this.recipes.find(
      (r) => {
        return r.id === id;
      }
    );
    return recipe;
  }

  getFilteredRecipes(name: string) {
    return this.recipes.slice()
      .filter((r) => {
        return r.name.toLowerCase().includes(name.toLowerCase());
      });
  }

}
