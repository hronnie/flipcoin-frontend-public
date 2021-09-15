import {objToString} from "../../utils/helperMethods";

/**
 * Represents an object for the necessary fields for FTX connection.
 * @constructor
 * @param {string} apiKey - FTX api key
 * @param {string} secret - FTX secret key
 * @param {string} apiRootPath - FTX futures path
 * 
 */
export class FtxEndpointData {
    apiKey: string;
    secret: string;
    apiRootPath: string;

    constructor(obj?: any) {
        this.apiKey = obj && obj.apiKey || '';
        this.secret = obj && obj.secret || '';
        this.apiRootPath = obj && obj.apiRootPath || '';
    }

    toString() {
        return 'FtxEndpoint details: '.concat(objToString(this));
    };
}
