import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Strategy} from "../../model/entry/strategy.model";

@Injectable({
    providedIn: 'root'
})
export class StrategyService {

    constructor(private http: HttpClient) {
    }

    getStrategy(strategyId: string): Observable<Strategy> {
        const baseUrl = environment.apiUrl;
        return this.http.get<any>(`${baseUrl}/binance/frontendapi/strategy/${strategyId}`);
    }

    createStrategy(strategy: Strategy): Observable<Strategy> {
        const baseUrl = environment.apiUrl;
        return this.http.post<any>(`${baseUrl}/binance/frontendapi/strategy/create`, strategy);
    }

    updateStrategy(strategy: Strategy): Observable<Strategy> {
        const baseUrl = environment.apiUrl;
        return this.http.post<any>(`${baseUrl}/binance/frontendapi/strategy/update`, strategy);
    }

    deleteStrategy(strategy: Strategy): Observable<Strategy> {
        const baseUrl = environment.apiUrl;
        return this.http.post<any>(`${baseUrl}/binance/frontendapi/strategy/delete`, strategy);
    }

    getAllStrategy(): Observable<Strategy[]> {
        const baseUrl = environment.apiUrl;
        return this.http.get<any>(`${baseUrl}/binance/frontendapi/allstrategy`);
    }


}
