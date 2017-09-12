import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule }                   from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ROUTING } from "./app.routing.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        JsonpModule,
        ROUTING
    ],
    providers: [
        HttpModule,
        HttpClientModule,
        JsonpModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

  constructor() {
  }
}