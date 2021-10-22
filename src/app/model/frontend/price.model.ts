import {objToString} from "../../utils/helperMethods";

/**
 * Represents a entry model.
 * An entry represents a cycle of orders and positions.
 */
export class Price {
    symbol: string;
    price: number;

    constructor(obj?: any) {
        this.symbol = obj && obj?.symbol || '';
        this.price = obj && obj?.price || 0;
    }

    toString() {
        return 'Price model: '.concat(objToString(this));
    };
}
