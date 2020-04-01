import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
selectedrecpie_recipecomponent : Recipe;
  constructor(private recipeservice: RecipeService ) { }

  ngOnInit() {

    this.recipeservice.selectedRecipe.subscribe(
      (recipe :Recipe) => {
        this.selectedrecpie_recipecomponent=recipe;
      }
    );
  }

}
