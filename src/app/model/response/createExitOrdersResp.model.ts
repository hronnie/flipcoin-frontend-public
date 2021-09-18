import {objToString} from "../../utils/helperMethods";
import {FuturesRespOrderModel} from "./orderResp.model";

/**
 * Represents a create exit order response model.
 */
export class CreateExitOrdersRespModel {
    status: boolean;
    stoplossOrder: FuturesRespOrderModel;
    takeProfitOrders: FuturesRespOrderModel[];

    constructor(obj?: any) {
        this.status = obj && obj.status || false;
        this.stoplossOrder = obj && obj.stoplossOrder || null;
        this.takeProfitOrders = obj && obj.takeProfitOrders || null;
    }

    toString() {
        return 'CreateExitOrdersRespModel details: '.concat(objToString(this));
    };
}
