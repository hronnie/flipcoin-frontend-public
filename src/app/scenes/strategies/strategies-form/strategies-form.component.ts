import {Component, OnInit} from '@angular/core';
import {Strategy} from "../../../model/entry/strategy.model";
import {StrategyService} from "../../../common/service/strategy.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StrategyCondition} from "../../../model/entry/strategyCondition.model";
import {TakeProfitInput} from "../../../model/tradingview/takeProfitInput.model";
import {StrategyValidators} from "../../../common/validators/strategy.validator";


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
    public customPatterns = {'0': {pattern: new RegExp('\[0-9\]')}};
    private originalStrategyId: string;

    constructor(private strategyService: StrategyService,
                private route: ActivatedRoute,
                private fb: FormBuilder,
                private router: Router,
                private strategyValidator: StrategyValidators) {
        this.route.params.subscribe(
            (params) => {
                this.strategyId = params.strategyId;
                if (this.strategyId) {
                    this.isEdit = true;
                    this.originalStrategyId = params.strategyId;
                    this.reloadStrategy();
                }
            });
        this.strategyForm = this.fb.group(this.createForm(this.strategy));

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

    ngOnInit(): void {

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
                bullishConditions: this.initBullishConditions(strategyResult.bullishConditions),
                bearishConditions: this.initBearishConditions(strategyResult.bearishConditions),
                takeProfitInputs: this.initTakeProfitInputs(strategyResult.takeProfitInputs),
                leverage: strategyResult.leverage
            });
            this.strategy = strategyResult;
        });
    }

    initBullishConditions(bullishConditions: StrategyCondition[]) {
        for (const condition of bullishConditions) {
            const bullishCondition = this.fb.group({
                status: [condition.status, Validators.required],
                statusNote: [condition.statusNote, Validators.required]
            });
            this.bullishConditions.push(bullishCondition);
        }
    }

    initBearishConditions(bearishConditions: StrategyCondition[]) {
        for (const condition of bearishConditions) {
            const bearishCondition = this.fb.group({
                status: [condition.status, Validators.required],
                statusNote: [condition.statusNote, Validators.required]
            });
            this.bearishConditions.push(bearishCondition);
        }
    }

    initTakeProfitInputs(takeProfitInputs: TakeProfitInput[]) {
        for (const takeProfitInput of takeProfitInputs) {
            const takeProfitInputObj = this.fb.group({
                pricePercent: [takeProfitInput.pricePercent, Validators.required],
                quantityPercent: [takeProfitInput.quantityPercent, Validators.required]
            });
            this.takeProfitInputs.push(takeProfitInputObj);
        }
    }

    onSubmit(value: any) {
        this.submitted = true;
        if (this.isEdit === true) {
            const submitStrategy = new Strategy(value);
            submitStrategy.bearishConditions = this.updateStrategyIndexes(submitStrategy.bearishConditions);
            submitStrategy.bullishConditions = this.updateStrategyIndexes(submitStrategy.bullishConditions);
            this.strategyService.updateStrategy(submitStrategy).subscribe(
                result => {
                    this.router.navigate(['/strategies']);
                }
            );
        } else {
            const submitStrategy = new Strategy(value);
            submitStrategy.bearishConditions = this.updateStrategyIndexes(submitStrategy.bearishConditions);
            submitStrategy.bullishConditions = this.updateStrategyIndexes(submitStrategy.bullishConditions);
            this.strategyService.createStrategy(submitStrategy).subscribe(
                result => {
                    this.router.navigate(['/strategies']);
                }
            );
        }
    }

    private updateStrategyIndexes(conditions: StrategyCondition[]): StrategyCondition[] {
        const result: StrategyCondition[] = [];
        const indexes: number[] = [];
        for (const condition of conditions) {
            if (Number.isInteger(condition.index)) {
                indexes.push(condition.index);
            }
        }
        let nextIndex;
        if (indexes.length === 0) {
            nextIndex = 0;
        } else {
            nextIndex = Math.max(...indexes) + 1;
        }
        for (const condition of conditions) {
            if (Number.isInteger(condition.index)) {
                result.push(condition);
            } else {
                condition.index = nextIndex;
                nextIndex += 1;
                result.push(condition);
            }
        }
        return result;
    }

    bullishConditionStatusAt(index: number) {
        const bullishFormArray = this.strategyForm.get('bullishConditions') as FormArray;
        return bullishFormArray.at(index);
    }

    bearishConditionStatusAt(index: number) {
        const bearishFormArray = this.strategyForm.get('bearishConditions') as FormArray;
        return bearishFormArray.at(index);
    }

    takeProfitPricePercentAt(index: number) {
        const takeProfitArray = this.strategyForm.get('takeProfitInputs') as FormArray;
        return takeProfitArray.at(index);
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

    restoreStrategyId() {
        if (this.isEdit !== true) {
            return;
        }
        this.strategyForm.patchValue({
            strategyId: this.originalStrategyId
        });
    }

    private createForm(strategy: Strategy): any {
        return {
            strategyId: [strategy.strategyId, [Validators.required, Validators.max(30), Validators.min(3),
                Validators.pattern('^[a-zA-Z0-9_-]*$')], this.strategyValidator.strategyIdValidator(this.isEdit)],
            strategyDesc: [strategy.strategyDesc, [Validators.required]],
            stopLossPerc: [strategy.stopLossPerc, [Validators.required]],
            trailingStopPerc: [strategy.trailingStopPerc, []],
            takeProfitPerc: [strategy.takeProfitPerc, [Validators.required]],
            maxDollarAmount: [strategy.maxDollarAmount, [Validators.required]],
            isActive: [strategy.isActive, []],
            leverage: [strategy.leverage, [Validators.required]],
            isOnlyBullish: [strategy.isOnlyBullish, []],
            isOnlyBearish: [strategy.isOnlyBearish, []],
            isBothWay: [strategy.isBothWay, []],
            bullishConditions: this.fb.array([]),
            bearishConditions: this.fb.array([]),
            takeProfitInputs: this.fb.array([])
        };
    }
}
