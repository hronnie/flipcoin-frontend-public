import {Component} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";

@Component({
    selector: 'app-date-renderer',
    templateUrl: './date-renderer.component.html',
    styleUrls: ['./date-renderer.component.scss']
})
export class DateRendererComponent {

    params: ICellRendererParams;

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

}
