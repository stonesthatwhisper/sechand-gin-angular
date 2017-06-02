/**
 * Created by jackycao on 2017/6/1.
 */
import {Component, OnInit} from "@angular/core";
import {CommentService} from "../../_service/comment.service";
import {UserService} from "../../_service/user.service";

@Component({
    templateUrl: 'my-comment.component.html'
})
export class MyCommentComponent implements OnInit{
    constructor(
        private commentService: CommentService,
        private userService: UserService
    ) {}

    private myReceive: any[];
    private mySend: any[];

    ngOnInit() {
        this.commentService.getSendCommentById(this.userService.getCurrentUser().id).subscribe(
            data => {
                this.mySend = data;
            },
            error2 => {
                console.log(error2);
            }
        );
        this.commentService.getReceCommentById(this.userService.getCurrentUser().id).subscribe(
            data => {
                this.myReceive = data;
            },
            error2 => {
                console.log(error2);
            }
        )
    }
}