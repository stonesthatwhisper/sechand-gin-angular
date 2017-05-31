/**
 * Created by jackycao on 2017/5/29.
 */
import {Component} from "@angular/core";
import { Trade } from '../../_model/trade';
import { TradeService } from '../../_service/trade.service';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../_service/user.service";


@Component({
    templateUrl: 'my-list.component.html'
})

export class MyListComponent {
    private allTrade: any[];
    errMsg: any;
    pagedTrades: any[];
    private collectionSize: number;
    private currentPage: number = 1;

    constructor(
        private tradeService: TradeService,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.tradeService.getTradesById(this.userService.getCurrentUser().id).subscribe(
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