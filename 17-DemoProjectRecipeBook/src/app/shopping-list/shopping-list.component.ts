import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[];
  selectItem: Ingredient = null;

  constructor(private sls: ShoppingListService) {
  }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onSelectItem(item: Ingredient) {
    this.selectItem = item;
  }

  onCleared() {
    this.selectItem = null;
  }

}
