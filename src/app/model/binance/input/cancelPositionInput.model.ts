import {objToString} from "../../../utils/helperMethods";
import {SIDE} from "../binance.enums";

/**
 * Represents a cancel position input.
 */
export class CancelPositionInput {
    symbol: string;
    side: SIDE;
    quantity: number;

    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || '';
        this.side = obj && obj.side || '';
        if (obj && obj.quantity) {
            this.quantity  = Math.abs(obj.quantity)
        } else {
            this.quantity = 0;
        }
    }

    toString() {
        return 'CancelPositionInput details: '.concat(objToString(this));
    };
}
