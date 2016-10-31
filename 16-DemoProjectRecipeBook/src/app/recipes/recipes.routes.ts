import {Routes} from "@angular/router";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
export const RECIPE_ROUTES:Routes = [
  {path:'',component:RecipeStartComponent},
  {path:'new',component:RecipeEditComponent},
  {path:':id',component:RecipeDetailComponent},
  {path:':id/edit',component:RecipeEditComponent},
];
