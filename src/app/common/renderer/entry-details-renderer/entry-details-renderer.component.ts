import {Component} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";

@Component({
    selector: 'app-entry-details-renderer',
    templateUrl: './entry-details-renderer.component.html',
    styleUrls: ['./entry-details-renderer.component.scss']
})
export class EntryDetailsRendererComponent {

    params: ICellRendererParams;


    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

}
