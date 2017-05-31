import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import {AppRouteModule} from './app.routing';

import {LoginComponent} from "./home/login/login.component";
import {RegisterComponent} from "./home/register/register.component";
import {AlertService} from "./_service/alert.service";
import {AuthenticationService} from "./_service/authentication.service";
import {UserService} from "./_service/user.service";
import {AuthGuard} from "./auth/auth.guard";
import {AlertComponent} from "./alert/alert.component";
import {TradeModule} from "./trade/trade.module";
import {HomeModule} from "./home/home.module";
import {UidToNamePipe} from "./_pipe/uid2uname.pipe";
import {PipeModule} from "./_pipe/pipe.module";
import {NotFoundComponent} from "./not-found.component";
import {AlertModule} from "./alert/alert.module";

@NgModule({
  declarations: [
      AppComponent,
      NotFoundComponent
  ],
  imports: [
      NgbModule.forRoot(),
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRouteModule,
      PipeModule,
      AlertModule
  ],
    exports:[
    ],
  providers: [
      AuthGuard,
      AlertService,
      AuthenticationService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
