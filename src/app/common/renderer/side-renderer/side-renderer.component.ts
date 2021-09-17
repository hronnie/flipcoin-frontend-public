import {Component, OnInit} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";

@Component({
    selector: 'app-side-renderer',
    templateUrl: './side-renderer.component.html',
    styleUrls: ['./side-renderer.component.scss']
})
export class SideRendererComponent {

    params: ICellRendererParams;

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

}
