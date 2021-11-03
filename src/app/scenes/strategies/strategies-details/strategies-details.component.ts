import {Component, OnInit} from '@angular/core';
import {StrategyService} from "../../../common/service/strategy.service";
import {ActivatedRoute} from "@angular/router";
import {Strategy} from "../../../model/entry/strategy.model";

@Component({
    selector: 'app-strategies-details',
    templateUrl: './strategies-details.component.html',
    styleUrls: ['./strategies-details.component.scss']
})
export class StrategiesDetailsComponent implements OnInit {

    strategyId: string;
    strategy: Strategy;

    constructor(private strategyService: StrategyService,
                private route: ActivatedRoute) {
        this.route.params.subscribe(
            (params) => {
                this.strategyId = params.strategyId;
            });
    }

    ngOnInit(): void {
        this.strategyService.getStrategy(this.strategyId).subscribe(strategyResult => {
            this.strategy = strategyResult;
        });
    }

}
