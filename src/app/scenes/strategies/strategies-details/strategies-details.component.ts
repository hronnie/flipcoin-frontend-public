import {Component, OnInit} from '@angular/core';
import {StrategyService} from "../../../common/service/strategy.service";
import {ActivatedRoute} from "@angular/router";
import {Strategy} from "../../../model/entry/strategy.model";
import {environment} from "../../../../environments/environment";

@Component({
    selector: 'app-strategies-details',
    templateUrl: './strategies-details.component.html',
    styleUrls: ['./strategies-details.component.scss']
})
export class StrategiesDetailsComponent implements OnInit {

    strategyId: string;
    strategy: Strategy;
    apiUrl: string;
    symbol: string;

    constructor(private strategyService: StrategyService,
                private route: ActivatedRoute) {
        this.route.params.subscribe(
            (params) => {
                this.strategyId = params.strategyId;
            });
        this.apiUrl = environment.apiUrl;
    }

    ngOnInit(): void {
        this.strategyService.getStrategy(this.strategyId).subscribe(strategyResult => {
            this.strategy = strategyResult;
        });
    }

}
