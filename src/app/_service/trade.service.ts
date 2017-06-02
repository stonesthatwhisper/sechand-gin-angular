/**
 * Created by jackycao on 2017/5/22.
 */
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Trade } from '../_model/trade';
import {Observable} from "rxjs/Observable";

@Injectable()
export class TradeService {
    private tradesUrl = 'http://localhost:8088/api/trades';
    private tradeUrl = 'http://localhost:8088/api/trade';

    constructor(
        private http: Http
    ) {}

    createTrade(trade: Trade) {
        return this.http.post(this.tradesUrl, trade, this.jwt()).map(response => response.text());
    }

    getTrades() {
        return this.http.get(this.tradesUrl, this.jwt()).map(response => response.json());
    }

    getTradeById(id: number) {
        const url = `${this.tradeUrl}/${id}`;
        return this.http.get(url, this.jwt()).map(response => response.json());
    }

    getTradesById(id: number) {
        return this.http.get(this.tradesUrl + '/creator/' + id, this.jwt()).map(response => response.json());
    }

    getCollectionById(id: number) {
        return this.http.get('http://localhost:8088/api/collections/' + id, this.jwt()).map(response => response.json())
    }

    deleteTradeById(id: number) {
        return this.http.delete('http://localhost:8088/api/trade/' + id, this.jwt()).map(response => response.text());
    }

    updateTradeById(trade: any) {
        return this.http.post('http://localhost:8088/api/trade', trade, this.jwt()).map(response => response.text());
    }

    setTradeActiveById(id: number) {
        return this.http.get('http://localhost:8088/api/trades/unactive/' + id, this.jwt()).map(response => response.text());
    }

    checkCollectionById(uid: number, tid: number) {
        return this.http.get('http://localhost:8088/api/collection/is?uid=' + uid + '&tid=' + tid, this.jwt()).map(response => response.text());
    }

    changeCollectionById(uid: number, tid:number, like: number) {
        return this.http.delete('http://localhost:8088/api/collections?uid=' + uid + '&tid=' + tid + '&like=' + like, this.jwt()).map(response => response.text());
    }

    getImageUrlById(tid: number) {
        return this.http.get('http://localhost:8088/api/upload/img/' + tid).map(response => response.json());
    }

    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({ headers: headers});
        }
    }
}