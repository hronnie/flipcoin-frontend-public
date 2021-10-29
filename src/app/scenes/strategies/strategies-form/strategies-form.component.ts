import {Component, OnInit} from '@angular/core';
import {Strategy} from "../../../model/entry/strategy.model";
import {StrategyService} from "../../../common/service/strategy.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-strategies-form',
    templateUrl: './strategies-form.component.html',
    styleUrls: ['./strategies-form.component.scss']
})
export class StrategiesFormComponent implements OnInit {

    strategy: Strategy = new Strategy();
    strategyId: string;
    strategyForm: FormGroup;
    isEdit = false;

    constructor(private strategyService: StrategyService,
                private route: ActivatedRoute,
                fb: FormBuilder) {

        this.strategyForm = fb.group(this.createForm(this.strategy));
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params) => {
                this.strategyId = params.strategyId;
                if (this.strategyId) {
                    this.isEdit = true;
                    this.reloadStrategy();
                }
            });
    }

    reloadStrategy(): void {
        this.strategyService.getStrategy(this.strategyId).subscribe(strategyResult => {
            this.strategyForm.patchValue({
                strategyId: strategyResult.strategyId,
                stopLossPerc: strategyResult.stopLossPerc,
                trailingStopPerc: strategyResult.trailingStopPerc,
                takeProfitPerc: strategyResult.takeProfitPerc,
                maxDollarAmount: strategyResult.maxDollarAmount,
                isActive: strategyResult.isActive,
                isOnlyBullish: strategyResult.isOnlyBullish,
                isOnlyBearish: strategyResult.isOnlyBearish,
                condition1: strategyResult.condition1,
                condition2: strategyResult.condition2,
                condition3: strategyResult.condition3,
                condition4: strategyResult.condition4,
                condition5: strategyResult.condition5,
                conditionLabel1: strategyResult.conditionLabel1,
                conditionLabel2: strategyResult.conditionLabel2,
                conditionLabel3: strategyResult.conditionLabel3,
                conditionLabel4: strategyResult.conditionLabel4,
                conditionLabel5: strategyResult.conditionLabel5,
            });
            this.strategy = strategyResult;
        });
    }

    onSubmit(value: any) {
        this.strategyService.createStrategy(new Strategy(value)).subscribe(
            result => {

            }
        )
        console.log(value);
    }

    private createForm(strategy: Strategy): any {
        return {
            strategyId: [strategy.strategyId, [Validators.required]],
            stopLossPerc: [strategy.stopLossPerc, []],
            trailingStopPerc: [strategy.trailingStopPerc, []],
            takeProfitPerc: [strategy.takeProfitPerc, []],
            maxDollarAmount: [strategy.maxDollarAmount, []],
            isActive: [strategy.isActive, []],
            isOnlyBullish: [strategy.isOnlyBullish, []],
            isOnlyBearish: [strategy.isOnlyBearish, []],
            condition1: [strategy.condition1, []],
            condition2: [strategy.condition2, []],
            condition3: [strategy.condition3, []],
            condition4: [strategy.condition4, []],
            condition5: [strategy.condition5, []],
            conditionLabel1: [strategy.conditionLabel1, []],
            conditionLabel2: [strategy.conditionLabel2, []],
            conditionLabel3: [strategy.conditionLabel3, []],
            conditionLabel4: [strategy.conditionLabel4, []],
            conditionLabel5: [strategy.conditionLabel5, []]
        };
    }
}
