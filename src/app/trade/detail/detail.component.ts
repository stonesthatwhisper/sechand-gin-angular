/**
 * Created by jackycao on 2017/5/22.
 */
import { Component, Input, OnInit } from '@angular/core';

import { Trade } from '../_model/trade';
import { TradeService } from '../_service/trade.service';

@Component({
    selector: 'trade-detail',
    templateUrl: 'trade-detail.component.html',
    styleUrls: ['trade-detail.component.css']
})

export class TradeDetailComponent implements OnInit {
    //TODO
    @Input() trade: Trade;

    constructor(
        private tradeService: TradeService,
    ) {}
    ngOnInit(): void {
        //Todo
    }
}