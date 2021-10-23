import { Component, OnInit } from '@angular/core';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import {EntryService} from "../../common/service/entry.service";
import {Observable} from "rxjs";
import {Entry} from "../../model/entry/entry.model";
import {
    calculateFees,
    calculateProfit,
    distinctStringArray,
    toHumanReadableFormat,
    toHumanReadablePercentFormat
} from "../../utils/helperMethods";
import * as moment from "moment";
import {DashboardInfo} from "../../model/frontend/dashboardInfo.model";
import {Price} from "../../model/frontend/price.model";

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
    isAllEntriesLoading = false;
    isDashboardInfoFtxLoading = false;
    isDashboardInfoBinanceLoading = false;
    dashboardInfo: DashboardInfo;

    strategyProfitData: {strategy: string, profit: number, loss: number}[] = [];
    private allEntries: Entry[];

    constructor(private chartsData: DashboardChartsData,
                private entryService: EntryService) {}

    ngOnInit(): void {
        this.dashboardInfo = new DashboardInfo();
        this.strategyOptions = {
            title: { text: "Strategy performance" },
            subtitle: { text: 'for profit and loss (ordered by profit percent success)' },
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

        this.isAllEntriesLoading = true;
        this.entryService.getAllEntriesWithReports().subscribe(entryArray => {
            this.allEntries = entryArray;
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
            });
            this.strategyProfitData = this.strategyProfitData
                .sort((a, b) =>
                    this.calculateStrategyPercentFromProfitLoss(b.profit, b) - this.calculateStrategyPercentFromProfitLoss(a.profit, a));
            this.isAllEntriesLoading = false;
            this.isDashboardInfoFtxLoading = true;
            this.isDashboardInfoBinanceLoading = true;
            this.entryService.getDashboardInfo("ftx").subscribe((dashboardInfo) => {
                this.dashboardInfo.ftxBalance = dashboardInfo.ftxBalance;
                this.appendPriceItemArray(dashboardInfo.currentSymbolPrices);
                this.isDashboardInfoFtxLoading = false;
            });
            this.entryService.getDashboardInfo("binance").subscribe((dashboardInfo) => {
                this.dashboardInfo.binanceBalance = dashboardInfo.binanceBalance;
                this.appendPriceItemArray(dashboardInfo.currentSymbolPrices);
                this.isDashboardInfoBinanceLoading = false;
            });
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

    calculateNoOfCycles(strategy: string): number {
        return this.allEntries.filter(item => item.strategyId === strategy).length;
    }

    calculateNoOfWinCycles(strategy: string): number {
        return this.allEntries.filter(item => item.strategyId === strategy && calculateProfit(item.entryReport?.incomeHistory) > 0).length;
    }

    calculateAllUsedDollar(strategy: string): string {
        const stratEntries = this.allEntries.filter(item => item.strategyId === strategy);
        let sumDollar = 0;
        stratEntries.forEach(item => {
            const realCost: string = item.entryReport?.realCost.toString();
            sumDollar = sumDollar + parseFloat(realCost);
        })
        return `${toHumanReadableFormat(sumDollar)}$`
    }

    calculateStrategyStartTime(strategy: string): Date {
        const stratEntries = this.allEntries.filter(item => item.strategyId === strategy);
        const sortedEntries = stratEntries.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
        return sortedEntries[0].startDate;
    }

    calculateStrategyEndTime(strategy: string): Date {
        const stratEntries = this.allEntries.filter(item => item.strategyId === strategy);
        const sortedEntries = stratEntries.sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());
        return sortedEntries[0].startDate;
    }

    calculateStrategyDurationTime(strategy: string): string {
        const startDate = moment(this.calculateStrategyStartTime(strategy));
        const endDate = moment(this.calculateStrategyEndTime(strategy));
        const duration = moment.duration(startDate.diff(endDate));
        return duration.humanize();
    }

    private appendPriceItemArray(prices: Price[]) {
        for (const priceItem of prices) {
            this.dashboardInfo.currentSymbolPrices.push(priceItem);
        }
    }

    getDollarValue(balance: number) {
        return `${toHumanReadableFormat(balance)}$`
    }

    calculateNoOfUsedStrategy() {
        const stratSet: Set<string> = new Set();
        for (const entry of this.allEntries) {
            stratSet.add(entry.strategyId);
        }
        return stratSet.size;
    }

    calculateNoOfUsedCryptos() {
        const symbolSet: Set<string> = new Set();
        for (const entry of this.allEntries) {
            symbolSet.add(entry.symbol);
        }
        return symbolSet.size;
    }

    populateStrategySymbolList(strategyId) {
        const stratEntries = this.allEntries.filter(entry => entry.strategyId === strategyId);
        const symbols = distinctStringArray(stratEntries.map(entry => entry.symbol));
        return symbols.join(", ");
    }
}
