import {objToString} from "../../../../utils/helperMethods";
import {SIDE, TIME_IN_FORCE, TRUE_FALSE} from "../../binance.enums";

/**
 * Represents a market order input.
 */
export class FutureOrderMarketInput {
    symbol: string;
    side: SIDE;
    quantity: number;
    reduceOnly: TRUE_FALSE;
    timeInForce: TIME_IN_FORCE;

    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || '';
        this.side = obj && obj.side || '';
        this.quantity = obj && obj.quantity || '';
        this.reduceOnly = obj && obj.reduceOnly || '';
        this.timeInForce = obj && obj.timeInForce || TIME_IN_FORCE.FOK;
    }

    toString() {
        return 'FutureOrderMarketInput details: '.concat(objToString(this));
    };
}
