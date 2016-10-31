import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";
import {Headers, Http, Response} from "@angular/http"
import "rxjs/Rx"
@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Dean', 'Dean W', 'http://img3.imgtn.bdimg.com/it/u=3118271942,3644385731&fm=21&gp=0.jpgng g c recipe-detail', [new Ingredient('brother', 1), new Ingredient('berger', 2), new Ingredient('anger', 998)]),
    new Recipe('Sam', 'Sam W', 'http://img3.imgtn.bdimg.com/it/u=2201211702,2914111393&fm=21&gp=0.jpg', [new Ingredient('brother', 1), new Ingredient('naive', 1)]),
    new Recipe('Cas', 'Castiel', 'http://img4.imgtn.bdimg.com/it/u=967540404,358529380&fm=21&gp=0.jpg', [new Ingredient('angle', 1), new Ingredient('naive', 1)])
  ];

  constructor(private http: Http) {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://recipebook-9c719.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipebook-9c719.firebaseio.com/recipes.json')
      .map((response: Response)=>response.json())
      .subscribe(
        (data: Recipe[])=> {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        });
  }
}
