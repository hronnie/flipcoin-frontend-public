import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entry} from "../../model/entry/entry.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {EntryOrders} from "../../model/entry/entryOrders.model";

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

    getEntryOrders(entryId: string): Observable<EntryOrders> {
        const baseUrl = environment.apiUrl;
        return this.http.get<EntryOrders>(`${baseUrl}/binance/frontendapi/entry/orders/${entryId}`);
    }
}
