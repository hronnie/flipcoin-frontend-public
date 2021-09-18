import {MARGIN_TYPE} from "../binance.enums";
import {objToString} from "../../../utils/helperMethods";

/**
 * Represents a set margin input.
 */
export class SetMarginInput {
    symbol: string;  // Mandatory = YES
    marginType: MARGIN_TYPE; // Mandatory = YES
    recvWindow: number;   //  Mandatory = NO

    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || '';
        this.marginType = obj && obj.marginType || '';
        this.recvWindow = obj && obj.recvWindow || 5000;
    }

    toString() {
        return 'SetMarginInput details: '.concat(objToString(this));
    };
}
