export enum FTX_REQUEST_METHOD {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE'
}

export enum FTX_SIDE {
    BUY = 'buy',
    SELL = 'sell'
}

export enum FTX_ORDER_TYPE {
    MARKET = 'market',
    LIMIT = 'limit',
    STOP = 'stop',
    TAKE_PROFIT = 'take_profit',
    TRAILING_STOP = 'trailingStop'
}

export enum FTX_TRUE_FALSE {
    TRUE = 'true',
    FALSE = 'false'
}

export enum FTX_ORDER_STATUS {
    OPEN = 'open', 
    NEW = 'new', // accepted but not processed yet
    CLOSED = 'closed',  // filled or cancelled
    CANCELLED = 'cancelled',
    TRIGGERED = 'triggered'
}

