import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: '../../client/modules/home/home.module#HomeModule'
    }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);