/**
 * Created by jackycao on 2017/6/2.
 */
import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: 'valueToType'
})

export class ValueToTypePipe implements PipeTransform {
    transform(value: number) {
        if (value == 4) {
            return '其他';
        }
        if (value == 3) {
            return '家居生活';
        }
        if (value == 2) {
            return '电子商品';
        }
        return '图书音像';
    }
}