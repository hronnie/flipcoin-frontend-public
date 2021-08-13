import {Component, OnInit} from '@angular/core';

import {DashboardChartsData, IChartProps} from './dashboard-charts-data';
import {HttpClient} from "@angular/common/http";

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
                private http: HttpClient) {
    }

    ngOnInit(): void {
        this.initCharts();
        this.http.get<any>('http://localhost:5001/flipcoin-bot/us-central1/api/frontendapi/entry/all').subscribe(data => {
            this.result = data;
            console.log(JSON.stringify(data));
        })
    }

    initCharts(): void {
        this.mainChart = this.chartsData.mainChart;
        this.chart = this.chartsData.widgetChart;
        this.brandBoxChart = this.chartsData.brandBoxChart;
    }
}
