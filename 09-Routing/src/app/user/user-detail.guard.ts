import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";
export class UserDetailGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean{
    console.log(route);
    console.log(state);
    return confirm('Are you sure?');
  }

}
