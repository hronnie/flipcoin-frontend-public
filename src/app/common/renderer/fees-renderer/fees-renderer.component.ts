import {Component, OnInit} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";
import {calculateFees, toHumanReadableFormat} from "../../../utils/helperMethods";

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
        this.fees = calculateFees(this.params?.data?.incomeHistory);
        const feesNum = parseFloat(this.fees);
        this.isWin = feesNum > 0;
    }

}
