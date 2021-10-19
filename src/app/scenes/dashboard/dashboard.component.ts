import { Component, OnInit } from '@angular/core';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import {EntryService} from "../../common/service/entry.service";
import {Observable} from "rxjs";
import {Entry} from "../../model/entry/entry.model";
import {calculateFees, calculateProfit, toHumanReadableFormat, toHumanReadablePercentFormat} from "../../utils/helperMethods";

@Component({
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

    public mainChart: IChartProps = {};
    public chart: Array<IChartProps> = [];
    public brandBoxChart: IChartProps = {};
    sumProfitOptions: any;
    strategyOptions: any;
    entries: Observable<Entry[]>;
    profitLossArray = [];
    isLoading = false;

    strategyProfitData: {strategy: string, profit: number, loss: number}[] = [];

    constructor(private chartsData: DashboardChartsData,
                private entryService: EntryService) {}

    ngOnInit(): void {
        this.strategyOptions = {
            title: { text: "Strategy performance" },
            subtitle: { text: 'for profit and loss' },
            data: this.strategyProfitData,
            series: [
                {
                    type: 'column',
                    xKey: 'strategy',
                    yKeys: ['profit', 'loss'],
                    yNames: ['Profit', 'Loss'],
                    fills: [
                        '#badc58',
                        '#eb4c4b',
                    ],
                    strokes: [
                        '#829a3e',
                        '#a43535',
                    ],
                    tooltip: {
                        renderer(params: any) {
                            return {
                                content: `${params.yValue.toFixed(2)}$`,
                            };
                        },
                    },
                    label: {
                        formatter(params: any) {
                            return params.value === undefined ? '' : `${params.value.toFixed(2)}$`;
                        },
                    },
                },
            ],
            axes: [
                {
                    type: 'category',
                    position: 'bottom',
                    title: {
                        enabled: true,
                        text: 'Strategies'
                    },
                    label: {
                        rotation: -5
                    },
                },
                {
                    type: 'number',
                    position: 'left',
                    tick: { count: 10 },
                    title: {
                        enabled: true,
                        text: 'Dollar amount'
                    }
                },
            ],
            category: {
                line: {
                    width: 2,
                    color: 'blue',
                },
                tick: {
                    width: 2,
                    size: 10,
                    color: 'blue',
                },
                label: {
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    fontSize: 15,
                    fontFamily: 'Arial, sans-serif',
                    color: '#de7b73',
                    padding: 10,
                    rotation: 40,
                },
                gridStyle: [
                    {
                        stroke: '#80808044',
                        lineDash: undefined,
                    },
                    {
                        stroke: '#80808044',
                        lineDash: [6, 3],
                    },
                ],
                title: {
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    fontSize: 16,
                    fontFamily: 'Arial, sans-serif',
                    color: 'blue',
                },
            },
        };
        this.sumProfitOptions = {
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
                    label: {
                        minAngle: 0,

                    },
                    callout: { strokeWidth: 2 },
                    fills: [
                        '#badc58',
                        '#eb4c4b',
                    ],
                    strokes: [
                        '#829a3e',
                        '#a43535',
                    ],
                    tooltip: {
                        renderer(params: any) {
                            return {
                                content: `${params.angleValue.toFixed(2)}$`,
                            };
                        },
                    },
                },
            ],
            legend: { enabled: true },
        };

        this.isLoading = true;
        this.entryService.getAllEntriesWithReports().subscribe(entryArray => {
            const {profit, loss} = this.calculateEntryArrayProfitAndLoss(entryArray);
            this.profitLossArray.push({type: "Profit", amount: profit});
            this.profitLossArray.push({type: "Loss", amount: loss});
            const strategySet: Set<string> = new Set();
            entryArray.forEach(entry => {
                strategySet.add(entry.strategyId);
            });
            strategySet.forEach(strategyId => {
                const strategyIdEntryArray = entryArray.filter(entry => entry.strategyId === strategyId);
                const strategyStat = this.calculateEntryArrayProfitAndLoss(strategyIdEntryArray);
                this.strategyProfitData.push({
                    strategy: strategyId,
                    profit: strategyStat.profit,
                    loss: strategyStat.loss
                })
            })
            this.isLoading = false;
            this.initCharts();
        });
    }

    calculateEntryArrayProfitAndLoss(entryArray: Entry[]) {
        let profit = 0;
        let loss = 0;
        for (const entryItem of entryArray) {
            if (!entryItem?.entryReport?.incomeHistory) {
                continue;
            }
            const itemProfit = calculateProfit(entryItem?.entryReport?.incomeHistory);
            if (itemProfit > 0 && entryItem.isActive === false) {
                profit += itemProfit;
                continue;
            }
            loss += Math.abs(itemProfit);
        }

        return {profit, loss};
    }

    initCharts(): void {
        this.mainChart = this.chartsData.mainChart;
        this.chart = this.chartsData.widgetChart;
        this.brandBoxChart = this.chartsData.brandBoxChart;
    }

    calculatePercentFromProfitLossStr(amount: number): string {
        const sumAmount = this.profitLossArray[0].amount + this.profitLossArray[1].amount;
        return toHumanReadablePercentFormat(amount, sumAmount);
    }

    calculatePercentFromProfitLoss(amount: number): number {
        const sumAmount = this.profitLossArray[0].amount + this.profitLossArray[1].amount;
        const percResult = (amount / sumAmount) * 100;
        const power = Math.pow(10, 2 || 0);
        return Math.floor(percResult * power) / power;
    }

    calculateStrategyPercentFromProfitLossStr(amount: number,
                                              strategyProfitDataItem: {strategy: string, profit: number, loss: number}): string {
        const sumAmount = strategyProfitDataItem.profit + strategyProfitDataItem.loss;
        return toHumanReadablePercentFormat(amount, sumAmount);
    }

    calculateStrategyPercentFromProfitLoss(amount: number,
                                           strategyProfitDataItem: {strategy: string, profit: number, loss: number}): number {
        const sumAmount = strategyProfitDataItem.profit + strategyProfitDataItem.loss;
        const percResult = (amount / sumAmount) * 100;
        const power = Math.pow(10, 2 || 0);
        return Math.floor(percResult * power) / power;
    }

    formatDollarAmount(amount: number): string {
        return `${toHumanReadableFormat(amount)}$`;
    }
}
