import {objToString} from "../../utils/helperMethods";

/**
 * Represents a cancel order response model.
 */
export class CancelOrderRespModel {
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: string;
    timeInForce: string;
    type: string;
    side: string;

    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || '';
        this.origClientOrderId = obj && obj.origClientOrderId || '';
        this.orderId = obj && obj.orderId || 0;
        this.orderListId = obj && obj.orderListId || 0;
        this.clientOrderId = obj && obj.clientOrderId || '';
        this.price = obj && obj.price || '';
        this.origQty = obj && obj.origQty || '';
        this.executedQty = obj && obj.executedQty || '';
        this.cummulativeQuoteQty = obj && obj.cummulativeQuoteQty || '';
        this.status = obj && obj.status || '';
        this.timeInForce = obj && obj.timeInForce || '';
        this.type = obj && obj.type || '';
        this.side = obj && obj.side || '';
    }

    setTime(timeNum: number) {
        const timeItem = new Date();
        timeItem.setTime(timeNum);
        return timeItem;
    }

    toString() {
        return 'CancelOrderRespModel details: '.concat(objToString(this));
    };
}
