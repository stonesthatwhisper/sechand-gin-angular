/**
 * Created by jackycao on 2017/5/29.
 */
import {Component, Input} from "@angular/core";
import {Timestamp} from "rxjs/Rx";
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
    selector: "relative-time",
    template: "{{relativeTime}}"
})

export class RelativeTimeComponent {
    @Input() datetime: DateTimeFormat;

    private relativeTime: DateTimeFormat;
}