import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'recipes', component: RecipesComponent,
    children: [
      { path: ':id', component: RecipeDetailComponent }
    ]
  },
  { path: 'ingredients', component: IngredientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
