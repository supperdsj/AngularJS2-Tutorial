import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataDrivenComponent } from "./data-driven/data-driven.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";

@NgModule({
  declarations: [
    AppComponent, DataDrivenComponent, TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
