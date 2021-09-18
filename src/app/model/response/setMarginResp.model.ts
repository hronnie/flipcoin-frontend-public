import {objToString} from "../../utils/helperMethods";

/**
 * Represents a set margin response model.
 */
export class SetMarginRespModel {
    code: number;
    msg: string;

    constructor(obj?: any) {
        this.code = obj && obj.code || 0;
        this.msg = obj && obj.msg || '';
    }

    toString() {
        return 'SetMarginRespModel details: '.concat(objToString(this));
    };
}
