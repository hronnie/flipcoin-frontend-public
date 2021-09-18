import {objToString} from "../../../../utils/helperMethods";
import {NEW_ORDER_RESP_TYPE, ORDER_TYPE, POSITION_SIDE, SIDE, TIME_IN_FORCE, TRUE_FALSE, WORKING_TYPE} from "../../binance.enums";

/**
 * Represents a Binance order input with all fields
 * @param {string} symbol - Symbol, Mandatory
 * @param {SIDE} side - Buy or Sell, Mandatory
 * @param {POSITION_SIDE} positionSide -  Not Mandatory, Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode.
 * @param {ORDER_TYPE} type - Mandatory, What kind of orders should be placed (e.g.: limit, stop, etc)
 * @param {TIME_IN_FORCE} timeInForce - Not Mandatory, It specifies the type of the execution in the aspect of time
 * @param {string} quantity - Mandatory, how much quantity should be in the order. Cannot be sent with closePosition=true(Close-All).
 * @param {TRUE_FALSE} reduceOnly - Not Mandatory, "true" or "false". default "false". Cannot be sent in Hedge Mode;
 * cannot be sent with closePosition=true
 * @param {string} price  - Not Mandatory
 * @param {string} newClientOrderId - Not Mandatory, A unique id among open orders. Automatically generated if not sent.
 * Can only be string following the rule: ^[\.A-Z\:/a-z0-9_-]{1,36}$
 * @param {string} stopPrice - Not Mandatory, Stop price. Used with STOP/STOP_MARKET or TAKE_PROFIT/TAKE_PROFIT_MARKET orders.
 * @param {TRUE_FALSE} closePosition - Not Mandatory, true, false；Close-All，used with STOP_MARKET or TAKE_PROFIT_MARKET.
 * @param {string} activationPrice - Not Mandatory, Used with TRAILING_STOP_MARKET orders, default as the latest price
 * (supporting different workingType)
 * @param {number} callbackRate - Not Mandatory, Used with TRAILING_STOP_MARKET orders, min 0.1, max 5 where 1 for 1%
 * @param {WORKING_TYPE} workingType -  Not Mandatory, triggered by: "MARK_PRICE", "CONTRACT_PRICE". Default "CONTRACT_PRICE"
 * @param {TRUE_FALSE} priceProtect - Not Mandatory, "TRUE" or "FALSE", default "FALSE". Used with
 * STOP/STOP_MARKET or TAKE_PROFIT/TAKE_PROFIT_MARKET orders.
 * @param {NEW_ORDER_RESP_TYPE} newOrderRespType - Not Mandatory, "ACK", "RESULT", default "ACK"
 * @param {number} recvWindow - Not Mandatory
 */
export class FutureOrderInput {
    symbol: string;
    side: SIDE;
    positionSide: POSITION_SIDE;
    type: ORDER_TYPE;
    timeInForce: TIME_IN_FORCE;
    quantity: string;
    reduceOnly: TRUE_FALSE;
    price: string;
    newClientOrderId: string;
    stopPrice: string;
    closePosition: TRUE_FALSE;
    activationPrice: string;
    callbackRate: number;
    workingType: WORKING_TYPE;
    priceProtect: TRUE_FALSE;
    newOrderRespType: NEW_ORDER_RESP_TYPE;
    recvWindow: number;

    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || '';
        this.side = obj && obj.side || '';
        this.positionSide = obj && obj.positionSide || POSITION_SIDE.BOTH;
        this.type = obj && obj.type || '';
        this.timeInForce = obj && obj.timeInForce || '';
        this.quantity = obj && obj.quantity || '';
        this.reduceOnly = obj && obj.reduceOnly || '';
        if (obj && obj.price && obj.price) {
            this.price = obj.price;
        } else {
            this.price = '';
        }
        this.newClientOrderId = obj && obj.newClientOrderId || '';
        if (obj && obj.stopPrice && obj.stopPrice) {
            this.stopPrice = obj.stopPrice;
        } else {
            this.stopPrice = '';
        }
        this.closePosition = obj && obj.closePosition || '';
        if (obj && obj.activationPrice) {
            this.activationPrice = obj.activationPrice;
        } else {
            this.activationPrice = '';
        }
        this.workingType = obj && obj.workingType || '';
        this.priceProtect = obj && obj.priceProtect || '';
        this.newOrderRespType = obj && obj.newOrderRespType || NEW_ORDER_RESP_TYPE.RESULT;
        this.recvWindow = obj && obj.recvWindow || 5000;
        this.callbackRate = obj && obj.callbackRate || '';
    }

    toString() {
        return 'FutureOrderInput details: '.concat(objToString(this));
    };
}
