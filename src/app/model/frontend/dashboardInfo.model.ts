import {objToString} from "../../utils/helperMethods";
import {Price} from "./price.model";

/**
 * Represents a entry model.
 * An entry represents a cycle of orders and positions.
 */
export class DashboardInfo {
    ftxBalance: number;
    binanceBalance: number;
    currentSymbolPrices: Price[];

    constructor(obj?: any) {
        this.ftxBalance = obj && obj?.ftxBalance || 0;
        this.binanceBalance = obj && obj?.binanceBalance || 0;
        this.currentSymbolPrices = obj && obj?.currentSymbolPrices || [];
    }

    toString() {
        return 'Dashboard info: '.concat(objToString(this));
    };
}
