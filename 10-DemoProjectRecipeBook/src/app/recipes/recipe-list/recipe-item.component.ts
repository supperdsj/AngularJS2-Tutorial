import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from '../recipe'
import {RecipeService} from "../recipe.service";
@Component({
    selector: 'rb-recipe-item',
    templateUrl: 'recipe-item.component.html',
    styleUrls: ['recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

    @Input() recipe: Recipe;
    recipeId: number;

    constructor(private recipeService:RecipeService) {
    }

    ngOnInit() {
    }

}
