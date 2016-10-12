import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LifecycleComponent} from './lifecycle/lifecycle.component';
import {StringInterpolationComponent} from './string-interpolation/string-interpolation.component';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {ComponentPropertyBindingComponent} from './component-property-binding/component-property-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {ComponentEventBindingComponent} from './component-event-binding/component-event-binding.component';
import {TwoWayBindingComponent} from './two-way-binding/two-way-binding.component';

@NgModule({
    declarations: [
        AppComponent,
        StringInterpolationComponent,
        PropertyBindingComponent,
        ComponentPropertyBindingComponent,
        EventBindingComponent,
        ComponentEventBindingComponent,
        TwoWayBindingComponent,
        LifecycleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
