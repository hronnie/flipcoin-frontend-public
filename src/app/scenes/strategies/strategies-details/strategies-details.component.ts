import {Component, OnInit} from '@angular/core';
import {StrategyService} from "../../../common/service/strategy.service";
import {ActivatedRoute} from "@angular/router";
import {Strategy} from "../../../model/entry/strategy.model";
import {environment} from "../../../../environments/environment";
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
    selector: 'app-strategies-details',
    templateUrl: './strategies-details.component.html',
    styleUrls: ['./strategies-details.component.scss']
})
export class StrategiesDetailsComponent implements OnInit {

    strategyId: string;
    strategy: Strategy;
    apiUrl: string;
    symbol = '';
    exchange = "ftx";

    constructor(private strategyService: StrategyService,
                private route: ActivatedRoute,
                private clipboard: Clipboard) {
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

    copyTextEntryExit(endpoint: string) {
        const textToCopy = `${this.apiUrl}/${this.exchange}${endpoint}${(this.strategyId)}/${(this.symbol)}`;
        this.clipboard.copy(textToCopy);
    }

    copyTextCondition(endpoint: string, index: any, condition: string) {
        const textToCopy = `${this.apiUrl}/${this.exchange}${endpoint}${(this.strategyId)}/${(index)}/${condition}`;
        this.clipboard.copy(textToCopy);
    }

    copyTextStatus(condition: string) {
        const textToCopy = `${this.apiUrl}/${this.exchange}/tv/strategy/status/${(this.strategyId)}/${condition}`;
        this.clipboard.copy(textToCopy);
    }

    copyTextType(type: string) {
        const textToCopy = `${(this.apiUrl)}/${(this.exchange)}/tv/strategy/type/{{strategyId}}/${type}`;
        this.clipboard.copy(textToCopy);
    }

}
