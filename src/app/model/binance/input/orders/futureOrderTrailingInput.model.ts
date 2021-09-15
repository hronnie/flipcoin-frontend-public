import {objToString} from "../../../../utils/helperMethods";
import {SIDE} from "../../binance.enums";

/**
 * Represents a trailing order input.
 */
export class FutureOrderTrailingInput {
    symbol: string;
    side: SIDE;
    quantity: number;
    activationPrice: number;
    callbackRate: number;

    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || '';
        this.side = obj && obj.side || '';
        this.quantity = obj && obj.quantity || '';
        this.activationPrice = obj && obj.activationPrice || '';
        this.callbackRate = obj && obj.callbackRate || '';
    }

    toString() {
        return 'FutureOrderTrailingInput details: '.concat(objToString(this));
    };
}
