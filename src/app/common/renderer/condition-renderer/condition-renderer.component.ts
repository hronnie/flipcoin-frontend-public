import {Component} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";

@Component({
    selector: 'app-condition-renderer',
    templateUrl: './condition-renderer.component.html',
    styleUrls: ['./condition-renderer.component.scss']
})
export class ConditionRendererComponent {

    params: ICellRendererParams;

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

}
