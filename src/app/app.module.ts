import { ShoppingService } from './shopping-list/shopping.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { AppRoutingModule } from './app-routing-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeService } from './recipe/recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective


  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RecipeService,ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
