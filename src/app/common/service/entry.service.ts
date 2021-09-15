import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EntryService {

    constructor(private http: HttpClient) {
    }

    getAllEntries() {
      this.http.get<any>('http://localhost:5001/flipcoin-bot/us-central1/application/api/binance/frontendapi/entry/all').subscribe(data => {
        console.log(JSON.stringify(data));
        return data;
      })
    }
}
