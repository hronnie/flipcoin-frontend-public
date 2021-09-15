import {objToString} from "../../utils/helperMethods";

/**
 * Represents the possible responses for controllers
 */
export class ControllerResponseStatusModel {
    code: number;
    msg: string;
    success: boolean;

    constructor(obj?: any) {
        this.code = obj && obj.code || 0;
        this.msg = obj && obj.msg || '';
        if (obj && obj.success) {
            this.success = obj.success;
        } else {
            this.success = false;
        }
    }

    toString() {
        return 'ControllerResponseStatusModel details: '.concat(objToString(this));
    };
}
