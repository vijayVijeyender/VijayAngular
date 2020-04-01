import {Component, OnInit} from '@angular/core';
import {Ingredient} from './ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient : Ingredient [];
   constructor(private shoppingservice :ShoppingService) {
  }


  ngOnInit() {
this.ingredient=this.shoppingservice.geting();
  }
  
}
