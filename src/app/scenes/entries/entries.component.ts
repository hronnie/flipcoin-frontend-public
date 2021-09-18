import {Component, OnInit} from '@angular/core';
import {EntryService} from "../../common/service/entry.service";
import {Entry} from "../../model/entry/entry.model";
import {Observable} from "rxjs";
import {ExchangeRendererComponent} from "../../common/renderer/exchange-renderer/exchange-renderer.component";
import {DateRendererComponent} from "../../common/renderer/date-renderer/date-renderer.component";
import {SideRendererComponent} from "../../common/renderer/side-renderer/side-renderer.component";
import {YesNoRendererComponent} from "../../common/renderer/yes-no-renderer/yes-no-renderer.component";
import {PriceRendererComponent} from "../../common/renderer/price-renderer/price-renderer.component";
import {ProfitRendererComponent} from "../../common/renderer/profit-renderer/profit-renderer.component";
import {DurationRendererComponent} from "../../common/renderer/duration-renderer/duration-renderer.component";
import {FeesRendererComponent} from "../../common/renderer/fees-renderer/fees-renderer.component";


@Component({
    selector: 'app-entries',
    templateUrl: './entries.component.html',
    styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
    columnDefs = [
        {field: 'exchange', headerName: 'Exchange', cellRenderer: 'exchangeRenderer', minWidth: 140},
        {field: 'strategyId', headerName: 'Strategy Id', cellStyle: params => {
                if (params?.data?.isActive === true) {
                    return {backgroundColor: '#b9ff47'}
                }
            }},
        {field: 'symbol', headerName: 'Symbol', unSortIcon: true, cellStyle: params => {
                if (params?.data?.isActive === true) {
                    return {backgroundColor: '#b9ff47'}
                }
            }},
        {field: 'side', headerName: 'Side', cellRenderer: 'sideRenderer', width: 90},
        {field: 'isActive', headerName: 'Is Active', cellRenderer: 'yesNoRenderer', width: 90},
        {field: 'startDate', headerName: 'Start Date', cellRenderer: 'dateRenderer', minWidth: 200, sort: 'desc'},
        {field: 'endDate', headerName: 'End Date', cellRenderer: 'dateRenderer', minWidth: 200},
        {field: 'startDate', headerName: 'Duration', cellRenderer: 'durationRenderer'},
        {field: 'enterPrice', headerName: 'Enter Price', cellRenderer: 'priceRenderer'},
        {field: 'exitPrice', headerName: 'Exit Price', cellRenderer: 'priceRenderer'},
        {field: 'realCost', headerName: 'Used', cellRenderer: 'priceRenderer'},
        {field: 'profit', headerName: 'Profit', cellRenderer: 'profitRenderer'},
        {field: 'fees', headerName: 'Fees', cellRenderer: 'feesRenderer'},
    ];

    defaultColDef = {
        editable: false,
        enablePivot: true,
        enableValue: true,
        sortable: true,
        resizable: true,
        filter: true,
        flex: 1,
        minWidth: 120,
    };

    rowData: Observable<Entry[]>;
    rowClassRules;
    frameworkComponents: {};
    gridApi

    constructor(private entryService: EntryService) {
        this.frameworkComponents = {
            exchangeRenderer: ExchangeRendererComponent,
            dateRenderer: DateRendererComponent,
            sideRenderer: SideRendererComponent,
            yesNoRenderer: YesNoRendererComponent,
            priceRenderer: PriceRendererComponent,
            profitRenderer: ProfitRendererComponent,
            durationRenderer: DurationRendererComponent,
            feesRenderer: FeesRendererComponent
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.paginationSetPageSize(20);
    }

    ngOnInit(): void {
        this.rowData = this.entryService.getAllEntries();
    }

    onPageSizeChanged(newPageSize = 20) {
        // const value = document.getElementById('page-size')?.value;
        const value = (document.getElementById('page-size') as HTMLInputElement).value;
        this.gridApi.paginationSetPageSize(Number(value));
    }

}
