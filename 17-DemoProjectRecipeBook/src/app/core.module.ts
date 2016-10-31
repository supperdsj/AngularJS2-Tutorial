import {NgModule} from '@angular/core';
import {DropdownDirective} from "./dropdown.directive";
import {HomeComponent} from "./home.component";
@NgModule({
  declarations: [
    [DropdownDirective,HomeComponent]
  ],
  exports: [
    DropdownDirective
  ]
})

export class CoreModule{
}
