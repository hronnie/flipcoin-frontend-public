import {FuturesRespPositionModel} from "../response/positionResp.model";
import {objToString} from "../../utils/helperMethods";
import {SIDE} from "../binance/binance.enums";
import {TradingviewWebhookInput} from "../tradingview/tradingviewWebhookInput.model";
import {EntryReport} from "./entryReport.model";

/**
 * Represents a entry model.
 * An entry represents basic entry details and its position.
 */
export class Entry {
    id: string;
    exchange: string;
    strategyId: string;
    symbol: string;
    side: SIDE;
    isActive: boolean;
    position: FuturesRespPositionModel;
    startDate: Date;
    endDate: Date;
    webhookInput: TradingviewWebhookInput;
    entryReport: EntryReport;

    constructor(obj?: any) {
        this.id = obj && obj?.id || '';
        this.exchange = obj && obj?.exchange || '';
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
        if (obj && obj.webhookInput) {
            this.webhookInput = obj && obj.webhookInput;
        } else {
            this.webhookInput = new TradingviewWebhookInput();
        }
    }

    toString() {
        return 'Entry details: '.concat(objToString(this));
    };
}
