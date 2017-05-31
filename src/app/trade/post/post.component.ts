/**
 * Created by jackycao on 2017/5/29.
 */
import {Component, OnInit} from "@angular/core";
import {TradeService} from "../../_service/trade.service";
import {Trade} from "../../_model/trade";
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from "@angular/router";
import {UserService} from "../../_service/user.service";
import {AlertService} from "../../_service/alert.service";


@Component({
    templateUrl: 'post.component.html'
})

export class TradePostComponent implements OnInit {

    private trade: any = {};
    private description: any = {};
    submitting: boolean = false;

    constructor(
        private tradeService: TradeService,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.trade.sell = (this.route.snapshot.params['sell'] == 'true');
        this.trade.creator_id = this.userService.getCurrentUser().id;
        this.trade.active = true;
    }

    submit() {
        if (this.description.String) {
            this.description.Valid = true;
        } else {
            this.description.Valid = false;
        }
        this.trade.description = this.description;
        this.submitting = true;
        console.log(this.trade);
        this.tradeService.createTrade(this.trade).subscribe(
            data => {
                console.log(data);
                this.router.navigate(['/trade']);
            },
            error2 => {
                console.log(error2);
                this.alertService.error("发布失败");
                this.submitting = false;
            }
        )
    }

}