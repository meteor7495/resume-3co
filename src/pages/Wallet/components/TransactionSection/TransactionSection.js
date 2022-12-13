import { ContentCopy, ContentPaste } from "@mui/icons-material";
import { Button, InputAdornment, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import {
  generateAddress,
  selectCoin,
  setNetwork,
} from "pages/Wallet/store/coinSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { selectCoins, selectCoinsById } from "store/slices/CoinsSlice";
import AutocompleteUi from "../../../../components/UiKit/AutocompleteUi/AutocompleteUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import InputUi from "../../../../components/UiKit/InputUi/InputUi";
import LoadingUi from "../../../../components/UiKit/LoadingUi/LoadingUi";
import QRCodeUi from "../../../../components/UiKit/QRCodeUi/QRCodeUi";
import routes from "../../../../configs/routes";
import { walletType } from "../../../../constants/walletType.enum copy";
import { setModal } from "../../../../store/ModalSlice";
import VerticalStepper from "../VerticalStepper/VerticalStepper";
import useStyles from "./styles";
export default function TransactionSection({ type }) {
  const [steps, setSteps] = useState();
  useEffect(() => {
    let steps = [
      {
        label: "Select Coin/Token",
        children: <SelectCoin type={type} />,
      },
      {
        label: "Select Network",
        children: <SelectNetwork type={type} />,
      },
    ];
    switch (type) {
      case walletType.Deposit:
        steps.push({
          label: "Deposit To",
          children: <DepositTo />,
        });
        break;
      case walletType.Withdraw:
        steps.push(
          {
            label: "Withdrawal Address",
            children: <WithdrawalAddress />,
          },
          {
            label: "Receive Amount",
            children: <ReceiveAmount />,
          }
        );
        break;
      default:
        break;
    }
    setSteps(steps);
  }, [type]);

  return steps ? <VerticalStepper steps={steps} /> : <LoadingUi />;
}

const SelectCoin = ({ type }) => {
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

      selectCoinHandler(coin);
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

const SelectNetwork = ({ type }) => {
  const {
    currency: { _id: currencyId } = {},
    networks,
    network: selectedId,
  } = useSelector((s) => s.wallet.coin);
  const dispatch = useDispatch();
  const networkHandler = (_id) => {
    dispatch(setNetwork(_id));
    type === walletType.Deposit &&
      dispatch(generateAddress({ networkId: _id, currencyId }));
  };
  useEffect(() => {
    if (networks.length !== 0) {
      networkHandler(networks[0]?._id);
    }
  }, [networks]);
  return (
    <div
      className={`flex flex-nowrap flex-col lg:flex-row lg:flex-wrap gap-[10px]`}
    >
      {networks?.map(({ ticker, title, _id }, i) => (
        <NetworkBtn
          key={ticker}
          onClick={() => networkHandler(_id)}
          active={_id === selectedId}
          className="font-bold text-[12px]"
        >
          {ticker}
          <li className={`w-1 text-[10px] opacity-50`} />
          <span className={`text-[10px] font-normal opacity-50`}>{title}</span>
        </NetworkBtn>
      ))}
    </div>
  );
};

const NetworkBtn = ({ className, children, active, ...props }) => {
  const classes = useStyles();

  return (
    <Button
      {...props}
      className={`h-full flex gap-[4px] w-full lg:w-[calc(50%_-_10px)] rounded-[5px] h-[40px] px-[7px] justify-start gap-[10px] h-[45px] normal-case ${className} ${
        active
          ? `font-bold border border-solid ${classes.activeOverview}`
          : `${classes.button} ${classes.overview}`
      }`}
    >
      {children}
    </Button>
  );
};

const DepositTo = () => {
  const classes = useStyles();
  const [tooltip, setTooltip] = useState(false);
  const { address: { address } = {} } = useSelector((s) => s.wallet.coin);

  const copyHandler = () => {
    setTooltip(true);
    document.execCommand(address);
    navigator.clipboard.writeText(address);
  };
  return (
    <div className="flex gap-[10px]">
      <div className="flex grow flex-col gap-[5px] grow">
        <Tooltip
          placement="top"
          color={"success"}
          onClose={() => setTooltip(false)}
          open={tooltip}
          classes={{ tooltip: classes.tooltip, arrow: classes.tooltipColor }}
          title={<span>Copied!</span>}
          leaveDelay={500}
          arrow
        >
          <div
            onClick={copyHandler}
            className={`flex flex-1 items-center text-[7px] lg:text-[12px] px-[7px] w-full rounded-[5px] ${classes.button}`}
          >
            {address}
          </div>
        </Tooltip>
        <ButtonUi
          onClick={copyHandler}
          className={`flex flex-1 gap-[4px] items-center leading-none `}
        >
          Copy Address <ContentCopy className="text-[12px]" />
        </ButtonUi>
      </div>
      {address ? (
        <QRCodeUi value={address} style={{ width: 80, height: 80 }} size={64} />
      ) : (
        <div className="w-[80px] h-[80px]" />
      )}
    </div>
  );
};

const WithdrawalAddress = () => {
  const [value, setValue] = useState("");
  const pasteHandler = async () => {
    const text = await navigator.clipboard.readText();
    setValue(text);
  };
  return (
    <div className="flex gap-[10px]">
      <InputUi
        InputProps={{ classes: { input: "text-[14px]" } }}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
      <ButtonUi
        onClick={pasteHandler}
        className="flex gap-[4px] text-[12px] items-center font-bold"
      >
        Paste <ContentPaste className="text-[10px]" />
      </ButtonUi>
    </div>
  );
};

const ReceiveAmount = () => {
  const { isTfaActive } = useSelector((s) => s?.user?.user);
  const dispatch = useDispatch();
  console.log(isTfaActive);
  return (
    <div className="flex flex-col gap-[10px]">
      <InputUi
        InputProps={{
          type: "number",
          classes: { input: "appearance-none" },
          className: "p-0",
          endAdornment: (
            <InputAdornment position="end">
              <Button className="font-bold">ALL</Button>
            </InputAdornment>
          ),
        }}
      />
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex justify-between gap-[10px] text-[9px] w-full lg:w-[35%]">
          <div>Withdrawal Fee:</div>
          <div>0.08686 BTC</div>
        </div>
        <div className="flex justify-between gap-[10px] text-[9px] w-full lg:w-[35%] opacity-50">
          <div>Deducation:</div>
          <div>0.00051 BTC</div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        {!isTfaActive && (
          <div className="text-error text-[11px]">
            *requires a active 2FA. activate in{" "}
            <Link className="text-primary" to={`../../${routes.profile}`}>
              Account Settings
            </Link>
          </div>
        )}
        <ButtonUi
          variant="contained"
          onClick={() => dispatch(setModal({ visible: true, id: "TFAModale" }))}
          disabled={!isTfaActive}
        >
          Withdraw
        </ButtonUi>
      </div>
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
