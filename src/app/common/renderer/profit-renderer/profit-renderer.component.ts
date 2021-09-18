import {Component} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";
import {calculateFees, toHumanReadableFormat} from "../../../utils/helperMethods";

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
        const realizedPnl = this.params?.data?.incomeHistory?.realizedPnl;
        const fees = calculateFees(this.params?.data?.incomeHistory);
        this.profit = toHumanReadableFormat(realizedPnl + fees);
        const profitNum = parseFloat(this.profit);
        this.isWin = profitNum > 0;
    }

}
