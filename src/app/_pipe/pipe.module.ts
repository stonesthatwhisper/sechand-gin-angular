/**
 * Created by jackycao on 2017/5/30.
 */
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UidToNamePipe} from "./uid2uname.pipe";
import {BoolToSellPipe} from "./bool2sell.pipe";


@NgModule({
    declarations:[
        UidToNamePipe,
        BoolToSellPipe
    ],
    imports:[CommonModule],
    exports:[
        UidToNamePipe,
        BoolToSellPipe
    ]
})

export class PipeModule{}
