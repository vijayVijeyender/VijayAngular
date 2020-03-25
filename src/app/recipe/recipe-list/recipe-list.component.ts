import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedrecipe = new EventEmitter<Recipe>();
  recipes: Recipe [] = [
    new Recipe('Test Recipe', 'Description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXEKidSPQayRIzhyubuRtep4NyLiZp1rbNzHVf4py0rSz2Uzmq'),
    new Recipe('another Test recipe ', 'Description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXEKidSPQayRIzhyubuRtep4NyLiZp1rbNzHVf4py0rSz2Uzmq')
  ];

  constructor() {
  }

  ngOnInit() {
  }
  onsendselecteditem(featureName : Recipe){
    console.log("list component"+featureName.name);
    this.selectedrecipe.emit(featureName);
  }
}
