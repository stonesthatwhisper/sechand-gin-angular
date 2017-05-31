/**
 * Created by jackycao on 2017/5/22.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { TradeService } from '../../_service/trade.service';
import { Trade } from '../../_model/trade';
import { NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'trade-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css'],
    providers: [ NgbPaginationConfig ]
})

export class TradeListComponent implements OnInit {
    //TODO
    private allTrade: Trade[];
    errMsg: any;
    pagedTrades: Trade[];
    private collectionSize: number;
    private currentPage: number = 1;

    constructor(
        private tradeService: TradeService,
        private route: ActivatedRoute,
        private router: Router,
        config: NgbPaginationConfig
    ) {
        config.size = 'lg';
        config.pageSize = 15;
        config.boundaryLinks = true;
        config.rotate = true;
        config.maxSize = 10;
        config.ellipses = false;
    }

    ngOnInit() {
        this.tradeService.getTrades().subscribe(
            data => {
                console.log(data);
                this.allTrade = data;
                this.collectionSize = data.length;
                this.setPage(this.currentPage);
            },
            error2 => {
                this.errMsg = error2._body;
            }
        )
    }

    setPage(page: number) {
        this.currentPage = page;
        let startIndex = (this.currentPage - 1) * 15;
        let endIndex = Math.min(startIndex + 15 - 1, this.collectionSize - 1);
        console.log(this.allTrade);
        console.log(this.currentPage);
        console.log(startIndex);
        console.log(endIndex);
        this.pagedTrades = this.allTrade.slice(startIndex, endIndex + 1);
        console.log(this.pagedTrades);
    }


    postsell() {
        this.router.navigate(['/trade/post/' + true]);
    }
    postbuy() {
        this.router.navigate(['/trade/post/' + false]);
    }
}
