import {Routes, RouterModule} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./home.component";
const APP_ROUTERS: Routes = [
  {path: '', component:HomeComponent},
  {path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTERS);
