import {objToString} from "../../utils/helperMethods";
import {TakeProfitInput} from "../tradingview/takeProfitInput.model";

/**
 * Represents entry orders model.
 */
export class Strategy {
    strategyId: string;
    stopLossPerc: number;
    trailingStopPerc: number;
    takeProfitPerc: number;
    maxDollarAmount: number;
    isActive: boolean;

    isOnlyBullish: boolean;
    isOnlyBearish: boolean;

    condition1: boolean;
    condition2: boolean;
    condition3: boolean;
    condition4: boolean;
    condition5: boolean;

    conditionLabel1: string;
    conditionLabel2: string;
    conditionLabel3: string;
    conditionLabel4: string;
    conditionLabel5: string;

    takeProfitInputs: TakeProfitInput[];

    constructor(obj?: any) {

        this.strategyId = obj && obj?.openOrders || '';

        this.stopLossPerc = obj && obj?.stopLossPerc || 0;
        this.trailingStopPerc = obj && obj?.trailingStopPerc || 0;
        this.takeProfitPerc = obj && obj?.takeProfitPerc || 0;
        this.maxDollarAmount = obj && obj?.maxDollarAmount || 0;

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
        if (obj && obj.condition1 !== undefined) {
            this.condition1 = obj.condition1;
        } else {
            this.condition1 = true;
        }
        if (obj && obj.condition2 !== undefined) {
            this.condition2 = obj.condition2;
        } else {
            this.condition2 = true;
        }
        if (obj && obj.condition3 !== undefined) {
            this.condition3 = obj.condition3;
        } else {
            this.condition3 = true;
        }
        if (obj && obj.condition4 !== undefined) {
            this.condition4 = obj.condition4;
        } else {
            this.condition4 = true;
        }
        if (obj && obj.condition5 !== undefined) {
            this.condition5 = obj.condition5;
        } else {
            this.condition5 = true;
        }
        this.takeProfitInputs = obj && obj?.takeProfitInputs || [];


        this.conditionLabel1 = obj && obj?.conditionLabel1 || '';
        this.conditionLabel2 = obj && obj?.conditionLabel2 || '';
        this.conditionLabel3 = obj && obj?.conditionLabel3 || '';
        this.conditionLabel4 = obj && obj?.conditionLabel4 || '';
        this.conditionLabel5 = obj && obj?.conditionLabel5 || '';
    }

    toString() {
        return 'Strategy details: '.concat(objToString(this));
    };
}
