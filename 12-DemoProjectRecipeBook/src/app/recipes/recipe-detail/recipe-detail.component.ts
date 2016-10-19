import {Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";
@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit,OnDestroy {

  selectedRecipe: Recipe;
  private subscription: Subscription;
  private recipeIndex: number;

  constructor(private sls: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService,private router:Router) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any)=> {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredient);
  }
  onEdit(){
    this.router.navigate(['/recipes',this.recipeIndex,'edit']);
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }
}
