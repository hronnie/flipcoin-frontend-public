import {objToString} from "../../utils/helperMethods";

/**
 * Represents an object for the necessary fields for Binance connection.
 * @constructor
 * @param {string} apiKey - Binance api key
 * @param {string} secret - Binance secret key
 * @param {string} fapiRootPath - Binance futures path
 * @param {string} header - Binance header for axios connection
 */
export class BinanceEndpointData {
    apiKey: string;
    secret: string;
    fapiRootPath: string;
    header: any;

    constructor(obj?: any) {
        this.apiKey = obj && obj.apiKey || '';
        this.secret = obj && obj.secret || '';
        this.fapiRootPath = obj && obj.fapiRootPath || '';
        this.header = obj && obj.header || {};
    }

    toString() {
        return 'BinanceEndpoint details: '.concat(objToString(this));
    };
}
