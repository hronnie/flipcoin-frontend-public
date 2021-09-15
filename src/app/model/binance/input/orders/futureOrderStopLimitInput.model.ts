import {objToString} from "../../../../utils/helperMethods";
import {SIDE, TRUE_FALSE} from "../../binance.enums";

/**
 * Represents a stop limit order input.
 */
export class FutureOrderStopLimitInput {
    symbol: string;
    side: SIDE;
    quantity: number;
    price: number;
    stopPrice: number;
    closePosition: TRUE_FALSE;
    reduceOnly: TRUE_FALSE;

    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || '';
        this.side = obj && obj.side || '';
        this.quantity = obj && obj.quantity || '';
        this.price = obj && obj.price || '';
        this.stopPrice = obj && obj.stopPrice || '';
        this.closePosition = obj && obj.closePosition || TRUE_FALSE.TRUE;
        this.reduceOnly = obj && obj.reduceOnly || '';
    }
    
    toString() {
        return 'FutureOrderStopLimitInput details: '.concat(objToString(this));
    };
}
