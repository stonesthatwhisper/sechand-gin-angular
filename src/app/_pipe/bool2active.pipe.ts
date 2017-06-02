/**
 * Created by jackycao on 2017/6/2.
 */
import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: 'boolToActive'
})
export class BoolToActivePipe implements PipeTransform {
    transform(value: boolean) {
        if (value) {
            return '正在进行';
        } else {
            return '已结束';
        }
    }
}