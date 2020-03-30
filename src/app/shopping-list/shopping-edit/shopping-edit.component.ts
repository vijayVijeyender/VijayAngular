import { Component, OnInit, ViewChild, ElementRef, EventEmitter,Output } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @Output() newingadded=new EventEmitter<Ingredient>();
  @ViewChild('nameinput' ,{static:false}) nameinputref:ElementRef;
  @ViewChild('amountinput' ,{static:false}) amountinputref:ElementRef;
  constructor() { }


  ngOnInit() {
  }

  addnewing(){
const name=this.nameinputref.nativeElement.value;
const amount=this.amountinputref.nativeElement.value;
const ingadded= new Ingredient(name,amount);
this.newingadded.emit(ingadded);

  }
}
