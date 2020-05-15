const ROUTE_PATHS = {
    HOME: "/",
    BALANCE: "/balance",
    RECHARGE: "/recharge",
    CATALOG: "/catalog",
    SUBSCRIBE: "/subscribe",
    CURRENT_SUBSCRIPTION: "/current-subscription",
    UPDATE_DETAILS: "/update-details",
    EXIT: "/exit"
};
ROUTE_PATHS.PACK =  `${ROUTE_PATHS.SUBSCRIBE}/pack`;
ROUTE_PATHS.CHANNEL = `${ROUTE_PATHS.SUBSCRIBE}/channel`;
ROUTE_PATHS.SERVICE = `${ROUTE_PATHS.SUBSCRIBE}/service`;

export { ROUTE_PATHS };