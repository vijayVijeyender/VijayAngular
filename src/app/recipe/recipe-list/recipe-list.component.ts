import { RecipeService } from './../recipe.service';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies :Recipe [];
  constructor(private recipeservice :RecipeService) {
  }

  ngOnInit() {
    console.log("recipe on init")
this.recipies=this.recipeservice.getrecipe();
  }
 
}
