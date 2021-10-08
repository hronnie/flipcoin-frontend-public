// TODO make it recursive
import {IncomeHistory} from "../model/entry/incomeHistory.model";
import {FuturesRespPositionModel} from "../model/response/positionResp.model";

/**
 * General toString method for objects
 */
export function objToString(object: any) {
    const result = Object.entries(object).reduce((str, [p, val]) => {
        return `${str}${p}=${val}, `;
    }, '');
    return result.slice(0, -2);
}

/**
 * Converts number to a fix position
 */
export function toFixed(num: number, fixed: number): string {
    const power = Math.pow(10, fixed || 0);
    const converted =  Math.floor(num * power) / power;
    return converted.toString();
}

export function isStrMandatoryParamValid(param: string): boolean {
    return (param && param !== "");
}

export function isNumMandatoryParamValid(param: number): boolean {
    return (param && param !== 0);
}
/**
 * Rounded 4 decimal number output
 */
export function toHumanReadableFormat(num: any): string {
    const inputNum = parseFloat(num);
    const power = Math.pow(10, 4 || 0);
    const converted =  Math.floor(inputNum * power) / power;
    return converted.toString();
}

/**
 * Rounded 2 decimal percent number output
 */
export function toHumanReadablePercentFormat(percFrom: any, percBase: any): string {
    const percFromNum = parseFloat(percFrom);
    const percBaseNum = parseFloat(percBase);
    const percResult = (percFromNum / percBaseNum) * 100;
    const power = Math.pow(10, 2 || 0);
    const converted = Math.floor(percResult * power) / power;
    return `${converted.toString()}%`;
}

export function convertAnyDateFormatToLong(dateValue: any) {
    const dateValueToDate = new Date((dateValue));
    return dateValueToDate.getTime();
}

export function calculateFees(incomeHistory: IncomeHistory): number {
    return incomeHistory.transfer
        + incomeHistory.welcomeBonus
        + incomeHistory.fundingFee
        + incomeHistory.commission
        + incomeHistory.insuranceClear
}

export function calculateProfit(incomeHistory: IncomeHistory): number {
    const fees = incomeHistory.transfer
        + incomeHistory.welcomeBonus
        + incomeHistory.fundingFee
        + incomeHistory.commission
        + incomeHistory.insuranceClear;
    return incomeHistory.realizedPnl + fees;
}

/**
 * Check if position is empty
 * @return true if position is empty
 */
export function isPositionEmpty(position: FuturesRespPositionModel): boolean {
    if (!position) {
        return true;
    }
    const positionAmount = parseFloat(position.positionAmt);
    return positionAmount === 0;
}
