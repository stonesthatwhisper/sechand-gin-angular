/**
 * Created by jackycao on 2017/5/28.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../_service/user.service";
import {AuthenticationService} from "../_service/authentication.service";


@Component({
    templateUrl: 'trade.component.html',
    styleUrls: ['trade.component.css']
})
export class TradeComponent implements OnInit {
    private user: any = {};

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        this.user = this.userService.getCurrentUser();
        this.user.avatarUrl = "http://localhost:8088/static/avatar/" + this.user.username + "-avatar.jpg";
    }

    logout() {
        this.authenticationService.logout();
        location.reload();
    }
}
