import {objToString} from "../../utils/helperMethods";
import {SIDE} from "../binance/binance.enums";
import {ExitOrderRow} from "./exitOrderRow.model";
import {FuturesRespOrderModel} from "../response/orderResp.model";

/**
 * Represents entry orders model.
 */
export class EntryOrders {
    openOrders: FuturesRespOrderModel[];
    actualOrders: FuturesRespOrderModel[];

    constructor(obj?: any) {
        this.openOrders = obj && obj?.openOrders || [];
        this.actualOrders = obj && obj?.actualOrders || [];
    }

    toString() {
        return 'EntryOrders details: '.concat(objToString(this));
    };
}
