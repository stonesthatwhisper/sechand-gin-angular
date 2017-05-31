/**
 * Created by jackycao on 2017/5/29.
 */
import {Component, Input} from "@angular/core";
import {CommentService} from "../_service/comment.service";

@Component({
    selector: "my-add-comment",
    templateUrl: 'add-comment.component.html'
})

export class AddCommentComponent {
    @Input() toUid: number;

    constructor(
        private commentService: CommentService
    ) {}


}