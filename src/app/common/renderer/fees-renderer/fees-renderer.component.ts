import {Component, OnInit} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";
import {calculateFees, toHumanReadableFormat, toHumanReadablePercentFormat} from "../../../utils/helperMethods";

@Component({
    selector: 'app-fees-renderer',
    templateUrl: './fees-renderer.component.html',
    styleUrls: ['./fees-renderer.component.scss']
})
export class FeesRendererComponent {

    params: ICellRendererParams;
    fees: string;
    isWin: boolean;

    agInit(params: ICellRendererParams): void {
        this.params = params;
        const feesNum = calculateFees(this.params?.data?.entryReport?.incomeHistory);
        this.fees = toHumanReadableFormat(feesNum);
        this.isWin = feesNum > 0;
    }

    calculateFeesPercent() {
        return toHumanReadablePercentFormat(parseFloat(this.fees), this.params?.data?.entryReport?.realCost)
    }
}
