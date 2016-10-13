import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe'
@Component({
    selector: 'rb-recipe-list',
    templateUrl: 'recipe-list.component.html',
    styleUrls: ['recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
      new Recipe('Dean', 'Dean W', 'http://img3.imgtn.bdimg.com/it/u=3118271942,3644385731&fm=21&gp=0.jpgng g c recipe-detail',[]),
      new Recipe('Sam', 'Sam W', 'http://img3.imgtn.bdimg.com/it/u=2201211702,2914111393&fm=21&gp=0.jpg',[]),
      new Recipe('Cas', 'Castiel', 'http://img4.imgtn.bdimg.com/it/u=967540404,358529380&fm=21&gp=0.jpg',[])
    ];
    @Output() recipeSelected = new EventEmitter<Recipe>();
    // recipe = new Recipe('Dean', 'Dean W', 'http://img3.imgtn.bdimg.com/it/u=3118271942,3644385731&fm=21&gp=0.jpgng g c recipe-detail');

    constructor() {
    }

    ngOnInit() {
    }

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}
