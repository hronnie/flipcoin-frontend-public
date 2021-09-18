import {objToString} from "../../utils/helperMethods";
import {FuturesRespOrderModel} from "./orderResp.model";

/**
 * Represents a cancel position response model.
 */
export class CancelPositionRespModel {
    status: boolean;
    limitOrder: FuturesRespOrderModel;

    constructor(obj?: any) {
        this.status = obj && obj.status || false;
        this.limitOrder = obj && obj.limitOrder || null;
    }

    toString() {
        return 'CancelPositionRespModel details: '.concat(objToString(this));
    };
}
