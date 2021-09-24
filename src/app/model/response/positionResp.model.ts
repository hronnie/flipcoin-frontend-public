import {objToString} from "../../utils/helperMethods";
import {MARGIN_TYPE, POSITION_SIDE} from "../binance/binance.enums";

/**
 * Represents a position response model.
 */
export class FuturesRespPositionModel {
    entryPrice: string;
    marginType: MARGIN_TYPE;
    isolatedMargin: string;
    leverage: number;
    liquidationPrice: number;
    markPrice: number;
    maxNotionalValue: number;
    positionAmt: string;
    symbol: string;
    unRealizedProfit: number;
    positionSide: POSITION_SIDE;
    updateTime: Date;

    constructor(obj?: any) {
        this.entryPrice = obj && obj.entryPrice || '';
        this.marginType = obj && (obj.marginType === 'isolated' ? MARGIN_TYPE.ISOLATED : MARGIN_TYPE.CROSSED );
        this.isolatedMargin = obj && obj.isolatedMargin || '';
        this.leverage = obj && obj.leverage || 0;
        this.liquidationPrice = obj && obj.liquidationPrice || 0;
        this.markPrice = obj && obj.markPrice || 0;
        this.maxNotionalValue = obj && obj.maxNotionalValue || 0;
        this.positionAmt = obj && obj.positionAmt || 0;
        this.symbol = obj && obj.symbol || '';
        this.unRealizedProfit = obj && obj.unRealizedProfit || 0;
        this.positionSide = obj && POSITION_SIDE[obj.positionSide]; 
        this.updateTime = obj && this.setTime(obj.updateTime) || new Date();
    }

    setTime(timeNum: number) {
        const timeItem = new Date();
        timeItem.setTime(timeNum);
        return timeItem;
    }

    toString() {
        return 'FuturesRespPositionModel details: '.concat(objToString(this));
    };
}
