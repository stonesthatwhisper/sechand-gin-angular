/**
 * Created by jackycao on 2017/5/28.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}
