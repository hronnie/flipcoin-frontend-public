import {objToString} from "../../../../utils/helperMethods";
import {SIDE, TIME_IN_FORCE} from "../../binance.enums";

/**
 * Represents a limit order input.
 */
export class FutureOrderLimitInput {
    symbol: string;
    side: SIDE;
    quantity: number;
    price: number;
    timeInForce: TIME_IN_FORCE;

    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || '';
        this.side = obj && obj.side || '';
        this.quantity = obj && obj.quantity || '';
        this.price = obj && obj.price || '';
        this.timeInForce = obj && obj.timeInForce || TIME_IN_FORCE.GTC;
    }

    toString() {
        return 'FutureOrderLimitInput details: '.concat(objToString(this));
    };
}
