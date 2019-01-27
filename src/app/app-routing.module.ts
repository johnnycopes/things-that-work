import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { KitchenComponent } from './kitchen/kitchen.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent, data: { page: 'recipes' } },
  { path: 'kitchen', component: KitchenComponent, data: { page: 'kitchen' } },
  { path: 'shopping-list', component: ShoppingListComponent, data: { page: 'shoppingList' } },
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // wildcard route (default/no match)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
