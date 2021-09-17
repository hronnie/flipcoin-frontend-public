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

    defaultColDef = {
        editable: false,
        enablePivot: true,
        enableValue: true,
        sortable: true,
        resizable: true,
        filter: true,
        flex: 1,
        minWidth: 30,
    };

    rowData: Observable<Entry[]>;
    rowClassRules;



    constructor(private entryService: EntryService) {
        this.rowClassRules = {
            'sell-row': function(params) {
                console.log(params.data.side === 'BUY');
                return params.data.side === 'BUY';
            },

            'buy-row': function(params) { return params.data.side === 'SELL'; },
        };
    }

    ngOnInit(): void {
        this.rowData = this.entryService.getAllEntries();
    }

}
