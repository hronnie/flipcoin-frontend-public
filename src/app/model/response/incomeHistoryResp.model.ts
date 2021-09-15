import {objToString} from "../../utils/helperMethods";
import {INCOME_TYPE} from "../binance/binance.enums";

/**
 * Represents a Income History model
 */
export class IncomeHistoryResp {
    symbol: string;
    incomeType: INCOME_TYPE;
    income: string;
    asset: string;
    info: string;
    time: Date;
    tranId: string;
    tradeId: string;


    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || '';
        this.incomeType = obj && obj.incomeType || '';
        this.income = obj && obj.income || '';
        this.asset = obj && obj.asset || '';
        this.info = obj && obj.info || '';
        this.time = obj && obj.time || Date.now();
        this.tranId = obj && obj.tranId || '';
        this.tradeId = obj && obj.tradeId || '';
    }

    toString() {
        return 'CreateExitOrdersRespModel details: '.concat(objToString(this));
    };
}
