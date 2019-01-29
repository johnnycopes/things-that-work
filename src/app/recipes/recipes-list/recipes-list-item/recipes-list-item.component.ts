import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe.interface';

@Component({
  selector: 'app-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.scss']
})
export class RecipesListItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
