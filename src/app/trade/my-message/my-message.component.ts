/**
 * Created by jackycao on 2017/6/1.
 */
import {Component, OnInit} from "@angular/core";
import {TradeService} from "../../_service/trade.service";
import {MessageService} from "../../_service/message.service";
import {UserService} from "../../_service/user.service";


@Component({
    templateUrl: 'my-message.component.html'
})

export class MyMessageComponent implements OnInit{
    constructor(
        private userService: UserService,
        private messageService: MessageService
    ) {}

    private messager: any[];

    ngOnInit() {
        this.messageService.getMessager(this.userService.getCurrentUser().id).subscribe(
            data => {
                 if(data) {
                     console.log(data);
                     this.messager = data;
                 }
            },
            error2 => {
                console.log(error2);
            }
        )
    }

}