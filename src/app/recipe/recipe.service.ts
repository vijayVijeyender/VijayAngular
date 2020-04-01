import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
    recipes: Recipe [] = [
        new Recipe('Test Recipe', 'Description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXEKidSPQayRIzhyubuRtep4NyLiZp1rbNzHVf4py0rSz2Uzmq'),
        new Recipe('another Test recipe ', 'Description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXEKidSPQayRIzhyubuRtep4NyLiZp1rbNzHVf4py0rSz2Uzmq')
      ];
selectedRecipe = new EventEmitter<Recipe>();

      getrecipe()
      {
          return this.recipes;
      }

}