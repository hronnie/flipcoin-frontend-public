import {objToString} from "../../utils/helperMethods";
import {ORDER_TYPE} from "../binance/binance.enums";

/**
 * Represents exit order row model.
 */
export class ExitOrderRow {

    pricePercent: number;
    stopPrice: number;
    orderType: ORDER_TYPE;
    quantity: number;

    constructor(obj?: any) {
        this.pricePercent = obj && obj?.pricePercent || 0;
        this.stopPrice = obj && obj?.stopPrice || 0;
        this.orderType = obj && obj?.orderType || undefined;
        this.quantity = obj && obj?.quantity || 0;
    }

    toString() {
        return 'ExitOrderRow details: '.concat(objToString(this));
    };
}
