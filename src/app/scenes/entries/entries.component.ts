import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EntryService} from "../../common/service/entry.service";
import {Entry} from "../../model/entry/entry.model";
import {ExchangeRendererComponent} from "../../common/renderer/exchange-renderer/exchange-renderer.component";
import {DateRendererComponent} from "../../common/renderer/date-renderer/date-renderer.component";
import {SideRendererComponent} from "../../common/renderer/side-renderer/side-renderer.component";
import {YesNoRendererComponent} from "../../common/renderer/yes-no-renderer/yes-no-renderer.component";
import {PriceRendererComponent} from "../../common/renderer/price-renderer/price-renderer.component";
import {ProfitRendererComponent} from "../../common/renderer/profit-renderer/profit-renderer.component";
import {DurationRendererComponent} from "../../common/renderer/duration-renderer/duration-renderer.component";
import {FeesRendererComponent} from "../../common/renderer/fees-renderer/fees-renderer.component";
import {EntryDetailsRendererComponent} from "../../common/renderer/entry-details-renderer/entry-details-renderer.component";
import {GridOptions} from "ag-grid-community";
import {ToastrService} from "ngx-toastr";


@Component({
    selector: 'app-entries',
    templateUrl: './entries.component.html',
    styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
    entryIdForDeleteModel: string;
    @ViewChild('dangerModal', { static: true }) deleteModal: any;

    columnDefs = [
        {field: 'exchange', headerName: 'Exchange', cellRenderer: 'exchangeRenderer', minWidth: 140},
        {field: 'strategyId', headerName: 'Strategy Id'},
        {field: 'symbol', headerName: 'Symbol', unSortIcon: true},
        {field: 'side', headerName: 'Side', cellRenderer: 'sideRenderer', width: 90},
        {field: 'isActive', headerName: 'Is Active', cellRenderer: 'yesNoRenderer', width: 90, sort: 'desc'},
        {field: 'startDate', headerName: 'Start Date', cellRenderer: 'dateRenderer', minWidth: 200},
        {field: 'endDate', headerName: 'End Date', cellRenderer: 'dateRenderer', minWidth: 200},
        {field: 'startDate', headerName: 'Duration', cellRenderer: 'durationRenderer'},
        {field: 'entryReport.enterPrice', headerName: 'Enter Price', cellRenderer: 'priceRenderer'},
        {field: 'entryReport.exitPrice', headerName: 'Exit Price', cellRenderer: 'priceRenderer'},
        {field: 'entryReport.realCost', headerName: 'Used', cellRenderer: 'priceRenderer'},
        {field: 'profit', headerName: 'Profit', cellRenderer: 'profitRenderer', width: 120},
        {field: 'fees', headerName: 'Fees', cellRenderer: 'feesRenderer', width: 120},
        {field: 'fees', headerName: 'Details', cellRenderer: 'entryDetailsRenderer'},
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

    rowData: Entry[];
    rowClassRules = {
        'active-entry': function (params) {console.log(params.data.isActive); return params.data.isActive === true}
    }
    frameworkComponents: {};
    gridApi;
    isLoading = false;
    private gridOptions: GridOptions;

    constructor(private entryService: EntryService,
                private toastr: ToastrService) {
        this.frameworkComponents = {
            exchangeRenderer: ExchangeRendererComponent,
            dateRenderer: DateRendererComponent,
            sideRenderer: SideRendererComponent,
            yesNoRenderer: YesNoRendererComponent,
            priceRenderer: PriceRendererComponent,
            profitRenderer: ProfitRendererComponent,
            durationRenderer: DurationRendererComponent,
            feesRenderer: FeesRendererComponent,
            entryDetailsRenderer: EntryDetailsRendererComponent
        }
        this.gridOptions = {
            context: {
                componentParent: this
            }
        } as GridOptions;
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.paginationSetPageSize(100);
    }

    ngOnInit(): void {
        this.refreshEntriesGrid();
    }

    refreshEntriesGrid() {
        this.isLoading = true
        this.entryService.getAllEntriesWithReports().subscribe(result => {
            this.rowData = result;
            this.isLoading = false;
        })
    }

    onPageSizeChanged(newPageSize = 100) {
        const value = (document.getElementById('page-size') as HTMLInputElement).value;
        this.gridApi.paginationSetPageSize(Number(value));
    }

    deleteEntry() {
        this.entryService.deleteEntry(this.entryIdForDeleteModel).subscribe(result => {
            this.refreshEntriesGrid();
            this.entryIdForDeleteModel = undefined;
            this.toastr.success("Delete Success");
        });
    }

    showDeleteModal(entryId: string) {
        this.entryIdForDeleteModel = entryId;
        this.deleteModal.show();
    }


}
