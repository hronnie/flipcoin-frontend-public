import {objToString} from "../../../utils/helperMethods";

/**
 * Represents a init leverage input.
 */
export class InitLeverageInput {
    symbol: string;  // Mandatory = YES
    leverage: number; // Mandatory = YES
    recvWindow: number;   //  Mandatory = NO

    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || '';
        this.leverage = obj && obj.leverage || '';
        this.recvWindow = obj && obj.recvWindow || '';
    }

    toString() {
        return 'InitLeverageInput details: '.concat(objToString(this));
    };
}
