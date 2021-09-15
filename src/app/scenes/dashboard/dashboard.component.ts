import {Component, OnInit} from '@angular/core';

import {DashboardChartsData, IChartProps} from './dashboard-charts-data';
import {HttpClient} from "@angular/common/http";
import {EntryService} from "../../common/service/entry.service";

@Component({
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public radioModel = 'Month';

    public mainChart: IChartProps = {};
    public chart: Array<IChartProps> = [];
    public brandBoxChart: IChartProps = {};
    result: string;

    constructor(private chartsData: DashboardChartsData,
                private entryService: EntryService) {
    }

    ngOnInit(): void {
        this.entryService.getAllEntries();
        this.initCharts();
    }

    initCharts(): void {
        this.mainChart = this.chartsData.mainChart;
        this.chart = this.chartsData.widgetChart;
        this.brandBoxChart = this.chartsData.brandBoxChart;
    }
}
