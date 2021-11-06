import {objToString} from "../../utils/helperMethods";
import {TakeProfitInput} from "../tradingview/takeProfitInput.model";
import {StrategyCondition} from "./strategyCondition.model";


/**
 * Represents strategy model.
 */
export class Strategy {
    strategyId: string;
    strategyDesc: string;
    stopLossPerc: number;
    trailingStopPerc: number;
    takeProfitPerc: number;
    maxDollarAmount: number;
    isActive: boolean;

    isOnlyBullish: boolean;
    isOnlyBearish: boolean;
    isBothWay: boolean;

    bullishConditions: StrategyCondition[];
    bearishConditions: StrategyCondition[];

    takeProfitInputs: TakeProfitInput[];

    leverage: number;

    constructor(obj?: any) {

        this.strategyId = obj && obj?.strategyId || '';
        this.strategyDesc = obj && obj?.strategyDesc || '';

        this.stopLossPerc = obj && obj?.stopLossPerc || 0;
        this.trailingStopPerc = obj && obj?.trailingStopPerc || 0;
        this.takeProfitPerc = obj && obj?.takeProfitPerc || 0;
        this.maxDollarAmount = obj && obj?.maxDollarAmount || 0;
        if (obj && obj.isActive !== undefined) {
            this.isActive = obj.isActive;
        } else {
            this.isActive = false;
        }

        if (obj && obj.isOnlyBullish !== undefined) {
            this.isOnlyBullish = obj.isOnlyBullish;
        } else {
            this.isOnlyBullish = false;
        }
        if (obj && obj.isOnlyBearish !== undefined) {
            this.isOnlyBearish = obj.isOnlyBearish;
        } else {
            this.isOnlyBearish = false;
        }
        if (obj && obj.isBothWay !== undefined) {
            this.isBothWay = obj.isBothWay;
        } else {
            this.isBothWay = false;
        }
        this.bullishConditions = obj && obj?.bullishConditions || [];
        this.bearishConditions = obj && obj?.bearishConditions || [];
        this.takeProfitInputs = obj && obj?.takeProfitInputs || [];
        this.leverage = obj && obj?.leverage || 1;
    }

    toString() {
        return 'Strategy details: '.concat(objToString(this));
    };
}
