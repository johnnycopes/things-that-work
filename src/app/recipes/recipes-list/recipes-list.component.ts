import { Component, OnInit } from '@angular/core';

import { Recipe } from 'src/app/interfaces/recipe.interface';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  searchTerm: string;
  filteredRecipes: Recipe[] = [];
  private recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.filteredRecipes = this.recipesService.getRecipes();
  }

  onAddNewRecipe() {
    // do stuff here
  }

  onSearch() {
    this.filteredRecipes = this.recipes.filter(recipe => {
      return recipe.name
        .toLowerCase()
        .indexOf(this.searchTerm) > -1;
    });
  }
}
