import {Component} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";
import {EntryService} from "../../service/entry.service";

@Component({
    selector: 'app-entry-details-renderer',
    templateUrl: './entry-details-renderer.component.html',
    styleUrls: ['./entry-details-renderer.component.scss']
})
export class EntryDetailsRendererComponent {

    params: ICellRendererParams;
    private componentParent: any;

    constructor(private entryService: EntryService) {
    }

    agInit(params: ICellRendererParams): void {
        this.params = params;
        this.componentParent = this.params.context.componentParent;
    }

    deleteEntry(id) {
        this.entryService.deleteEntry(id).subscribe(result => {
            this.componentParent.refreshEntriesGrid();
        }) 
    }
}
