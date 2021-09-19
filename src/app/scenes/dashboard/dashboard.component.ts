import { Component, OnInit } from '@angular/core';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import {EntryService} from "../../common/service/entry.service";
import {Observable} from "rxjs";
import {Entry} from "../../model/entry/entry.model";
import {calculateFees, toHumanReadableFormat} from "../../utils/helperMethods";

@Component({
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

    public mainChart: IChartProps = {};
    public chart: Array<IChartProps> = [];
    public brandBoxChart: IChartProps = {};
    options: any;
    entries: Observable<Entry[]>;
    profitLossArray = [];

    constructor(private chartsData: DashboardChartsData,
                private entryService: EntryService) {}

    ngOnInit(): void {
        this.options = {
            autoSize: true,
            title: {
                text: 'Sum profit from Entries',
                fontSize: 18,
            },
            subtitle: { text: 'Source: All symbol' },
            series: [
                {
                    data: this.profitLossArray,
                    type: 'pie',
                    labelKey: 'type',
                    angleKey: 'amount',
                    label: { minAngle: 0 },
                    callout: { strokeWidth: 2 },
                    fills: [
                        '#badc58',
                        '#eb4c4b',
                    ],
                    strokes: [
                        '#829a3e',
                        '#a43535',
                    ],
                },
            ],
            legend: { enabled: true },
        };
        let profit = 0;
        let loss = 0;
        this.entryService.getAllEntries().subscribe(entryArray => {
            for (const entryItem of entryArray) {
                const realizedPnl = entryItem.incomeHistory?.realizedPnl;
                const fees = calculateFees(entryItem.incomeHistory);
                const itemProfit = realizedPnl + parseFloat(fees);
                if (entryItem.profit > 0 && entryItem.isActive === false) {
                    profit += itemProfit;
                    continue;
                }
                loss += Math.abs(itemProfit);
            }
            this.profitLossArray.push({type: "Profit", amount: profit});
            this.profitLossArray.push({type: "Loss", amount: loss});
            this.initCharts();
        });
    }

    initCharts(): void {
        this.mainChart = this.chartsData.mainChart;
        this.chart = this.chartsData.widgetChart;
        this.brandBoxChart = this.chartsData.brandBoxChart;
    }
}
