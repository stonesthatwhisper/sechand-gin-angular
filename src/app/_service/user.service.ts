/**
 * Created by jackycao on 2017/5/22.
 */
import { Injectable } from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {User} from "./user";



@Injectable()
export class UserService {
    constructor(
        private http: Http
    ) {}

    createUser(user: User) {
        return this.http.post('/api/users', user, this.jwt()).map(response => response.json());
    }

    getById(id: number) {
        return this.http.get('api/users/' + id, this.jwt()).map(response => response.json());
    }

    updateById(user: User) {
        return this.http.post('/api/users/' + user.id, user, this.jwt()).map(response => response.json());
    }

    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({ headers: headers});
        }
    }
}
