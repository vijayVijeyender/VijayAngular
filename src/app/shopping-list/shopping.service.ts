import { Ingredient } from './ingredient.model';

export class ShoppingService{
ingredient: Ingredient [] = [new Ingredient('apples', '10'),
    new Ingredient('oranges', '10')];

    geting(){
        return this.ingredient;
    }
    
    onnewingadded(inc: Ingredient){
        this.ingredient.push(inc);
      }

}