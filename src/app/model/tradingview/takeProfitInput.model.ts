import {objToString} from "../../utils/helperMethods";

/**
 * Represents a Take profit input
 */
export class TakeProfitInput {
    pricePercent: number;
    quantityPercent: number;

    constructor(obj?: any) {
        this.pricePercent = obj && obj.pricePercent || 0;
        this.quantityPercent = obj && obj.quantityPercent || 0;
    }

    toString() {
        return 'TakeProfitInput details: '.concat(objToString(this));
    };
}
