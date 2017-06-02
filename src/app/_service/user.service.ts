/**
 * Created by jackycao on 2017/5/22.
 */
import { Injectable } from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {User} from "../_model/user";



@Injectable()
export class UserService {
    constructor(
        private http: Http
    ) {}

    createUser(user: User) {
        return this.http.post('http://localhost:8088/api/users', user, this.jwt()).map(response => response.json());
    }

    getById(id: number) {
        return this.http.get('http://localhost:8088/api/users/' + id, this.jwt()).map(response => response.json());
    }

    updateById(user: any) {
        return this.http.post('http://localhost:8088/api/users/update', user, this.jwt()).map(response => response.json());
    }

    getCurrentUser(): any {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser;
    }

    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({ headers: headers});
        }
    }

    token() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            return currentUser.token;
        }
    }
}
