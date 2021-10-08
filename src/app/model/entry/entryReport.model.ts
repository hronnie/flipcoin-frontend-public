import {objToString} from "../../utils/helperMethods";
import {IncomeHistory} from "./incomeHistory.model";

/**
 * Represents a entry model.
 * An entry represents a cycle of orders and positions.
 */
export class EntryReport {
    entryId: string;
    incomeHistory: IncomeHistory;
    enterPrice: number;
    exitPrice: number;
    realCost: number;
    maxDollarAmount: number;
    origQuantity: number;
    leverage: number;

    constructor(obj?: any) {
        this.entryId = obj && obj?.entryId || '';
        this.enterPrice = obj && obj?.enterPrice || 0;
        this.exitPrice = obj && obj?.exitPrice || 0;
        this.realCost = obj && obj?.realCost || 0;
        this.maxDollarAmount = obj && obj?.maxDollarAmount || 0;
        this.origQuantity = obj && obj?.origQuantity || 0;
        this.leverage = obj && obj?.leverage || 0;

        if (obj && obj?.incomeHistory) {
            this.incomeHistory = obj?.incomeHistory;
        } else {
            this.incomeHistory = new IncomeHistory();
        }
    }

    toString() {
        return 'Entry report details: '.concat(objToString(this));
    };
}
