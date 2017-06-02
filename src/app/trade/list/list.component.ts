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
    filterTrades: Trade[];
    private searchString: String;
    private isActive: boolean = false;
    private type: number = 0;

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
                this.allTrade = data;
                this.filterTrades = this.allTrade
                if (this.filterTrades) {
                    this.collectionSize = this.filterTrades.length;
                    this.setPage(this.currentPage);
                }
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
        this.pagedTrades = this.filterTrades.slice(startIndex, endIndex + 1);
        console.log(this.pagedTrades);
    }

    searchFilter() {
        if (!this.allTrade)
            return;
        this.filterTrades = this.allTrade.filter((item: any) => {
            if (this.searchString && (item.title.indexOf(this.searchString) == -1)) {
                return false;
            }
            if ((!item.active) && this.isActive) {
                return false;
            }
            if (+this.type && (item.type !== +this.type)) {
                return false;
            }
            return true;
        });
        this.collectionSize = this.filterTrades.length;
        this.currentPage = 1;
        this.setPage(this.currentPage);
    }
    
    selectType(value: any) {
        this.type = value;
        this.searchFilter();
    }

    searchChange(event: any) {
        this.searchFilter();
    }

    selectActive(value: any) {
        this.searchFilter();
    }
}
