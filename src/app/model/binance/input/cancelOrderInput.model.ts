import {objToString} from "../../../utils/helperMethods";

/**
 * Represents a cancel order input.
 */
export class CancelOrderInput {
    symbol: string;
    orderId: number;

    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || '';
        this.orderId = obj && obj.orderId || 0;
    }

    toString() {
        return 'CancelOrderInput details: '.concat(objToString(this));
    };
}
