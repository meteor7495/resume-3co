import { Box, Button, InputAdornment } from "@mui/material";
import AutocompleteUi from "components/UiKit/AutocompleteUi";
import ButtonUi from "components/UiKit/ButtonUi";
import InputUi from "components/UiKit/InputUi";
import routes from "configs/routes";
import { walletType } from "constants/walletType.enum copy";
import { selectCoin } from "pages/Wallet/store/coinSlice";
import { selectWallets } from "pages/Wallet/store/walletsSlice";
import { setWithdrawAmount } from "pages/Wallet/store/withdrawSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { setModal } from "store/ModalSlice";
import { selectCoins } from "store/slices/CoinsSlice";
import useStyles from "../../styles"

export default function SelectCoin  ({ type }) {
  const coins = useSelector(selectCoins);
  // const { canSpotDeposit } = selecteCoin;
  const { currency } = useSelector((s) => s.wallet.coin);
  const [searchParams] = useSearchParams();
  const coinId = searchParams.get("coinId");
  const dispatch = useDispatch();
  const selectCoinHandler = (coin) => {
    dispatch(selectCoin({ selectId: coin._id }));
  };
  useEffect(() => {
    if (coins) {
      let coin;
      let BTC = coins.filter(({ ticker }) => ticker === "USDT")[0];
      if (coinId) {
        coin = coins.filter(({ _id }) => _id === coinId)[0];
        coin = coin ? coin : BTC;
      } else {
        coin = BTC;
      }

      coin && selectCoinHandler(coin);
    }
  }, [coinId, coins]);
  return (
    <div>
      {currency?._id && (
        <AutocompleteUi
          className="w-full"
          isOptionEqualToValue={(op, val) => op._id === val._id}
          getOptionLabel={(option) => {
            return option?.title ? option?.title : option;
          }}
          renderValue={<CoinEl {...currency} />}
          filterOptions={(op, { inputValue }) => {
            return inputValue !== ""
              ? op.filter(
                  ({ title, ticker }) =>
                    ticker?.toLowerCase().indexOf(inputValue?.toLowerCase()) !==
                      -1 ||
                    title?.toLowerCase().indexOf(inputValue?.toLowerCase()) !==
                      -1
                )
              : op;
          }}
          renderOption={(props, option) => (
            <Box component="li" {...props} key={option.value}>
              <CoinEl {...option} />
            </Box>
          )}
          onChange={(e, v) => {
            selectCoinHandler(v);
          }}
          value={currency}
          options={coins.filter(({ canSpotDeposit, canSpotWithdraw }) =>
            type === walletType.Deposit ? canSpotDeposit : canSpotWithdraw
          )}
        />
      )}
    </div>
  );
};

const CoinEl = ({ title, ticker, logo }) => {
  const classes = useStyles();
  return (
    <div className={`flex w-full gap-[7px] items-center`}>
      <div
        className={`flex ${classes.coinEl} w-[25px] h-[25px] items-center justify-center rounded-full border border-solid`}
      >
        <img className="w-full h-full p-[2px]" src={logo} />
      </div>
      <div className={`font-bold`}>{ticker}</div>
      <div className={`text-[10px] ${classes.ticker}`}>{title}</div>
    </div>
  );
};
