/**
 * Created by jackycao on 2017/6/1.
 */
import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Message} from "../_model/message";


@Injectable()
export class MessageService {
    constructor(
        private http: Http
    ) {}

    createMessage(message: Message) {
        return this.http.post('http://localhost:8088/api/messages', message, this.jwt()).map(response => response.text())
    }

    getMessager(id: number) {
        return this.http.get('http://localhost:8088/api/messages/' + id, this.jwt()).map(response => response.json());
    }

    getMessages(me: number, tar: number) {
        return this.http.get('http://localhost:8088/api/message?me=' + me + '&tar=' + tar, this.jwt()).map(response => response.json());
    }

    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({ headers: headers});
        }
    }
}