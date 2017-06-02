/**
 * Created by jackycao on 2017/5/30.
 */
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UidToNamePipe} from "./uid2uname.pipe";
import {BoolToSellPipe} from "./bool2sell.pipe";
import {ValueToTypePipe} from "./value2type.pipe";
import {BoolToActivePipe} from "./bool2active.pipe";


@NgModule({
    declarations:[
        UidToNamePipe,
        BoolToSellPipe,
        ValueToTypePipe,
        BoolToActivePipe
    ],
    imports:[CommonModule],
    exports:[
        UidToNamePipe,
        BoolToSellPipe,
        ValueToTypePipe,
        BoolToActivePipe
    ]
})

export class PipeModule{}
