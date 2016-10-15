import {Injectable} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../../../../08-DemoProjectRecipeBook/src/app/shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dean', 'Dean W', 'http://img3.imgtn.bdimg.com/it/u=3118271942,3644385731&fm=21&gp=0.jpgng g c recipe-detail', [new Ingredient('brother', 1),new Ingredient('berger', 2),new Ingredient('anger', 998)]),
    new Recipe('Sam', 'Sam W', 'http://img3.imgtn.bdimg.com/it/u=2201211702,2914111393&fm=21&gp=0.jpg', [new Ingredient('brother', 1),new Ingredient('naive', 1)]),
    new Recipe('Cas', 'Castiel', 'http://img4.imgtn.bdimg.com/it/u=967540404,358529380&fm=21&gp=0.jpg', [new Ingredient('angle', 1),new Ingredient('naive', 1)])
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }
}
