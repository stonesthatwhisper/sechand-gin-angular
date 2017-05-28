/**
 * Created by jackycao on 2017/5/22.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: Http
    ) {}

    login(username: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(':8088/api/authenticate', JSON.stringify({username: username, password: password}), options)
            .map((response: Response) => {
            let user = response.json();
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}