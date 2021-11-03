import {Component, OnInit} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";
import {StrategyService} from "../../service/strategy.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-strategy-actions-renderer',
    templateUrl: './strategy-actions-renderer.component.html',
    styleUrls: ['./strategy-actions-renderer.component.scss']
})
export class StrategyActionsRendererComponent {
    componentParent: any;

    constructor(private strategyService: StrategyService,
                private router: Router) {
    }


    params: ICellRendererParams;

    agInit(params: ICellRendererParams): void {
        this.params = params;
        this.componentParent = this.params.context.componentParent;
    }

    deleteStrategy(strategyId: string) {
        this.componentParent.refreshStrategyGrid();
        // this.strategyService.deleteStrategy(strategyId).subscribe(result => {
        //     this.router.navigate(['/strategies']);
        // })
    }
}
