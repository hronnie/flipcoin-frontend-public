import {objToString} from "../../utils/helperMethods";

/**
 * Represents income history model.
 */
export class IncomeHistory {
    transfer: number;
    welcomeBonus: number;
    realizedPnl: number;
    fundingFee: number;
    commission: number;
    insuranceClear: number;

    constructor(obj?: any) {
        this.transfer = obj && obj?.transfer || 0;
        this.welcomeBonus = obj && obj?.welcomeBonus || 0;
        this.realizedPnl = obj && obj?.realizedPnl || 0;
        this.fundingFee = obj && obj?.fundingFee || 0;
        this.commission = obj && obj?.commission || 0;
        this.insuranceClear = obj && obj?.insuranceClear || 0;
    }

    toString() {
        return 'Income history details: '.concat(objToString(this));
    };
}
