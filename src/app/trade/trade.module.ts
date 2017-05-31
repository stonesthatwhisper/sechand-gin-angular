/**
 * Created by jackycao on 2017/5/28.
 */
import { NgModule } from '@angular/core';
import {TradeDetailComponent} from "./detail/detail.component";
import {TradeListComponent} from "./list/list.component";
import {TradeRoutingModule} from "./trade.routing";
import {FormsModule} from "@angular/forms";

import { TradeService } from "../_service/trade.service";
import {TradeComponent} from "./trade.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {CommentComponent} from "../comment/comment.component";
import {CommentService} from "../_service/comment.service";
import {TradePostComponent} from "./post/post.component";
import {UserService} from "../_service/user.service";
import {AlertService} from "../_service/alert.service";
import {MyListComponent} from "./my-list/my-list.component";
import {UidToNamePipe} from "../_pipe/uid2uname.pipe";
import {PipeModule} from "../_pipe/pipe.module";
import {MyCollectionComponent} from "./my-collection/my-collection.component";
import {MyInfoComponent} from "./my-info/my-info.component";
import {AlertComponent} from "../alert/alert.component";
import {AlertModule} from "../alert/alert.module";
import {TradeUpdateComponent} from "./update/update.component";
import {CommentPartComponent} from "../comment/comment-part.component";

@NgModule({
    declarations: [
        TradeComponent,
        TradeDetailComponent,
        TradeListComponent,
        CommentComponent,
        TradePostComponent,
        MyListComponent,
        MyCollectionComponent,
        MyInfoComponent,
        TradeUpdateComponent,
        CommentPartComponent
    ],
    imports: [
        NgbModule,
        CommonModule,
        FormsModule,
        TradeRoutingModule,
        PipeModule,
        AlertModule
    ],
    providers: [
        UserService,
        TradeService,
        CommentService,
        AlertService
    ],
})

export class TradeModule {}