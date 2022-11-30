import { BarChart, Refresh, Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import React from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import InputUi from "../../../../components/UiKit/InputUi/InputUi";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import WalletTable from "../../components/WalletTable/WalletTable";
import useStyles from "./SpotAssets.style";

export default function SpotAssets({ children, ...props }) {
  const classes = useStyles();
  return (
    <div className={`flex flex-col gap-[10px] h-full `}>
      <TransactionCard title={"Spot"} btc={0.000345345} usd={12.23} />
      <div className={`flex flex-col ${classes.tableWrapper}`}>
        <BoxUi className={`flex p-0 flex-col grow`}>
          <div
            className={`py-[10px] px-[20px] flex items-center gap-[38px] border-0 border-b border-solid ${classes.tabelHeader}`}
          >
            <div className={`font-bold`}>Assets</div>
            <InputUi
              className={`max-w-[250px]`}
              placeholder="Search..."
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    // className="z-[1]"
                    position="end"
                  >
                    <Search className="opacity-50" />
                  </InputAdornment>
                ),
                classes: { root: "p-[0] pr-[8px]" },
              }}
            />
          </div>
          <div className={`p-[15px] h-full`}>
            <WalletTable header={headerItems} rows={rows} />
          </div>
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

const CoinEl = ({ name, tiker, icon }) => {
  const classes = useStyles();
  return (
    <div className={`flex gap-[7px] items-center`}>
      <div
        className={`flex ${classes.coinEl} w-[25px] h-[25px] items-center justify-center rounded-full border border-solid`}
      >
        {icon}
      </div>
      <div className={`font-bold`}>{name}</div>
      <li className={`w-1`} />
      <div className={classes.tiker}>{tiker}</div>
    </div>
  );
};

const NumberEl = ({ value }) => {
  const classes = useStyles();
  return <div className={classes.tiker}>{value}</div>;
};

function createData(coin, amount, available, frozen, price) {
  return {
    coin: <CoinEl {...coin} />,
    amount: <NumberEl value={amount} />,
    available: <NumberEl value={available} />,
    frozen: <NumberEl value={frozen} />,
    operation: <Operation />,
  };
}

const Operation = () => {
  return (
    <div className={`inline-flex items-center gap-[10px] w-fit justify-center`}>
      <ButtonUi className={`p-[5px] min-w-0 w-fit`} >
        <BarChart className={`text-[15px]`} />
      </ButtonUi>
      <ButtonUi className={`p-[2px] min-w-0 w-fit`}>
      <Refresh className={`text-[15px]`} />
      </ButtonUi>
      <ButtonUi className={`p-[2px] min-w-0 w-fit`}>Deposit</ButtonUi>
      <ButtonUi className={`p-[2px] min-w-0 w-fit`}>Withdrow</ButtonUi>
    </div>
  );
};
const BTC = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <path
      d="M12.445 6.24723C12.6459 4.90392 11.6232 4.18184 10.2247 3.70014L10.6784 1.88051L9.57074 1.60451L9.12911 3.37623C8.8379 3.3036 8.53886 3.23517 8.24164 3.16733L8.68648 1.38391L7.57951 1.10791L7.12559 2.92695C6.88461 2.87208 6.64793 2.81786 6.41831 2.76073L6.41959 2.755L4.8921 2.37356L4.59745 3.55662C4.59745 3.55662 5.41924 3.74499 5.40192 3.75659C5.85046 3.86854 5.93158 4.16546 5.91811 4.40081L5.40133 6.4738C5.43222 6.48164 5.47228 6.49299 5.51649 6.51075C5.47953 6.50158 5.44021 6.49156 5.39941 6.48179L4.67506 9.38575C4.62024 9.52203 4.4811 9.72654 4.1675 9.64888C4.1786 9.66496 3.36244 9.44797 3.36244 9.44797L2.8125 10.7159L4.25395 11.0752C4.5221 11.1425 4.78489 11.2128 5.04367 11.279L4.58531 13.1195L5.69169 13.3955L6.14561 11.5745C6.44786 11.6566 6.74119 11.7323 7.02834 11.8036L6.57595 13.616L7.68366 13.892L8.14197 12.055C10.0308 12.4124 11.451 12.2683 12.0488 10.5599C12.5305 9.1844 12.0248 8.39102 11.0311 7.87365C11.7549 7.70674 12.2996 7.23056 12.445 6.24723ZM9.91424 9.79601C9.57193 11.1715 7.25604 10.4279 6.5052 10.2415L7.11345 7.80315C7.86424 7.99059 10.272 8.36152 9.91424 9.79601ZM10.2568 6.2273C9.94453 7.47844 8.017 6.84281 7.39172 6.68694L7.94319 4.47551C8.56846 4.63137 10.582 4.92228 10.2568 6.2273Z"
      fill="#F7931A"
    />
  </svg>
);
const rows = [
  createData(
    { name: "Bitcoin", tiker: "BTC", icon: BTC },
    0.00000024685,
    0.00000031,
    0.0000002221
  ),
  createData(
    { name: "Bitcoin", tiker: "BTC", icon: BTC },
    0.00000024685,
    0.00000031,
    0.0000002221
  ),
  createData(
    { name: "Bitcoin", tiker: "BTC", icon: BTC },
    0.00000024685,
    0.00000031,
    0.0000002221
  ),
  createData(
    { name: "Bitcoin", tiker: "BTC", icon: BTC },
    0.00000024685,
    0.00000031,
    0.0000002221
  ),
  createData(
    { name: "Bitcoin", tiker: "BTC", icon: BTC },
    0.00000024685,
    0.00000031,
    0.0000002221
  ),
];
