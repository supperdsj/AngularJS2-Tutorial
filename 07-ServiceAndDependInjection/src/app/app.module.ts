import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CmpAComponent} from './service/cmp-a.component';
import {CmpBComponent} from './service/cmp-b.component';
import {DataService} from "./service/data.service";
import {LogService} from "./service/log.service";
@NgModule({
  declarations: [
    AppComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
