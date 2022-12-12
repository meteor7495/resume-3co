import { BarChart, Refresh } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxUi from "components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import SearchUi from "../../../../components/UiKit/SearchUi/SearchUi";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import WalletTable from "../../components/WalletTable/WalletTable";
import useStyles from "./SpotAssets.style";
import {
  getWallets,
  selectWallets,
  setWalletsSearch,
} from "pages/Wallet/store/walletsSlice";
import { getDeposit } from "pages/Wallet/store/depositSlice";
import routes from "configs/routes";
import bigInt from "utils/bigInt";
import { Link } from "react-router-dom";

export default function SpotAssets({ children, ...props }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const wallets = useSelector(selectWallets);
  const { deposit = {} } = useSelector((s) => s.wallet);
  useEffect(() => {
    dispatch(getWallets());
    dispatch(getDeposit());
    dispatch(setWalletsSearch(""));
  }, []);
  function createData({ currency, activeBalance, lockedBalance, _id }) {
    return [
      {
        children: <CoinEl {...currency} />,
        align: "left",
        className: `w-[250px]`,
      },
      { children: <NumberEl value={+activeBalance + +lockedBalance} /> },
      { children: <NumberEl value={activeBalance} /> },
      { children: <NumberEl value={lockedBalance} /> },
      {
        children: <Operation id={_id} />,
        align: "right",
        className: `w-[200px]`,
      },
    ];
  }
  const rows = wallets.length > 0 ? wallets.map(createData) : [];
  return (
    <div className={`flex flex-col gap-[10px] h-full `}>
      {deposit && (
        <TransactionCard
          title={"Spot"}
          btc={deposit.totalSpotWalletsAmountInUSD}
          usd={deposit.totalSpotWalletsAmountInBTC}
          deposit={"../" + routes.wallet.spot.deposit}
          withdraw={"../" + routes.wallet.spot.withdraw}
        />
      )}
      <div className={`flex flex-col ${classes.tableWrapper}`}>
        <BoxUi
          className={`flex p-0 flex-col grow`}
          classes={{
            header: "gap-[38px] flex items-center flex-col lg:flex-row",
            body: "h-full gap-[10px] flex flex-col",
          }}
          header={
            <>
              <div className={`font-bold`}>Assets</div>
              <SearchBox className={`hidden lg:block max-w-[250px]`} />
            </>
          }
        >
          <SearchBox className={`block lg:hidden`} />
          <WalletTable
            className={`h-[700px] lg:h-full`}
            pagination={{ count: 1 }}
            header={headerItems}
            rows={rows}
          />
        </BoxUi>
      </div>
    </div>
  );
}

const headerItems = [
  { name: "Coin", className: "text-start" },
  { name: "Amount" },
  { name: "Available" },
  { name: "Frozen" },
  { name: "Operation", className: "text-end" },
];

const SearchBox = (props) => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((s) => s.wallet.wallets);
  return (
    <SearchUi
      {...props}
      value={searchText}
      onChange={(e) => dispatch(setWalletsSearch(e))}
    />
  );
};

const CoinEl = ({ title, ticker, logo }) => {
  const classes = useStyles();
  return (
    <div className={`flex gap-[7px] items-center`}>
      <div
        className={`flex ${classes.coinEl} w-[25px] h-[25px] items-center justify-center rounded-full border border-solid`}
      >
        <img className="w-full h-full p-[2px]" src={logo} />
      </div>
      <div className={`font-bold`}>{title}</div>
      <li className={`w-1 text-[10px] opacity-50`} />
      <div className={classes.ticker}>{ticker}</div>
    </div>
  );
};

const NumberEl = ({ value }) => {
  const classes = useStyles();
  return <div className={classes.ticker}>{value ? bigInt(value) : 0}</div>;
};

const Operation = ({ id }) => {
  return (
    <div className={`inline-flex items-center gap-[10px] w-fit justify-center`}>
      <OperationBtn to={`../${routes.exchange}?coinId=${id}`}>
        <BarChart className={`text-[15px]`} />
      </OperationBtn>
      <OperationBtn>
        <Refresh className={`text-[15px]`} />
      </OperationBtn>
      <OperationBtn to={`../${routes.wallet.spot.deposit}?coinId=${id}`}>
        Deposit
      </OperationBtn>
      <OperationBtn to={`../${routes.wallet.spot.withdraw}?coinId=${id}`}>
        Withdrow
      </OperationBtn>
    </div>
  );
};

const OperationBtn = ({ to, ...props }) => {
  const btnClass = ` min-w-0 w-fit`;
  return (
    <Link to={to}>
      <ButtonUi
        {...props}
        disableRipple
        style={{ position: "inherit" }}
        className={`p-[2px] bg-[transparent_!important] ${btnClass}`}
      />
    </Link>
  );
};
