import {Component, OnInit} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";

@Component({
    selector: 'app-price-renderer',
    templateUrl: './price-renderer.component.html',
    styleUrls: ['./price-renderer.component.scss']
})
export class PriceRendererComponent {

    params: ICellRendererParams;

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

}
