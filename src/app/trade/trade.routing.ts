/**
 * Created by jackycao on 2017/5/28.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TradeListComponent } from './list/list.component';
import { TradeDetailComponent } from './detail/detail.component';
import { TradeComponent } from './trade.component';
import { TradePostComponent } from './post/post.component';
import { MyListComponent } from './my-list/my-list.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { MyInfoComponent } from './my-info/my-info.component';
import {TradeUpdateComponent} from "./update/update.component";
import { MyMessageComponent } from './my-message/my-message.component';
import {UserComponent} from "./user/user.component";
import {MyCommentComponent} from "./my-comment/my-comment.component";

const tradeRoutes: Routes = [
    {
        path: '',
        component: TradeComponent,
        children: [
            {
                path: '',
                redirectTo: 'all',
                pathMatch: 'full'
            },
            {
                path: 'all',
                component: TradeListComponent
            },
            {
                path: 'mylist',
                component: MyListComponent
            },
            {
                path: 'mycollection',
                component: MyCollectionComponent
            },
            {
                path: 'myinfo',
                component: MyInfoComponent
            },
            {
                path: 'mymessage',
                component: MyMessageComponent
            },
            {
                path: 'mycomment',
                component: MyCommentComponent
            },
            {
                path: 'update/:id',
                component: TradeUpdateComponent
            },
            {
                path: 'user/:id',
                component: UserComponent
            },
            {
                path: ':id',
                component: TradeDetailComponent
            },
            {
                path: 'post/:sell',
                component: TradePostComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(tradeRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class TradeRoutingModule {}
