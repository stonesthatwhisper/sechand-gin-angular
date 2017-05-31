/**
 * Created by jackycao on 2017/5/30.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../../_service/user.service";
import {User} from "../../_model/user";
import {AuthenticationService} from "../../_service/authentication.service";
import {Router} from "@angular/router";
import {AlertService} from "../../_service/alert.service";

@Component({
    templateUrl: 'my-info.component.html'
})

export class MyInfoComponent implements OnInit {
    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private router: Router,
        private alertService: AlertService
    ) {}

    private user: any;
    private changepassword: boolean = false;
    private submission: any = {};

    ngOnInit() {
        this.user = this.userService.getCurrentUser();
    }

    changePassword() {
        this.changepassword = true;
    }

    submit() {
        this.user.password = this.submission.oldPassword;
        this.user.new_password = this.submission.newPassword;
        this.userService.updateById(this.user).subscribe(
            data => {
                alert("修改成功");
                this.authenticationService.logout();
                this.router.navigate(['/home/login']);
            },
            error2 => {
                this.alertService.error("原密码错误");
            }
        )
    }
}