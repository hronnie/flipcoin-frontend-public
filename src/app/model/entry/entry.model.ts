import {FuturesRespPositionModel} from "../response/positionResp.model";
import {objToString} from "../../utils/helperMethods";
import {SIDE} from "../binance/binance.enums";
import {IncomeHistory} from "./incomeHistory.model";
import {TradingviewWebhookInput} from "../tradingview/tradingviewWebhookInput.model";

/**
 * Represents a entry model.
 * An entry represents a cycle of orders and positions.
 */
export class Entry {
    exchange: string;
    strategyId: string;
    symbol: string;
    side: SIDE;
    isActive: boolean;
    position: FuturesRespPositionModel;
    startDate: Date;
    endDate: Date;
    incomeHistory: IncomeHistory;
    webhookInput: TradingviewWebhookInput;
    exitPrice: string;
    entryInProgress: boolean;

    constructor(obj?: any) {
        this.exchange = obj && obj?.exchange || '';
        this.strategyId = obj && obj?.strategyId || '';
        this.symbol = obj && obj?.symbol || '';
        this.side = obj && obj?.side || '';
        this.isActive = obj && obj.isActive || true;
        this.position = obj && obj.position || new FuturesRespPositionModel();
        if (obj && obj.startDate) {
            this.startDate = new Date(obj.startDate);
        } else {
            this.startDate = new Date();
        }
        if (obj && obj.endDate) {
            this.startDate = new Date(obj.endDate);
        } else {
            this.endDate = null;
        }
        this.incomeHistory = obj && obj?.feesInUsd || new IncomeHistory();
        this.webhookInput = obj && obj.webhookInput || new TradingviewWebhookInput();
        this.exitPrice = obj && obj?.exitPrice || '';
        this.entryInProgress = obj && obj.entryInProgress || false;
    }

    toString() {
        return 'Entry details: '.concat(objToString(this));
    };
}
