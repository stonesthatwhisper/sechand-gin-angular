/**
 * Created by jackycao on 2017/6/1.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../../_service/user.service";
import {MessageService} from "../../_service/message.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Message} from "../../_model/message";


@Component({
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit{
    constructor(
        private userService: UserService,
        private messageService: MessageService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    private me: any;
    private user: any;
    private messages: any[];
    private privateMsg: string;

    ngOnInit() {
        this.me = this.userService.getCurrentUser();
        this.route.params.switchMap((params: Params) => this.userService.getById(params['id']))
            .subscribe(
                data => {
                    this.user = data;
                    if (this.me.id == this.user.id) {
                        this.router.navigate(['/trade/myinfo']);
                    } else {
                        this.messageService.getMessages(this.me.id, this.user.id).subscribe(
                            data2 => {
                                console.log(data2);
                                this.messages = data2;
                            },
                            error3 => {
                                console.log(error3);
                            }
                        );
                    }
                },
                error2 => {
                    console.log(error2);
                }
            );
    }

    sendMsg() {
        let sendContent: any = {};
        sendContent.from_uid = this.me.id;
        sendContent.to_uid = this.user.id;
        sendContent.content = this.privateMsg;
        this.messageService.createMessage(sendContent).subscribe(
            data => {
                location.reload();
            },
            error2 => {
                console.log(error2);
            }
        );
    }

}