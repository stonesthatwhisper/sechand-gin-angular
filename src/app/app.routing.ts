/**
 * Created by jackycao on 2017/5/24.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeListComponent } from './trade/list/list.component'
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AuthGuard } from './auth/auth.guard'
import {NotFoundComponent} from "./not-found.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/trade',
        pathMatch: 'full'
    },
    {
        path: 'trade',
        loadChildren: 'app/trade/trade.module#TradeModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class AppRouteModule {}
