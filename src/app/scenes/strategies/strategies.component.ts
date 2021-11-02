import {Component, OnInit} from '@angular/core';
import {Strategy} from "../../model/entry/strategy.model";
import {StrategyService} from "../../common/service/strategy.service";
import {YesNoRendererComponent} from "../../common/renderer/yes-no-renderer/yes-no-renderer.component";
import {ConditionRendererComponent} from "../../common/renderer/condition-renderer/condition-renderer.component";
import {StrategyActionsRendererComponent} from "../../common/renderer/strategy-actions-renderer/strategy-actions-renderer.component";

@Component({
    selector: 'app-strategies',
    templateUrl: './strategies.component.html',
    styleUrls: ['./strategies.component.scss']
})
export class StrategiesComponent implements OnInit {

    columnDefs = [
        {field: 'strategyId', headerName: 'Strategy Id'},
        {field: 'isActive', headerName: 'Is Active', cellRenderer: 'yesNoRenderer', width: 90, sort: 'desc'},
        {field: 'isOnlyBullish', headerName: 'Type', cellRenderer: 'yesNoRenderer', width: 90, sort: 'desc'},
        {field: 'bullishConditions', headerName: 'Conditions', cellRenderer: 'conditionRenderer', width: 250},
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

    constructor(private strategyService: StrategyService) {
        this.frameworkComponents = {
            yesNoRenderer: YesNoRendererComponent,
            conditionRenderer: ConditionRendererComponent,
            strategyActionsRenderer: StrategyActionsRendererComponent
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.paginationSetPageSize(100);
    }

    ngOnInit(): void {
        this.isLoading = true
        this.strategyService.getAllStrategy().subscribe(result => {
            this.rowData = result;
            this.isLoading = false;
        })
    }

    onPageSizeChanged(newPageSize = 100) {
        const value = (document.getElementById('page-size') as HTMLInputElement).value;
        this.gridApi.paginationSetPageSize(Number(value));
    }

}
