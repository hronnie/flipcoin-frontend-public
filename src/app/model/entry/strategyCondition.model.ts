import {objToString} from "../../utils/helperMethods";

/**
 * Represents strategy condition model.
 */
export class StrategyCondition {

    status: boolean;
    statusNote: string;

    constructor(obj?: any) {

        this.statusNote = obj && obj?.statusNote || '';
        if (obj && obj.status !== undefined) {
            this.status = obj.status;
        } else {
            this.status = false;
        }
    }

    toString() {
        return 'Strategy details: '.concat(objToString(this));
    };
}
