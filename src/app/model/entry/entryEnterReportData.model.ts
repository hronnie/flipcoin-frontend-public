import {objToString} from "../../utils/helperMethods";
import {SIDE} from "../binance/binance.enums";
import {ExitOrderRow} from "./exitOrderRow.model";

/**
 * Represents entry enter report data model.
 */
export class EntryEnterReportData {
    strategyId: string;
    symbol: string;
    side: SIDE;
    entryEnterPrice: number;
    realCost: number;
    maxDollarAmount: number;
    origEnterQuantity: number;
    coin: string;
    leverage: number;
    exitRows: ExitOrderRow[];

    constructor(obj?: any) {
        this.strategyId = obj && obj?.strategyId || '';
        this.symbol = obj && obj?.symbol || '';
        this.side = obj && obj?.side || '';
        this.entryEnterPrice = obj && obj?.entryEnterPrice || 0;
        this.realCost = obj && obj?.realCost || 0;
        this.maxDollarAmount = obj && obj?.maxDollarAmount || 0;
        this.origEnterQuantity = obj && obj?.origEnterQuantity || 0;
        this.coin = obj && obj?.coin || '';
        this.leverage = obj && obj?.leverage || 0;
        this.exitRows = obj && obj?.exitRows || [];
    }

    toString() {
        return 'EntryEnterReportData details: '.concat(objToString(this));
    };
}
