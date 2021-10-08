import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entry} from "../../model/entry/entry.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {EntryOrders} from "../../model/entry/entryOrders.model";
import {FuturesRespPositionModel} from "../../model/response/positionResp.model";

@Injectable({
    providedIn: 'root'
})
export class EntryService {

    constructor(private http: HttpClient) {
    }

    getAllEntries(): Observable<Entry[]> {
        const baseUrl = environment.apiUrl;
        return this.http.get<any>(`${baseUrl}/binance/frontendapi/entry/all`);
    }

    getAllEntriesWithReports(): Observable<Entry[]> {
        const baseUrl = environment.apiUrl;
        return this.http.get<any>(`${baseUrl}/binance/frontendapi/entry-with-reports/all`);
    }

    getEntry(entryId: string): Observable<Entry> {
        const baseUrl = environment.apiUrl;
        return this.http.get<any>(`${baseUrl}/binance/frontendapi/entry/${entryId}`);
    }

    getEntryOrders(entryId: string, exchange: string): Observable<EntryOrders> {
        const baseUrl = environment.apiUrl;
        return this.http.get<any>(`${baseUrl}/${exchange}/frontendapi/entry/orders/${entryId}`);
    }

    getEntryPosition(entryId: string, exchange: string): Observable<FuturesRespPositionModel> {
        const baseUrl = environment.apiUrl;
        return this.http.get<any>(`${baseUrl}/${exchange}/frontendapi/entry/position/${entryId}`);
    }
}
