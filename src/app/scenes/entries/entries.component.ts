import {Component, OnInit} from '@angular/core';
import {EntryService} from "../../common/service/entry.service";
import {Entry} from "../../model/entry/entry.model";
import {Observable} from "rxjs";

@Component({
    selector: 'app-entries',
    templateUrl: './entries.component.html',
    styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
    columnDefs = [
        {field: 'exchange', headerName: 'Exchange'},
        {field: 'strategyId', headerName: 'Strategy Id'},
        {field: 'symbol', headerName: 'Symbol'},
        {field: 'side', headerName: 'Side'},
        {field: 'isActive', headerName: 'Is Active'},
        {field: 'startDate', headerName: 'Start Date'},
        {field: 'endDate', headerName: 'End Date'},
        {field: 'exitPrice', headerName: 'Exit Price'},
        {field: 'entryInProgress', headerName: 'Locked'},
    ];

    rowData: Observable<Entry[]>;


    constructor(private entryService: EntryService) {
    }

    ngOnInit(): void {
        this.rowData = this.entryService.getAllEntries();
    }

}
