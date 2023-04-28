import { Injectable } from '@angular/core';


import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';


@Injectable()
export class RecipeService {


private recipes: Recipe[] = [
        new Recipe('Fleischspieße', 'Fleischspieße','../../../assets/img/img-1.jpg',
        [new Ingredient('Fleisch', 1),
        new Ingredient('Paprika', 1),
        new Ingredient('Zucchini', 1),
        new Ingredient('Champignons', 20)
        ]),
        new Recipe('Schwienefilet', 'Schwienefilet', '../../../assets/img/img-2.jpg',
        [new Ingredient('Fleisch', 1),
        new Ingredient('Spätzle', 1),
        new Ingredient('Champignons', 1)
        ]),
        new Recipe('Pfannkuchen', 'Süß oder Herzhaft', '../../../assets/img/img-3.jpg',
        [new Ingredient('Eier', 2),
        new Ingredient('Mehl', 1),
        new Ingredient('Milch', 1),
        new Ingredient('Salz', 1),
        new Ingredient('Zucker', 1),
        new Ingredient('Mineralwasser', 1)
        ]),
        new Recipe('Rindersteak', 'Rindersteak', '../../../assets/img/img-4.jpg',
        [new Ingredient('Rindersteak', 1),
         new Ingredient('Kartoffel', 3),
         new Ingredient('Pfifferlinge', 10)
        ]),
        new Recipe('Torte', 'Geburtstagstorte', '../../../assets/img/img-5.jpg',
        [new Ingredient('Eier', 3),
          new Ingredient('Mehl', 1),
         new Ingredient('Zucker', 1),
         new Ingredient('Quark', 2)
        ])

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
