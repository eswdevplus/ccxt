import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    publicSpotGetCommonSymbols?(params?: {}): Promise<implicitReturnType>;
    publicSpotGetCommonCurrencys?(params?: {}): Promise<implicitReturnType>;
    publicSpotGetCommonTimestamp?(params?: {}): Promise<implicitReturnType>;
    publicSpotGetQKline?(params?: {}): Promise<implicitReturnType>;
    publicSpotGetQTickers?(params?: {}): Promise<implicitReturnType>;
    publicSpotGetQTickerPrice?(params?: {}): Promise<implicitReturnType>;
    publicSpotGetQDepth?(params?: {}): Promise<implicitReturnType>;
    publicSpotGetQDeals?(params?: {}): Promise<implicitReturnType>;
    publicSwapGetMarketCandle?(params?: {}): Promise<implicitReturnType>;
    publicSwapGetMarketDeals?(params?: {}): Promise<implicitReturnType>;
    publicSwapGetMarketDepth?(params?: {}): Promise<implicitReturnType>;
    publicSwapGetMarketFundingRate?(params?: {}): Promise<implicitReturnType>;
    publicSwapGetMarketIndex?(params?: {}): Promise<implicitReturnType>;
    publicSwapGetMarketRiskLimit?(params?: {}): Promise<implicitReturnType>;
    publicSwapGetMarketSymbols?(params?: {}): Promise<implicitReturnType>;
    publicSwapGetMarketTickerPrice?(params?: {}): Promise<implicitReturnType>;
    publicSwapGetMarketTickers?(params?: {}): Promise<implicitReturnType>;
    publicSwapGetServerPing?(params?: {}): Promise<implicitReturnType>;
    privateSpotGetUApiInfo?(params?: {}): Promise<implicitReturnType>;
    privateSpotGetUAccountBalance?(params?: {}): Promise<implicitReturnType>;
    privateSpotGetUWalletAddress?(params?: {}): Promise<implicitReturnType>;
    privateSpotGetUWalletDepositRecord?(params?: {}): Promise<implicitReturnType>;
    privateSpotGetUWalletWithdrawRecord?(params?: {}): Promise<implicitReturnType>;
    privateSpotGetUOrderOpenOrders?(params?: {}): Promise<implicitReturnType>;
    privateSpotGetUOrderOpenOrderDetail?(params?: {}): Promise<implicitReturnType>;
    privateSpotGetUOrderHistoryOrders?(params?: {}): Promise<implicitReturnType>;
    privateSpotPostUAccountTransfer?(params?: {}): Promise<implicitReturnType>;
    privateSpotPostUWalletWithdraw?(params?: {}): Promise<implicitReturnType>;
    privateSpotPostUOrderCreate?(params?: {}): Promise<implicitReturnType>;
    privateSpotPostUOrderCancel?(params?: {}): Promise<implicitReturnType>;
    privateSpotPostUOrderBatchCreate?(params?: {}): Promise<implicitReturnType>;
    privateSpotPostUOrderBatchCancel?(params?: {}): Promise<implicitReturnType>;
    privateSwapGetAccountBalance?(params?: {}): Promise<implicitReturnType>;
    privateSwapGetAccountBalanceRecord?(params?: {}): Promise<implicitReturnType>;
    privateSwapGetAccountOrder?(params?: {}): Promise<implicitReturnType>;
    privateSwapGetAccountOrderForced?(params?: {}): Promise<implicitReturnType>;
    privateSwapGetAccountPosition?(params?: {}): Promise<implicitReturnType>;
    privateSwapGetEntrustFinished?(params?: {}): Promise<implicitReturnType>;
    privateSwapGetEntrustUnFinish?(params?: {}): Promise<implicitReturnType>;
    privateSwapGetOrderFinished?(params?: {}): Promise<implicitReturnType>;
    privateSwapGetOrderFinishedInfo?(params?: {}): Promise<implicitReturnType>;
    privateSwapGetOrderUnFinish?(params?: {}): Promise<implicitReturnType>;
    privateSwapGetPositionInfo?(params?: {}): Promise<implicitReturnType>;
    privateSwapPostAccountSetLeverage?(params?: {}): Promise<implicitReturnType>;
    privateSwapPostEntrustAdd?(params?: {}): Promise<implicitReturnType>;
    privateSwapPostEntrustCancel?(params?: {}): Promise<implicitReturnType>;
    privateSwapPostOrderBatchCancel?(params?: {}): Promise<implicitReturnType>;
    privateSwapPostOrderBatchOpen?(params?: {}): Promise<implicitReturnType>;
    privateSwapPostOrderCancel?(params?: {}): Promise<implicitReturnType>;
    privateSwapPostOrderClose?(params?: {}): Promise<implicitReturnType>;
    privateSwapPostOrderCloseAll?(params?: {}): Promise<implicitReturnType>;
    privateSwapPostOrderOpen?(params?: {}): Promise<implicitReturnType>;
    privateSwapPostPositionSetSpSl?(params?: {}): Promise<implicitReturnType>;
    privateSwapPostPositionUpdate?(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
