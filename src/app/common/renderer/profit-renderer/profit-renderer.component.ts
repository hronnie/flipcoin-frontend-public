import {Component} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";
import {calculateFees, calculateProfit, toHumanReadableFormat, toHumanReadablePercentFormat} from "../../../utils/helperMethods";

@Component({
    selector: 'app-profit-renderer',
    templateUrl: './profit-renderer.component.html',
    styleUrls: ['./profit-renderer.component.scss']
})
export class ProfitRendererComponent {

    params: ICellRendererParams;
    profit: string;
    isWin: boolean;

    agInit(params: ICellRendererParams): void {
        this.params = params;
        const profitNum = calculateProfit(this.params?.data?.entryReport?.incomeHistory);
        this.profit = toHumanReadableFormat(profitNum);
        this.isWin = profitNum > 0;
    }

    calculateProfitPercent() {
        return toHumanReadablePercentFormat(parseFloat(this.profit), this.params?.data?.entryReport?.realCost)
    }
}
