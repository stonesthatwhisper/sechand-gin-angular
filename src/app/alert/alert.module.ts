/**
 * Created by jackycao on 2017/5/30.
 */
import {NgModule} from "@angular/core";
import {AlertComponent} from "./alert.component";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
@NgModule({
    declarations: [
        AlertComponent
    ],
    imports: [
        NgbModule,
        CommonModule
    ],
    exports: [
        AlertComponent
    ]
})
export class AlertModule {}