import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent}   from './app.component';
import {HeaderComponent} from "./shared/header.component";
import {SignupComponent} from "./unprotected/signup.component";
import {SigninComponent} from "./unprotected/signin.component";
import {ProtectedComponent} from "./protected/protected.component";
import {routing} from "./app.routes";
import {AuthService} from "./shared/auth.service";
import {AuthGuard} from "./shared/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ProtectedComponent
  ],
  imports: [BrowserModule, HttpModule, ReactiveFormsModule,
    routing],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
