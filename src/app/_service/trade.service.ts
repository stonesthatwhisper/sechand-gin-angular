/**
 * Created by jackycao on 2017/5/22.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Trade } from './trade';

@Injectable()
export class TradeService {
    private tradesUrl = ':8088/api/trades';
    private tradeUrl = ':8088/api/trade';

    constructor(
        private http: Http
    ) {}

    private errorHandler(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    getTrades(): Promise<Trade[]> {
        return this.http.get(this.tradesUrl).toPromise()
            .then(response => response.json() as Trade[])
            .catch(this.errorHandler)
    }

    getTradeById(id: number): Promise<Trade> {
        const url = `${this.tradeUrl}/${id}`;
        return this.http.get(url).toPromise()
            .then(response => response.json() as Trade)
            .catch(this.errorHandler)
    }
}