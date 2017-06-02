/**
 * Created by jackycao on 2017/5/22.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../../auth/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.createUser(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/home/login']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}
