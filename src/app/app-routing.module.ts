import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
// import { RecipesComponent } from './recipes/recipes.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'ingredients', component: IngredientsComponent},
  // {path: 'recipes', component: RecipesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
