/**
 * Created by jackycao on 2017/5/30.
 */
import {Component, OnInit} from "@angular/core";
import {TradeService} from "../../_service/trade.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    templateUrl: 'update.component.html'
})

export class TradeUpdateComponent implements OnInit {
    constructor(
        private tradeService: TradeService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    private submitting: boolean = false;
    private trade: any;

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.tradeService.getTradeById(id).subscribe(
            data => {
                this.trade = data;
            },
            error2 => {
                console.log(error2);
                this.router.navigate(['/trade/' + id]);
            }
        );
        console.log(this.trade);
    }

    submit() {
        this.submitting = true;
        if (this.trade.description.String) {
            this.trade.description.Valid = true;
        } else {
            this.trade.description.Valid = false;
        }
        this.tradeService.updateTradeById(this.trade).subscribe(
            data => {
                alert("修改成功");
                this.router.navigate(['/trade/' + this.trade.id]);
            },
            error2 => {
                alert("修改失败");
                this.submitting = false;
            }
        )
    }
}