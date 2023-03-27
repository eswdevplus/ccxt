import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    addressbookGetMe?(params?: {}): Promise<implicitReturnType>;
    addressbookPost?(params?: {}): Promise<implicitReturnType>;
    addressbookPostIdId?(params?: {}): Promise<implicitReturnType>;
    addressbookPostIdIdRemove?(params?: {}): Promise<implicitReturnType>;
    custodyGetCredentials?(params?: {}): Promise<implicitReturnType>;
    custodyGetCredentialsHHash?(params?: {}): Promise<implicitReturnType>;
    custodyGetCredentialsKKey?(params?: {}): Promise<implicitReturnType>;
    custodyGetCredentialsMe?(params?: {}): Promise<implicitReturnType>;
    custodyGetCredentialsMeAddress?(params?: {}): Promise<implicitReturnType>;
    custodyGetDepositAddresses?(params?: {}): Promise<implicitReturnType>;
    custodyGetDepositAddressesHHash?(params?: {}): Promise<implicitReturnType>;
    historyGetOrders?(params?: {}): Promise<implicitReturnType>;
    historyGetOrdersDetails?(params?: {}): Promise<implicitReturnType>;
    historyGetOrdersExportCsv?(params?: {}): Promise<implicitReturnType>;
    historyGetTrades?(params?: {}): Promise<implicitReturnType>;
    historyGetTradesExportCsv?(params?: {}): Promise<implicitReturnType>;
    currenciesGetAAddress?(params?: {}): Promise<implicitReturnType>;
    currenciesGetIId?(params?: {}): Promise<implicitReturnType>;
    currenciesGetSSymbol?(params?: {}): Promise<implicitReturnType>;
    currenciesPostPerform?(params?: {}): Promise<implicitReturnType>;
    currenciesPostPrepare?(params?: {}): Promise<implicitReturnType>;
    currenciesPostRemovePerform?(params?: {}): Promise<implicitReturnType>;
    currenciesPostSSymbolRemovePrepare?(params?: {}): Promise<implicitReturnType>;
    currenciesPostSSymbolUpdatePerform?(params?: {}): Promise<implicitReturnType>;
    currenciesPostSSymbolUpdatePrepare?(params?: {}): Promise<implicitReturnType>;
    managerGetDeposits?(params?: {}): Promise<implicitReturnType>;
    managerGetTransfers?(params?: {}): Promise<implicitReturnType>;
    managerGetWithdrawals?(params?: {}): Promise<implicitReturnType>;
    marketsGetIId?(params?: {}): Promise<implicitReturnType>;
    marketsGetSSymbol?(params?: {}): Promise<implicitReturnType>;
    marketsPostPerform?(params?: {}): Promise<implicitReturnType>;
    marketsPostPrepare?(params?: {}): Promise<implicitReturnType>;
    marketsPostRemovePerform?(params?: {}): Promise<implicitReturnType>;
    marketsPostSSymbolRemovePrepare?(params?: {}): Promise<implicitReturnType>;
    marketsPostSSymbolUpdatePerform?(params?: {}): Promise<implicitReturnType>;
    marketsPostSSymbolUpdatePrepare?(params?: {}): Promise<implicitReturnType>;
    publicGetCandles?(params?: {}): Promise<implicitReturnType>;
    publicGetCurrencies?(params?: {}): Promise<implicitReturnType>;
    publicGetMarkets?(params?: {}): Promise<implicitReturnType>;
    publicGetOrderbook?(params?: {}): Promise<implicitReturnType>;
    publicGetOrderbookRaw?(params?: {}): Promise<implicitReturnType>;
    publicGetOrderbookV2?(params?: {}): Promise<implicitReturnType>;
    publicGetTickers?(params?: {}): Promise<implicitReturnType>;
    publicGetTrades?(params?: {}): Promise<implicitReturnType>;
    statisticsGetAddress?(params?: {}): Promise<implicitReturnType>;
    tradingGetBalances?(params?: {}): Promise<implicitReturnType>;
    tradingGetFees?(params?: {}): Promise<implicitReturnType>;
    tradingGetOrders?(params?: {}): Promise<implicitReturnType>;
    tradingPostOrders?(params?: {}): Promise<implicitReturnType>;
    tradingPostOrdersJson?(params?: {}): Promise<implicitReturnType>;
    tradingPutOrders?(params?: {}): Promise<implicitReturnType>;
    tradingPutOrdersJson?(params?: {}): Promise<implicitReturnType>;
    tradingDeleteOrders?(params?: {}): Promise<implicitReturnType>;
    tradingDeleteOrdersJson?(params?: {}): Promise<implicitReturnType>;
    tradingviewGetConfig?(params?: {}): Promise<implicitReturnType>;
    tradingviewGetHistory?(params?: {}): Promise<implicitReturnType>;
    tradingviewGetSymbolInfo?(params?: {}): Promise<implicitReturnType>;
    tradingviewGetTime?(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
