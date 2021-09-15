import {objToString} from "../../utils/helperMethods";

/**
 * Represents a init leverage response model.
 */
export class InitLeverageRespModel {
    leverage: number;
    symbol: string;
    maxNotionalValue: string;

    constructor(obj?: any) {
        this.leverage = obj && obj.leverage || 0;
        this.symbol = obj && obj.symbol || '';
        this.maxNotionalValue = obj && obj.maxNotionalValue || '';
    }

    toString() {
        return 'InitLeverageRespModel details: '.concat(objToString(this));
    };

}
