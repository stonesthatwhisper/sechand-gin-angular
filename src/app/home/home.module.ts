/**
 * Created by jackycao on 2017/5/28.
 */
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeRoutingModule} from "./home.routing";
import {AuthenticationService} from "../_service/authentication.service";
import {AlertService} from "../_service/alert.service";
import {AuthGuard} from "../auth/auth.guard";
import {HomeComponent} from "./home.component";
import {AlertComponent} from "../alert/alert.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AlertModule} from "../alert/alert.module";


@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [
        NgbModule,
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        AlertModule
    ],
    providers:[
        AuthenticationService,
        AlertService,
        AuthGuard
    ]
})
export class HomeModule {}
