import { NgModule }                      from "@angular/core";
import { FormsModule }                   from "@angular/forms";
import { CommonModule }                  from '@angular/common';
import { HttpModule }                    from "@angular/http";
import { HomeRoutingModule }             from './home.routing.module';

// Import all the components
import { HomeComponent }                 from '../../components/home/home.component';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        CommonModule,
        HomeRoutingModule
    ],
    providers: [
    ],
    declarations: [
      HomeComponent
    ],
    exports: [
      HomeComponent
    ]
})
export class HomeModule {
  constructor() {
  }
}