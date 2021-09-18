import {objToString} from "../../utils/helperMethods";
import {ORDER_TYPE} from "../binance/binance.enums";

/**
 * Represents executed exit or model.
 */
export class ExecutedExitOrderRow {

    symbol: string;
    executedQty: number;
    stopPrice: number;
    withProfit: boolean;

    constructor(obj?: any) {
        this.symbol = obj && obj?.symbol || '';
        this.executedQty = obj && obj?.executedQty || 0;
        this.stopPrice = obj && obj?.stopPrice || 0;
        this.withProfit = obj && obj?.withProfit || undefined;
    }

    toString() {
        return 'ExitOrderRow details: '.concat(objToString(this));
    };
}
