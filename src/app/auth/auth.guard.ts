/**
 * Created by jackycao on 2017/5/22.
 */
import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(localStorage.getItem('currentUser')) {
            return true;
        }

        this.router.navigate(['/home/login'], { queryParams: {returnUrl: state.url}});
        return false;
    }

    canLoad(route: Route) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }

        this.router.navigate(['/home/login'], { queryParams: {returnUrl: route.path}});
        return false;
    }

}
