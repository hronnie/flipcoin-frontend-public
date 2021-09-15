import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entry} from "../../model/entry/entry.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EntryService {

    constructor(private http: HttpClient) {
    }

    getAllEntries(): Observable<Entry[]> {
      return this.http.get<any>('http://localhost:5001/flipcoin-bot/us-central1/application/api/binance/frontendapi/entry/all');
    }
}
