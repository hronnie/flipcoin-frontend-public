export enum POSITION_SIDE {
    BOTH = 'BOTH',
    LONG = 'LONG',
    SHORT = 'SHORT'
}

export enum SIDE {
    BUY = 'BUY',
    SELL = 'SELL'
}

export enum ORDER_TYPE {
    MARKET = 'MARKET',
    LIMIT = 'LIMIT',
    STOP = 'STOP',
    TAKE_PROFIT = 'TAKE_PROFIT',
    LIQUIDATION = 'LIQUIDATION',
    STOP_MARKET = 'STOP_MARKET',
    TAKE_PROFIT_MARKET = 'TAKE_PROFIT_MARKET',
    TRAILING_STOP_MARKET = 'TRAILING_STOP_MARKET'
}

export enum EXECUTION_TYPE {
    NEW = 'NEW',
    CANCELED = 'CANCELED',
    CALCULATED = 'CALCULATED',
    EXPIRED = 'EXPIRED',
    TRADE = 'TRADE'
}

export enum ORDER_STATUS {
    NEW = 'NEW',
    PARTIALLY_FILLED = 'PARTIALLY_FILLED',
    FILLED = 'FILLED',
    CANCELED = 'CANCELED',
    EXPIRED = 'EXPIRED',
    NEW_INSURANCE  = 'NEW_INSURANCE',// - Liquidation with Insurance Fund
    NEW_ADL = 'NEW_ADL', // - Counterparty Liquidation`
    NOT_FOUND = 'NOT_FOUND'
}

export enum TIME_IN_FORCE {
    GTC = 'GTC',
    IOC = 'IOC',
    FOK = 'FOK',
    GTX = 'GTX'
}

export enum WORKING_TYPE {
    MARK_PRICE = 'MARK_PRICE',
    CONTRACT_PRICE = 'CONTRACT_PRICE'
}

export enum TRUE_FALSE {
    TRUE = 'true',
    FALSE = 'false'
}

export enum NEW_ORDER_RESP_TYPE {
    ACK = 'ACK',
    RESULT = 'RESULT'
}

export enum MARGIN_TYPE {
    ISOLATED = 'ISOLATED',
    CROSSED = 'CROSSED'
}

export enum INCOME_TYPE {
    TRANSFER = 'TRANSFER',
    WELCOME_BONUS = 'WELCOME_BONUS',
    REALIZED_PNL = 'REALIZED_PNL',
    FUNDING_FEE = 'FUNDING_FEE',
    COMMISSION = 'COMMISSION',
    INSURANCE_CLEAR = 'INSURANCE_CLEAR',
}
