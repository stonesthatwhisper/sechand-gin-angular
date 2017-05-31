import {Pipe, PipeTransform} from "@angular/core";
/**
 * Created by jackycao on 2017/5/30.
 */
@Pipe({
    name: 'BoolToSell'
})
export class BoolToSellPipe implements PipeTransform {
    transform(value: boolean) {
        return value ? '出售':'求购';
    }
}