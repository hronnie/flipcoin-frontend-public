import {objToString} from "../../../utils/helperMethods";
import { FTX_ORDER_TYPE, FTX_SIDE, FTX_TRUE_FALSE } from "../ftx.enums";

/**
 * Represents a Binance order input with all fields
 * @param {string} market - Symbol, Mandatory: XRP-PERP
 * @param {FTX_SIDE} side - Buy or Sell, Mandatory
 * @param {FTX_ORDER_TYPE} type - Mandatory, What kind of orders should be placed (e.g.: limit, stop, etc)
 * @param {string} size - Mandatory, how much size should be in the order. Cannot be sent with closePosition=true(Close-All).
 * @param {FTX_TRUE_FALSE} reduceOnly - Not Mandatory, "true" or "false". default "false". 
 * cannot be sent with closePosition=true
 * @param {string} price  - Not Mandatory
 * @param {FTX_TRUE_FALSE} ioc - Not Mandatory, "true" or "false". default "false". Immediate or cancel
 * @param {FTX_TRUE_FALSE} postOnly - Not Mandatory, "true" or "false". default "false". ??????
 * @param {string} clientId  - client order id, Not Mandatory
 * @param {FTX_TRUE_FALSE} rejectOnPriceBand - Not Mandatory, "true" or "false". default "false". if the order 
 * should be rejected if its price would instead be adjusted due to price bands
 * @param {string} triggerPrice - Not Mandatory, Used with STOP and TAKE_PROFIT orders, default as the latest price
 * @param {FTX_TRUE_FALSE} retryUntilFilled - Not Mandatory, "true" or "false". default "false". Whether or not to keep 
 * re-triggering until filled. optional, default true for market orders
 * @param {string} orderPrice  - Not Mandatory, Used with STOP and TAKE_PROFIT orders, order type is limit if this is specified; otherwise market
 * @param {number} trailValue - Not Mandatory, Used with TRAILING_STOP orders, negative for "sell"; positive for "buy"
 */
export class FtxFutureOrderInput {
    market: string;
    side: FTX_SIDE;
    type: FTX_ORDER_TYPE;
    size: string;
    reduceOnly: FTX_TRUE_FALSE;
    price: number;
    ioc: FTX_TRUE_FALSE;
    postOnly: FTX_TRUE_FALSE;
    clientId: string;
    rejectOnPriceBand: FTX_TRUE_FALSE;
    triggerPrice: number;
    retryUntilFilled: FTX_TRUE_FALSE;
    orderPrice: number;
    trailValue: number;

    constructor(obj?: any) {
        this.market = obj && obj.market || '';
        this.side = obj && obj.side || '';
        this.type = obj && obj.type || '';
        this.size = obj && obj.size || '';
        this.price = obj && obj.price;
        this.triggerPrice = obj && obj.triggerPrice;
        this.orderPrice = obj && obj.orderPrice;
        this.reduceOnly = obj && obj.reduceOnly;
        this.ioc = obj && obj.ioc;
        this.postOnly = obj && obj.postOnly;
        this.clientId = obj && obj.clientId 
        this.rejectOnPriceBand = obj && obj.rejectOnPriceBand;
        this.retryUntilFilled = obj && obj.retryUntilFilled;
        this.trailValue = obj && obj.trailValue;
    }

    toString() {
        return 'FtxFutureOrderInput details: '.concat(objToString(this));
    };
}
