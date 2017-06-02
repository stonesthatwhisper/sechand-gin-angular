/**
 * Created by jackycao on 2017/5/29.
 */
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Comment } from '../_model/comment';
import {Observable} from "rxjs/Observable";

@Injectable()
export class CommentService {
    private commentsUrl = 'http://localhost:8088/api/comments';

    constructor(
        private http: Http
    ) {}

    createComment(comment: Comment) {
        return this.http.post('http://localhost:8088/api/comments', comment, this.jwt()).map(response => response.text());
    }

    getCommentsById(id: number): Observable<Comment[]> {
        const url = `${this.commentsUrl}/trade/${id}`;
        return this.http.get(url, this.jwt()).map(response => response.json());
    }

    deleteCommentById(id: number) {
        return this.http.delete('http://localhost:8088/api/comments/' + id, this.jwt()).map(response => response.text());
    }

    getSendCommentById(id: number) {
        return this.http.get('http://localhost:8088/api/comment/send/' + id, this.jwt()).map(response => response.json());
    }

    getReceCommentById(id: number) {
        return this.http.get('http://localhost:8088/api/comment/rece/' + id, this.jwt()).map(response => response.json());
    }

    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({ headers: headers});
        }
    }
}