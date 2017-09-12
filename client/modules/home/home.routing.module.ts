import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components to use
import { HomeComponent }        from '../../components/home/home.component';



const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: HomeComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {

  constructor() {
  }
}