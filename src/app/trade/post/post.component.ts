/**
 * Created by jackycao on 2017/5/29.
 */
import {Component, OnInit} from "@angular/core";
import {TradeService} from "../../_service/trade.service";
import {Trade} from "../../_model/trade";
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from "@angular/router";
import {UserService} from "../../_service/user.service";
import {AlertService} from "../../_service/alert.service";
import {FileUploader} from "ng2-file-upload";


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

    private uploader = new FileUploader({
        method: "POST",
        itemAlias: "uploadFile",
        allowedMimeType: ['image/jpeg', 'image/jpg'],
        allowedFileType: ['image'],
        queueLimit: 3,
        authToken: this.userService.token()
    });

    ngOnInit() {
        this.trade.sell = (this.route.snapshot.params['sell'] == 'sell');
        this.trade.creator_id = this.userService.getCurrentUser().id;
        this.trade.active = true;
    }

    selectedFileOnChanged(event: any) {
        console.log(event.target.value);
        console.log(this.uploader.queue);
    }

    submit() {
        if (this.description.String) {
            this.description.Valid = true;
        } else {
            this.description.Valid = false;
        }
        this.trade.description = this.description;
        this.trade.type = +this.trade.type;
        this.submitting = true;
        console.log(this.trade);
        this.tradeService.createTrade(this.trade).subscribe(
            data => {
                console.log(data);
                let url = 'http://localhost:8088/api/upload/img/' + data;
                for (let item of this.uploader.queue) {
                    item.url = url;
                }
                this.uploader.onCompleteAll = () => {
                    this.router.navigate(['/trade']);
                };
                this.uploader.uploadAll();
            },
            error2 => {
                console.log(error2);
                this.alertService.error("发布失败");
                this.submitting = false;
            }
        )
    }

}