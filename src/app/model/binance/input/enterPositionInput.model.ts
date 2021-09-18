import {objToString} from "../../../utils/helperMethods";

/**
 * Represents a enter position input.
 */
export class EnterPositionInput {
    symbol: string;
    strategyId: string;
    maxAmount: number;
    rangePercent: number;
    side: string;

    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || '';
        this.strategyId = obj && obj.strategyId || '';
        this.maxAmount = obj && obj.maxAmount || 0;
        this.rangePercent = obj && obj.rangePercent || 0;
        this.side = obj && obj.side || '';
    }

    toString() {
        return 'EnterPositionInput details: '.concat(objToString(this));
    };
}
