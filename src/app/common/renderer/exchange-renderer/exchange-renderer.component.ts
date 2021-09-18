import {Component} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";

@Component({
    selector: 'app-exchange-renderer',
    templateUrl: './exchange-renderer.component.html',
    styleUrls: ['./exchange-renderer.component.scss']
})
export class ExchangeRendererComponent {

    params: ICellRendererParams;

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

}
