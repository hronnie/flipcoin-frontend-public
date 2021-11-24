import {Component} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";

@Component({
    selector: 'app-entry-details-renderer',
    templateUrl: './entry-details-renderer.component.html',
    styleUrls: ['./entry-details-renderer.component.scss']
})
export class EntryDetailsRendererComponent {

    params: ICellRendererParams;
    private componentParent: any;

    constructor() {
    }

    agInit(params: ICellRendererParams): void {
        this.params = params;
        this.componentParent = this.params.context.componentParent;
    }

    deleteEntry(entryId: string) {
        this.componentParent.showDeleteModal(entryId);
    }
}
