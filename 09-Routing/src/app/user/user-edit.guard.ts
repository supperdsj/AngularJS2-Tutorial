import {CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";

export interface ComponentCanDeactivate{
  canDeactivate:()=> Observable<boolean>|boolean;
}
export class UserEditGuard implements  CanDeactivate<ComponentCanDeactivate>{
  canDeactivate(component:ComponentCanDeactivate): Observable<boolean>|boolean {
    console.log(component);
    // console.log(route);
    // console.log(state);

    return component.canDeactivate?component.canDeactivate():true;
  }
}
