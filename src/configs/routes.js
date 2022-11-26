const routes = {
  //public
  //public-end
  //private
  exchange: "/exchange",
  //wallet
  walletPage: "/wallet/*",
  wallet: {
    index: "/wallet",
    overview: "overview",
    assets: "spot/assets",
    deposit: "spot/deposit",
    withdraw: "spot/withdraw",
    financial: "financial",
    historyAllAssets: "history/all-assets",
    historyDeposit: "history/deposit",
    historyWithdraw: "history/withdraw",
  },
  //wallet-end
  //private-end
};

export default routes;
