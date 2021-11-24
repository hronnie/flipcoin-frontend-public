import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Strategy} from "../../model/entry/strategy.model";
import {StrategyService} from "../../common/service/strategy.service";
import {YesNoRendererComponent} from "../../common/renderer/yes-no-renderer/yes-no-renderer.component";
import {ConditionRendererComponent} from "../../common/renderer/condition-renderer/condition-renderer.component";
import {StrategyActionsRendererComponent} from "../../common/renderer/strategy-actions-renderer/strategy-actions-renderer.component";
import {TypeRendererComponent} from "../../common/renderer/type-renderer/type-renderer.component";
import {GridOptions} from "ag-grid-community";

@Component({
    selector: 'app-strategies',
    templateUrl: './strategies.component.html',
    styleUrls: ['./strategies.component.scss']
})
export class StrategiesComponent implements OnInit {

    @ViewChild('dangerModal', { static: true }) deleteModal: ElementRef<any>;
    strategyIdFromModal: string;

    columnDefs = [
        {field: 'strategyId', headerName: 'Strategy Id', sort: 'asc', minWidth: 150},
        {field: 'isActive', headerName: 'Is Active', cellRenderer: 'yesNoRenderer', width: 90},
        {field: 'isOnlyBullish', headerName: 'Type', cellRenderer: 'typeRenderer', width: 90},
        {field: 'bullishConditions', headerName: 'Conditions', cellRenderer: 'conditionRenderer', minWidth: 350},
        {field: 'bullishConditions', headerName: 'Actions', cellRenderer: 'strategyActionsRenderer', width: 80},
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

    rowData: Strategy[] = [];
    rowClassRules;
    frameworkComponents: {};
    gridApi;
    isLoading = false;
    private gridOptions: GridOptions;

    constructor(private strategyService: StrategyService) {
        this.gridOptions = {
            context: {
                componentParent: this
            }
        } as GridOptions;
        this.frameworkComponents = {
            yesNoRenderer: YesNoRendererComponent,
            conditionRenderer: ConditionRendererComponent,
            strategyActionsRenderer: StrategyActionsRendererComponent,
            typeRenderer: TypeRendererComponent
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.paginationSetPageSize(100);
    }

    ngOnInit(): void {
        this.refreshStrategyGrid();
    }

    onPageSizeChanged(newPageSize = 100) {
        const value = (document.getElementById('page-size') as HTMLInputElement).value;
        this.gridApi.paginationSetPageSize(Number(value));
    }

    refreshStrategyGrid() {
        this.isLoading = true
        this.strategyService.getAllStrategy().subscribe(result => {
            this.rowData = result;
            this.isLoading = false;
        })
    }

    showDeleteModal(strategyId: string) {
        this.strategyIdFromModal = strategyId;
        this.deleteModal.show();
    }


    deleteStrategy() {
        this.strategyService.deleteStrategy(this.strategyIdFromModal).subscribe(result => {
            this.strategyIdFromModal = undefined;
            this.refreshStrategyGrid();
        });
    }

}
