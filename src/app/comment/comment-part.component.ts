/**
 * Created by jackycao on 2017/5/30.
 */
import {Component, Input, OnInit} from "@angular/core";
@Component({
    selector: "comment-part",
    templateUrl: "comment-part.component.html"
})

export class CommentPartComponent implements OnInit{
    @Input() content: string;
    @Input() from_uid: number;
    @Input() to_uid: number;
    @Input() creator_id: number;
    @Input() from_name: string;
    @Input() to_name: string;

    private speaker: string;

    ngOnInit() {
        if (this.to_uid == this.creator_id) {
            this.speaker = this.from_name + ':';
        } else {
            this.speaker = this.from_name + '@' + this.to_name + ':';
        }
    }
}