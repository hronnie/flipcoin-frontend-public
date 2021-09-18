import {objToString} from "../../utils/helperMethods";
import {SIDE} from "../binance/binance.enums";
import {ExecutedExitOrderRow} from "./executedExitOrderRow.model";
import {IncomeHistory} from "./incomeHistory.model";

/**
 * Represents entry exit report data model.
 */
export class EntryExitReportData {

    strategyId: string;
    symbol: string;
    side: SIDE;
    executedExitOrderRows: ExecutedExitOrderRow[];
    incomeHistory: IncomeHistory;
    startDate: Date;
    realCost: number;
    estimatedPnl: number;
    estimatedPnlPercent: number;
    isEstimatedValue: boolean;

    constructor(obj?: any) {
        this.strategyId = obj && obj?.strategyId || '';
        this.symbol = obj && obj?.symbol || '';
        this.side = obj && obj?.side || '';
        this.executedExitOrderRows = obj && obj?.executedExitOrderRows || [];
        this.incomeHistory = obj && obj?.incomeHistory || {};
        this.startDate = obj && obj?.startDate || null;
        this.realCost = obj && obj?.realCost || 0;
        this.estimatedPnl = obj && obj?.estimatedPnl || 0;
        this.estimatedPnlPercent = obj && obj?.estimatedPnlPercent || 0;
        this.isEstimatedValue = obj && obj?.isEstimatedValue || false;
    }

    toString() {
        return 'EntryExitReportData details: '.concat(objToString(this));
    };
}
