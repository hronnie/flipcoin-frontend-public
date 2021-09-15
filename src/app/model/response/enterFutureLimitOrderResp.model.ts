import {objToString} from "../../utils/helperMethods";

/**
 * Represents a enter future limit order response model.
 */
export class EnterFutureLimitOrderResp {
    success: boolean;
    quantity: number;
    price: number;

    constructor(obj?: any) {
        this.success = obj && obj.success || false;
        if (obj && obj.quantity) {
            this.quantity = Math.abs(obj.quantity)
        } else {
            this.quantity = 0;
        }
        this.price = obj && obj.price || 0;
    }

    toString() {
        return 'EnterFutureLimitOrderResp details: '.concat(objToString(this));
    };
}
