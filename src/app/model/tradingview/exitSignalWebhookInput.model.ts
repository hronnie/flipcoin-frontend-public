import {SIDE} from "../binance/binance.enums";
import {objToString} from "../../utils/helperMethods";
import {TRADINGVIEW_ENTRY_EXIT_SIGNAL, TRADINGVIEW_TREND} from "./tradingview.enum";
import {TakeProfitInput} from "./takeProfitInput.model";

/**
 * Represents a Tradingview webhook input.
 */
export class ExitSignalWebhookInput {
    strategyId: string;
    symbol: string;
    quantityPerc: number;

    constructor(obj?: any) {
        this.strategyId = obj && obj.strategyId || '';
        this.symbol = obj && obj.symbol || '';
        this.quantityPerc = obj && obj.quantityPerc || 0;
    }

    toString() {
        return 'ExitSignalWebhookInput details: '.concat(objToString(this));
    };
}
