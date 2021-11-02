import {Component, OnInit} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";

@Component({
    selector: 'app-strategy-actions-renderer',
    templateUrl: './strategy-actions-renderer.component.html',
    styleUrls: ['./strategy-actions-renderer.component.scss']
})
export class StrategyActionsRendererComponent {

    params: ICellRendererParams;

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

}
