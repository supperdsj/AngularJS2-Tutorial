import {Ingredient} from "../shared/ingredient";
export class Recipe {
    constructor(public name,public description,public imagePath,public ingredient:Ingredient[]){

    }
}
