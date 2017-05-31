/**
 * Created by jackycao on 2017/5/24.
 */
import { Component, OnInit } from '@angular/core';

import { AlertService } from '../_service/';

@Component({
    selector: 'my-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
    message: any;

    constructor(
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }

}
