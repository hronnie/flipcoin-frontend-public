import {SIDE} from "../binance/binance.enums";
import {objToString} from "../../utils/helperMethods";
import {TRADINGVIEW_ENTRY_EXIT_SIGNAL, TRADINGVIEW_TREND} from "./tradingview.enum";
import {TakeProfitInput} from "./takeProfitInput.model";

/**
 * Represents a Tradingview webhook input.
 */
export class TradingviewWebhookInput {
    strategyId: string;
    symbol: string;
    strategyDesc: string;
    trend: TRADINGVIEW_TREND;
    trailPerc: number;
    takeProfitPerc: number;
    maxDollarAmount: number;
    strategyOrderComment: TRADINGVIEW_ENTRY_EXIT_SIGNAL;
    side: SIDE;
    price: number;
    takeProfitInputs: TakeProfitInput[];
    
    constructor(obj?: any) {
        this.strategyId = obj && obj.strategyId || '';
        this.symbol = obj && obj.symbol || '';
        this.strategyDesc = obj && obj.strategyDesc || '';
        this.trend = obj && obj.trend || '';
        this.trailPerc = obj && obj.trailPerc || 0;
        this.takeProfitPerc = obj && obj.takeProfitPerc || 0;
        this.maxDollarAmount = obj && obj.maxDollarAmount || 0;
        this.strategyOrderComment = obj && obj.strategyOrderComment || '';
        this.price = obj && obj.price || 0;
        if (obj && obj.strategyOrderComment) {
            switch (this.strategyOrderComment) {
                case TRADINGVIEW_ENTRY_EXIT_SIGNAL.LONG_ENTRY:
                    this.side = SIDE.BUY
                    break;
                case TRADINGVIEW_ENTRY_EXIT_SIGNAL.LONG_EXIT:
                    this.side = SIDE.SELL
                    break;
                case TRADINGVIEW_ENTRY_EXIT_SIGNAL.SHORT_ENTRY:
                    this.side = SIDE.SELL
                    break;
                case TRADINGVIEW_ENTRY_EXIT_SIGNAL.SHORT_EXIT:
                    this.side = SIDE.BUY
                    break;
            }
        }
        this.takeProfitInputs = obj && obj.takeProfitInputs || [];
    }

    toString() {
        return 'TradingviewWebhookInput details: '.concat(objToString(this));
    };
}
