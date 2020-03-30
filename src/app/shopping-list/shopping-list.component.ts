import {Component, OnInit} from '@angular/core';
import {Ingredient} from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredient [] = [new Ingredient('apples', '10'),
    new Ingredient('oranges', '10')];

  constructor() {
  }


  ngOnInit() {
  }
  onnewingadded(inc: Ingredient){
    this.ingredient.push(inc);
  }
}
