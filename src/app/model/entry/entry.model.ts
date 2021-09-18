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
    enterPrice: string;
    entryInProgress: boolean;
    profit: number;
    fees: number;
    realCost: string;

    constructor(obj?: any) {
        this.exchange = obj && obj?.exchange || '';
        this.profit = obj && obj?.profit || 0;
        this.fees = obj && obj?.fees || 0;
        this.enterPrice = obj && obj?.startPrice || '';
        this.realCost = obj && obj?.realCost || '';
        this.strategyId = obj && obj?.strategyId || '';
        this.symbol = obj && obj?.symbol || '';
        this.side = obj && obj?.side || '';
        if (obj && obj.isActive !== undefined) {
            this.isActive = obj.isActive;
        } else {
            this.isActive = true;
        }
        if (obj && obj.position) {
            this.position = obj.position;
        } else {
            this.position = new FuturesRespPositionModel();
        }
        if (obj && obj.startDate) {
            this.startDate = new Date(obj.startDate);
        } else {
            this.startDate = new Date();
        }
        if (obj && obj.endDate) {
            this.endDate = new Date(obj.endDate);
        } else {
            this.endDate = null;
        }
        if (obj && obj?.incomeHistory) {
            this.incomeHistory = obj?.incomeHistory;
        } else {
            this.incomeHistory = new IncomeHistory();
        }
        if (obj && obj.webhookInput) {
            this.webhookInput = obj && obj.webhookInput;
        } else {
            this.webhookInput = new TradingviewWebhookInput();
        }
        this.exitPrice = obj && obj?.exitPrice || '';
        if (obj && obj.entryInProgress) {
            this.entryInProgress = obj.entryInProgress;
        } else {
            this.entryInProgress = false;
        }
    }

    toString() {
        return 'Entry details: '.concat(objToString(this));
    };
}
