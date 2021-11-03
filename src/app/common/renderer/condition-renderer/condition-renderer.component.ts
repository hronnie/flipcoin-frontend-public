import {Component, SecurityContext} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";
import {StrategyCondition} from "../../../model/entry/strategyCondition.model";

@Component({
    selector: 'app-condition-renderer',
    templateUrl: './condition-renderer.component.html',
    styleUrls: ['./condition-renderer.component.scss']
})
export class ConditionRendererComponent {

    params: ICellRendererParams;
    bearishConditions: StrategyCondition[];
    bullishConditions: StrategyCondition[];

    agInit(params: ICellRendererParams): void {
        this.params = params;
        this.bearishConditions = this.params.data.bearishConditions;
        this.bullishConditions = this.params.data.bullishConditions;
    }

}
