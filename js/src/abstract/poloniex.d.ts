import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    publicGetMarkets?(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsSymbol?(params?: {}): Promise<implicitReturnType>;
    publicGetCurrencies?(params?: {}): Promise<implicitReturnType>;
    publicGetCurrenciesCurrency?(params?: {}): Promise<implicitReturnType>;
    publicGetTimestamp?(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsPrice?(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsSymbolPrice?(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsSymbolOrderBook?(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsSymbolCandles?(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsSymbolTrades?(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsTicker24h?(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsSymbolTicker24h?(params?: {}): Promise<implicitReturnType>;
    privateGetAccounts?(params?: {}): Promise<implicitReturnType>;
    privateGetAccountsActivity?(params?: {}): Promise<implicitReturnType>;
    privateGetAccountsBalances?(params?: {}): Promise<implicitReturnType>;
    privateGetAccountsIdBalances?(params?: {}): Promise<implicitReturnType>;
    privateGetAccountsTransfer?(params?: {}): Promise<implicitReturnType>;
    privateGetAccountsTransferId?(params?: {}): Promise<implicitReturnType>;
    privateGetSubaccounts?(params?: {}): Promise<implicitReturnType>;
    privateGetSubaccountsBalances?(params?: {}): Promise<implicitReturnType>;
    privateGetSubaccountsIdBalances?(params?: {}): Promise<implicitReturnType>;
    privateGetSubaccountsTransfer?(params?: {}): Promise<implicitReturnType>;
    privateGetSubaccountsTransferId?(params?: {}): Promise<implicitReturnType>;
    privateGetFeeinfo?(params?: {}): Promise<implicitReturnType>;
    privateGetWalletsAddresses?(params?: {}): Promise<implicitReturnType>;
    privateGetWalletsActivity?(params?: {}): Promise<implicitReturnType>;
    privateGetWalletsAddressesCurrency?(params?: {}): Promise<implicitReturnType>;
    privateGetOrders?(params?: {}): Promise<implicitReturnType>;
    privateGetOrdersId?(params?: {}): Promise<implicitReturnType>;
    privateGetOrdersHistory?(params?: {}): Promise<implicitReturnType>;
    privateGetOrdersKillSwitchStatus?(params?: {}): Promise<implicitReturnType>;
    privateGetSmartorders?(params?: {}): Promise<implicitReturnType>;
    privateGetSmartordersId?(params?: {}): Promise<implicitReturnType>;
    privateGetSmartordersHistory?(params?: {}): Promise<implicitReturnType>;
    privateGetTrades?(params?: {}): Promise<implicitReturnType>;
    privateGetOrdersIdTrades?(params?: {}): Promise<implicitReturnType>;
    privatePostAccountsTransfer?(params?: {}): Promise<implicitReturnType>;
    privatePostSubaccountsTransfer?(params?: {}): Promise<implicitReturnType>;
    privatePostWalletsAddress?(params?: {}): Promise<implicitReturnType>;
    privatePostWalletsWithdraw?(params?: {}): Promise<implicitReturnType>;
    privatePostOrders?(params?: {}): Promise<implicitReturnType>;
    privatePostOrdersKillSwitch?(params?: {}): Promise<implicitReturnType>;
    privatePostOrdersBatch?(params?: {}): Promise<implicitReturnType>;
    privatePostSmartorders?(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrdersId?(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrdersCancelByIds?(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrders?(params?: {}): Promise<implicitReturnType>;
    privateDeleteSmartordersId?(params?: {}): Promise<implicitReturnType>;
    privateDeleteSmartordersCancelByIds?(params?: {}): Promise<implicitReturnType>;
    privateDeleteSmartorders?(params?: {}): Promise<implicitReturnType>;
    privatePutOrdersId?(params?: {}): Promise<implicitReturnType>;
    privatePutSmartordersId?(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
