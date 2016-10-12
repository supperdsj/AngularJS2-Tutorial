import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe'
@Component({
    selector: 'rb-recipe-list',
    templateUrl: 'recipe-list.component.html',
    styleUrls: ['recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];
    @Output() recipeSelected = new EventEmitter<Recipe>();
    recipe = new Recipe('Dean', 'Dean W', 'http://img3.imgtn.bdimg.com/it/u=3118271942,3644385731&fm=21&gp=0.jpgng g c recipe-detail');

    constructor() {
    }

    ngOnInit() {
    }

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}
