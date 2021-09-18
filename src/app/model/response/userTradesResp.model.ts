import {objToString} from "../../utils/helperMethods";

/**
 * Represents a position response model.
 */
export class UserTradesRespModel {
    buyer: boolean;
    commission: string;
    commissionAsset: string;
    id: string;
    maker: boolean;
    orderId: number;
    price: string;
    qty: string;
    quoteQty: string;
    realizedPnl: number;
    side: string;
    positionSide: string;
    symbol: string;
    time: Date;

    constructor(obj?: any) {
        this.buyer = obj && obj.buyer || false;
        this.commission = obj && obj.commission || '';
        this.commissionAsset = obj && obj.commissionAsset || '';
        this.id = obj && obj.id || '';
        this.maker = obj && obj.maker || false;
        this.orderId = obj && obj.orderId || 0;
        this.price = obj && obj.price || '';
        this.qty = obj && obj.qty || '';
        this.quoteQty = obj && obj.quoteQty || '';
        this.realizedPnl = obj && obj.realizedPnl || 0;
        this.side = obj && obj.side || '';
        this.positionSide = obj && obj.positionSide || '';
        this.symbol = obj && obj.symbol || '';
        this.time = obj && this.setTime(obj.time) || new Date();
    }

    setTime(timeNum: number) {
        const timeItem = new Date();
        timeItem.setTime(timeNum);
        return timeItem;
    }

    toString() {
        return 'UserTradesRespModel details: '.concat(objToString(this));
    };
}
