import {Component} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";

@Component({
    selector: 'app-yes-no-renderer',
    templateUrl: './yes-no-renderer.component.html',
    styleUrls: ['./yes-no-renderer.component.scss']
})
export class YesNoRendererComponent {

    params: ICellRendererParams;

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

}
