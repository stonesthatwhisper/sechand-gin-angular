/**
 * Created by jackycao on 2017/5/22.
 */
import { Component, Input, OnInit } from '@angular/core';

import { Trade } from '../../_model/trade';
import { TradeService } from '../../_service/trade.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {UserService} from "../../_service/user.service";

@Component({
    selector: 'trade-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.css']
})

export class TradeDetailComponent implements OnInit {
    //TODO
    private trade: any;

    constructor(
        private tradeService: TradeService,
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) {}
    ngOnInit(): void {
        //Todo
        this.route.params.switchMap((params: Params) => this.tradeService.getTradeById(params['id']))
            .subscribe(data => {
                this.trade = data;
            },
            error2 => {
                console.log(error2);
                this.router.navigate(['/trade']);
            });
        this.tradeService.checkCollectionById(this.userService.getCurrentUser().id, this.route.snapshot.params['id']).toPromise().then(
            data => {
                console.log('haha');
                this.trade.like = (data == 'true');
            },
            error2 => {
                console.log(error2);
            }
        )
    }

    isCreator() {
        return this.trade.creator_id === this.userService.getCurrentUser().id;
    }

    deleteTrade() {
        this.tradeService.deleteTradeById(this.trade.id).subscribe(
            data => {
                alert("删除成功");
                this.router.navigate(['/trade']);
            },
            error2 => {
                console.log(error2);
                alert("删除失败");
            }
        )
    }

    updateTrade() {
        this.router.navigate(['/trade/update/' + this.trade.id]);
    }

    changelike() {
        if (this.trade.like) {
            this.tradeService.changeCollectionById(this.userService.getCurrentUser().id, this.trade.id, 0).subscribe(
                data => {
                    this.router.navigate(['/trade/' + this.trade.id]);
                    //location.reload();
                }
            );
        } else {
            this.tradeService.changeCollectionById(this.userService.getCurrentUser().id, this.trade.id, 1).subscribe(
                data => {
                    this.router.navigate(['/trade/' + this.trade.id]);
                    //location.reload();
                }
            );
        }
    }
}