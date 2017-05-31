/**
 * Created by jackycao on 2017/5/30.
 */
import {Pipe, PipeTransform} from "@angular/core";
import {UserService} from "../_service/user.service";

@Pipe({
    name: 'uidToName'
})
export class UidToNamePipe implements PipeTransform {
    constructor(
        private userService: UserService
    ) {}

    private name: string;

    transform(value: number) {
        this.userService.getById(value).toPromise().then(
            data => {
                return this.name = data.name;
            }
        );
        console.log(this.name);
    }
}