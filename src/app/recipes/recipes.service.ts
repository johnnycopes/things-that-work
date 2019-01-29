import { Injectable } from '@angular/core';

import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      name: 'Broccoli and cheddar soup',
      description: 'so delicious!',
      serves: 4,
      ingredients: [
        {
          name: 'frozen broccoli',
          quantity: 1,
          unit: 'bag'
        },
        {
          name: 'cheddar cheese',
          quantity: 8,
          unit: 'ounces'
        }
      ],
      instructions: [
        {
          steps: [
            'turn on instant pot',
            'add ingredients',
            'cook that sucker!'
          ]
        }
      ]
    },
    {
      name: 'Chicken tikka masala',
      description: 'so tasty!',
      serves: 6,
      ingredients: [
        {
          name: 'chicken',
          quantity: 2,
          unit: 'pounds'
        },
        {
          name: 'tomato sauce',
          quantity: 28,
          unit: 'ounces'
        }
      ],
      instructions: [
        {
          steps: [
            'turn on instant pot',
            'add ingredients',
            'cook that sucker!'
          ]
        }
      ]
    }
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
