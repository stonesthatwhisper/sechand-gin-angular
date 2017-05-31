/**
 * Created by jackycao on 2017/5/29.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Comment} from "../_model/comment";
import { Trade } from "../_model/trade";
import {CommentService} from "../_service/comment.service";
import {UserService} from "../_service/user.service";
import {AlertService} from "../_service/alert.service";
@Component({
    selector: 'my-comment',
    templateUrl: 'comment.component.html',
    styleUrls: ['comment.component.css']
})

export class CommentComponent implements OnInit{
    @Input() trade: any;

    private comments: any[];

    private targetComment: any = {};

    private mainComment: string = "";
    private subComment: string = "";

    constructor(
        private commentService: CommentService,
        private userService: UserService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.commentService.getCommentsById(this.trade.id)
            .subscribe(
                data => {
                    this.comments = data;
                },
                error2 => {
                    console.log(error2);
                }
            );
    }

    show(comment: Comment) {
        if (this.targetComment && comment.id == this.targetComment.id) {
            this.targetComment = null;
        } else {
            this.targetComment = comment;
        }
    }

    isSelected(comment: Comment) {
        if (this.targetComment == null) {
            return true;
        }
        return !(comment.id === this.targetComment.id);
    }

    sendMainComment() {
        if (!this.mainComment) {
            this.alertService.error("内容不得为空");
            return;
        }
        let comment: any = {};
        comment.content = this.mainComment;
        comment.from_uid = this.userService.getCurrentUser().id;
        comment.to_uid = this.trade.creator_id;
        comment.trade_id = this.trade.id;
        this.commentService.createComment(comment)
            .subscribe(
                data => {
                    location.reload();
                },
                error2 => {

                }
            );
    }

    sendSubComment() {
        if (!this.subComment) {
            this.alertService.error("内容不得为空");
            return;
        }
        let comment: any = {};
        comment.content = this.subComment;
        comment.from_uid = this.userService.getCurrentUser().id;
        comment.to_uid = this.targetComment.from_uid;
        comment.trade_id = this.trade.id;
        this.commentService.createComment(comment)
            .subscribe(
                data => {
                    location.reload();
                },
                error2 => {

                }
            )
    }

    myComment(comment) {
        return this.userService.getCurrentUser().id === comment.from_uid;
    }

    deleteComment(comment) {
        this.commentService.deleteCommentById(comment.id).subscribe(
            data => {
                alert("删除成功");
                location.reload();
            },
            error2 => {
                alert("删除失败");
            }
        )
    }

}