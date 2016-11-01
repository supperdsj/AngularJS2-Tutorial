import {Routes, RouterModule} from "@angular/router";
import {SignupComponent} from "./unprotected/signup.component";
import {SigninComponent} from "./unprotected/signin.component";
import {ProtectedComponent} from "./protected/protected.component";
import {AuthGuard} from "./shared/auth.guard";

const APP_ROUTES: Routes = [
  {path: '', redirectTo:'/signup',pathMatch:'full'},
  {path: 'signup',component:SignupComponent},
  {path: 'signin',component:SigninComponent},
  {path: 'protected',component:ProtectedComponent,canActivate:[AuthGuard]},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
