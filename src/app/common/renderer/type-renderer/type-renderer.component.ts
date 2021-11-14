import {Component, OnInit} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";

@Component({
    selector: 'app-type-renderer',
    templateUrl: './type-renderer.component.html',
    styleUrls: ['./type-renderer.component.scss']
})
export class TypeRendererComponent {

    params: ICellRendererParams;

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

}
