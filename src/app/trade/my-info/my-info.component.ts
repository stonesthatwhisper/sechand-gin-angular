/**
 * Created by jackycao on 2017/5/30.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../../_service/user.service";
import {User} from "../../_model/user";
import {AuthenticationService} from "../../_service/authentication.service";
import {Router} from "@angular/router";
import {AlertService} from "../../_service/alert.service";
import {FileUploader} from "ng2-file-upload";

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

    private uploader: FileUploader;
    private user: any;
    private changepassword: boolean = false;
    private submission: any = {};

    ngOnInit() {
        this.user = this.userService.getCurrentUser();
        this.user.avatarUrl = "http://localhost:8088/static/avatar/" + this.user.username + "-avatar.jpg";
        this.uploader = new FileUploader({
            url: "http://localhost:8088/api/upload/avatar/" + this.user.username,
            method: "POST",
            itemAlias: "uploadFile",
            allowedMimeType: ['image/jpeg', 'image/jpg'],
            allowedFileType: ['image'],
            queueLimit: 1,
            authToken: this.userService.token()
        });
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

    selectedFileOnChanged(event: any) {
        console.log(event.target.value);
        console.log(this.uploader);
        this.uploader.queue[0].onSuccess = (response, status, headers) => {
            console.log(response);
            console.log(status);
            // 上传文件成功
            if (status == 200) {
                location.reload();
            } else {
                alert("上传失败");
            }
        };
        this.uploader.queue[0].upload();
    }

}