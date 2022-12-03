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
    spot: {
      assets: "spot/assets",
      deposit: "spot/deposit",
      withdraw: "spot/withdraw",
    },
    financial: "financial",
    history: {
      allAssets: "history/all-assets",
      deposit: "history/deposit",
      withdraw: "history/withdraw",
    },
  },
  //wallet-end
  //private-end
};

export default routes;
