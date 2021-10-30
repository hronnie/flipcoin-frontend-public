import {Component, OnInit} from '@angular/core';
import {Strategy} from "../../../model/entry/strategy.model";
import {StrategyService} from "../../../common/service/strategy.service";
import {ActivatedRoute} from "@angular/router";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

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
    submitted = false;
    public customPatterns = { '0': { pattern: new RegExp('\[0-9\]')} };

    constructor(private strategyService: StrategyService,
                private route: ActivatedRoute,
                private fb: FormBuilder) {

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
                strategyDesc: strategyResult.strategyDesc,
                stopLossPerc: strategyResult.stopLossPerc,
                trailingStopPerc: strategyResult.trailingStopPerc,
                takeProfitPerc: strategyResult.takeProfitPerc,
                maxDollarAmount: strategyResult.maxDollarAmount,
                isActive: strategyResult.isActive,
                isOnlyBullish: strategyResult.isOnlyBullish,
                isOnlyBearish: strategyResult.isOnlyBearish,
                isBothWay: strategyResult.isBothWay,
                bullishConditions: strategyResult.bullishConditions,
                bearishConditions: strategyResult.bearishConditions,
                takeProfitInputs: strategyResult.takeProfitInputs
            });
            this.strategy = strategyResult;
        });
    }

    onSubmit(value: any) {
        this.submitted = true;
        this.strategyService.createStrategy(new Strategy(value)).subscribe(
            result => {

            }
        )
        console.log(value);
    }

    private createForm(strategy: Strategy): any {
        return {
            strategyId: [strategy.strategyId, [Validators.required, Validators.max(30), Validators.min(3),
                Validators.pattern('^[a-zA-Z0-9_-]*$')]],
            strategyDesc: [strategy.strategyDesc, [Validators.required]],
            stopLossPerc: [strategy.stopLossPerc, [Validators.required]],
            trailingStopPerc: [strategy.trailingStopPerc, []],
            takeProfitPerc: [strategy.takeProfitPerc, [Validators.required]],
            maxDollarAmount: [strategy.maxDollarAmount, [Validators.required]],
            isActive: [strategy.isActive, []],
            isOnlyBullish: [strategy.isOnlyBullish, []],
            isOnlyBearish: [strategy.isOnlyBearish, []],
            isBothWay: [strategy.isBothWay, []],
            bullishConditions: this.fb.array([]),
            bearishConditions: this.fb.array([]),
            takeProfitInputs: this.fb.array([])
        };
    }

    get ctrls() {
        return this.strategyForm.controls;
    }

    get bullishConditions() {
        return this.strategyForm.controls?.bullishConditions as FormArray;
    }

    get bearishConditions() {
        return this.strategyForm.controls?.bearishConditions as FormArray;
    }

    get takeProfitInputs() {
        return this.strategyForm.controls?.takeProfitInputs as FormArray;
    }

    addBullishCondition() {
        const bullishCondition = this.fb.group({
           status: [false, Validators.required],
           statusNote: ['', Validators.required]
        });
        this.bullishConditions.push(bullishCondition);
    }

    deleteBullishCondition(index: number) {
        this.bullishConditions.removeAt(index);
    }

    addBearishCondition() {
        const bearishCondition = this.fb.group({
           status: [false, Validators.required],
           statusNote: ['', Validators.required]
        });
        this.bearishConditions.push(bearishCondition);
    }

    deleteBearishCondition(index: number) {
        this.bearishConditions.removeAt(index);
    }

    addTakeProfitInput() {
        const takeProfitInput = this.fb.group({
            pricePercent: [0, Validators.required],
            quantityPercent: [0, Validators.required]
        });
        this.takeProfitInputs.push(takeProfitInput);
    }

    deleteTakeProfitInput(index: number) {
        this.takeProfitInputs.removeAt(index);
    }

    isBullishClicked(event) {
        if (event.target.checked === true) {
            this.strategyForm.patchValue({
                isOnlyBearish: false,
                isBothWay: false,
            });
        }
    }

    isBearishClicked(event) {
        if (event.target.checked === true) {
            this.strategyForm.patchValue({
                isOnlyBullish: false,
                isBothWay: false,
            });
        }
    }

    isBothClicked(event) {
        if (event.target.checked === true) {
            this.strategyForm.patchValue({
                isOnlyBearish: false,
                isOnlyBullish: false,
            });
        }
    }
}
