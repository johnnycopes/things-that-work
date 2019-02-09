import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.filteredRecipes = this.recipesService.getRecipes();
  }

  onAddNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onSearch() {
    this.filteredRecipes = this.recipes.filter(recipe => {
      return recipe.name
        .toLowerCase()
        .indexOf(this.searchTerm) > -1;
    });
  }
}
