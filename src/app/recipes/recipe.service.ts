import { Injectable } from '@angular/core';


import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';


@Injectable()
export class RecipeService {


private recipes: Recipe[] = [
        new Recipe('Beef Skewers', 'Beef Skewers','../../../assets/img/img-1.jpg',
        [new Ingredient('Meat', 1),
        new Ingredient('Pepper', 1),
        new Ingredient('Zucchini', 1),
        new Ingredient('Mushroom', 20)
        ]),
        new Recipe('Pork Fillet', 'Pork Fillet', '../../../assets/img/img-2.jpg',
        [new Ingredient('Meat', 1),
        new Ingredient('Speatzle', 1),
        new Ingredient('Mushroom', 10)
        ]),
        new Recipe('Pancake', 'Sweet or Savory ', '../../../assets/img/img-3.jpg',
        [new Ingredient('Egg', 2),
        new Ingredient('Flour', 1),
        new Ingredient('Milk', 1),
        new Ingredient('Salt', 1),
        new Ingredient('Sugar', 1),
        new Ingredient('Mineral Water', 1)
        ]),
        new Recipe('Beef Steak', 'Beef Steak', '../../../assets/img/img-4.jpg',
        [new Ingredient('Meat', 1),
         new Ingredient('Potato', 3),
         new Ingredient('Mushroom', 10)
        ]),
        new Recipe('Birthday Cake', 'Birthday Cake', '../../../assets/img/img-5.jpg',
        [new Ingredient('Egg', 3),
          new Ingredient('Flour', 1),
         new Ingredient('Sugar', 1),
         new Ingredient('Quark Cheese', 2)
        ]),

      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);

      }
}
