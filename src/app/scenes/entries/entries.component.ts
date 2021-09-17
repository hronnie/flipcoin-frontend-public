import {Component, OnInit} from '@angular/core';
import {EntryService} from "../../common/service/entry.service";
import {Entry} from "../../model/entry/entry.model";
import {Observable} from "rxjs";
import {ExchangeRendererComponent} from "../../common/renderer/exchange-renderer/exchange-renderer.component";
import {DateRendererComponent} from "../../common/renderer/date-renderer/date-renderer.component";
import {SideRendererComponent} from "../../common/renderer/side-renderer/side-renderer.component";
import {YesNoRendererComponent} from "../../common/renderer/yes-no-renderer/yes-no-renderer.component";
import {PriceRendererComponent} from "../../common/renderer/price-renderer/price-renderer.component";



@Component({
    selector: 'app-entries',
    templateUrl: './entries.component.html',
    styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
    columnDefs = [
        {field: 'exchange', headerName: 'Exchange', cellRenderer: 'exchangeRenderer'},
        {field: 'strategyId', headerName: 'Strategy Id'},
        {field: 'symbol', headerName: 'Symbol'},
        {field: 'side', headerName: 'Side', cellRenderer: 'sideRenderer'},
        {field: 'isActive', headerName: 'Is Active', cellRenderer: 'yesNoRenderer'},
        {field: 'startDate', headerName: 'Start Date', cellRenderer: 'dateRenderer', minWidth: 200},
        {field: 'endDate', headerName: 'End Date', cellRenderer: 'dateRenderer', minWidth: 200},
        {field: 'exitPrice', headerName: 'Exit Price', cellRenderer: 'priceRenderer'},
        {field: 'entryInProgress', headerName: 'Locked', cellRenderer: 'yesNoRenderer'},
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
    frameworkComponents: {};

    constructor(private entryService: EntryService) {
        // this.rowClassRules = {
        //     'sell-row': function(params) {
        //         return params.data.side === 'BUY';
        //     },
        //
        //     'buy-row': function(params) { return params.data.side === 'SELL'; },
        // };

        this.frameworkComponents = {
            exchangeRenderer: ExchangeRendererComponent,
            dateRenderer: DateRendererComponent,
            sideRenderer: SideRendererComponent,
            yesNoRenderer: YesNoRendererComponent,
            priceRenderer: PriceRendererComponent
        }
    }

    ngOnInit(): void {
        this.rowData = this.entryService.getAllEntries();
    }

}
