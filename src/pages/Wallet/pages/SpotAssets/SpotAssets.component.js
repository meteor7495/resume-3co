import { BarChart, Refresh, Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import React from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import InputUi from "../../../../components/UiKit/InputUi/InputUi";
import SearchUi from "../../../../components/UiKit/SearchUi/SearchUi";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import WalletTable from "../../components/WalletTable/WalletTable";
import useStyles from "./SpotAssets.style";

export default function SpotAssets({ children, ...props }) {
  const classes = useStyles();
  return (
    <div className={`flex flex-col gap-[10px] h-full `}>
      <TransactionCard title={"Spot"} btc={0.000345345} usd={12.23} />
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
          <WalletTable className={`h-[700px] lg:h-full`} header={headerItems} rows={rows} />
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
  return <SearchUi {...props} />;
};

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
  return <div className={classes.tiker}>{value.toString()}</div>;
};

function createData(coin, amount, available, frozen, price) {
  return [
    { children: <CoinEl {...coin} />, align: "left", className: `w-[250px]` },
    { children: <NumberEl value={amount} /> },
    { children: <NumberEl value={available} /> },
    { children: <NumberEl value={frozen} /> },
    { children: <Operation />, align: "right", className: `w-[200px]` },
  ];
}

const Operation = () => {
  return (
    <div className={`inline-flex items-center gap-[10px] w-fit justify-center`}>
      <ButtonUi className={`p-[5px] min-w-0 w-fit`}>
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
const BNB = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.26408 7.17002L8.50084 3.93326L11.7404 7.17279L13.6236 5.28954L8.50084 0.166748L3.38082 5.28676L5.26408 7.17002ZM0.166687 8.50066L2.04945 6.6179L3.93221 8.50066L2.04945 10.3834L0.166687 8.50066ZM8.50082 13.0694L5.26406 9.83265L3.37803 11.7131L3.3808 11.7159L8.50082 16.8359L13.6236 11.7131L11.7403 9.82988L8.50082 13.0694ZM13.0678 8.50199L14.9506 6.61922L16.8334 8.50198L14.9506 10.3847L13.0678 8.50199ZM8.50084 6.59034L10.4118 8.50133L8.50084 10.4151L6.58985 8.50411V8.49856L6.92545 8.16296L7.08909 8.00209L8.50084 6.59034Z"
      fill="#F3BA2F"
    />
  </svg>
);
const ETH = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="17"
    viewBox="0 0 11 17"
    fill="none"
  >
    <path
      d="M5.60439 0.166748V6.30169C5.60439 6.32774 5.57835 6.35378 5.55231 6.35378C5.37001 6.4334 5.21375 6.51227 5.03145 6.59114C4.79707 6.69606 4.53664 6.80172 4.30225 6.93342L3.44284 7.32778L2.73968 7.64402L1.88027 8.03912C1.64588 8.14478 1.4115 8.2497 1.15107 8.3814C0.968771 8.46027 0.760428 8.56593 0.578128 8.64481C0.552086 8.64481 0.552086 8.67085 0.526043 8.64481H0.5C0.578128 8.5131 0.656257 8.40744 0.734385 8.27649C1.15107 7.56514 1.5938 6.85455 2.01048 6.14321C2.45321 5.38052 2.92198 4.61635 3.36471 3.85292C3.7814 3.14233 4.19808 2.43173 4.61477 1.74718C4.92728 1.21962 5.2398 0.720344 5.52627 0.192791C5.57835 0.192791 5.57835 0.166748 5.60439 0.166748C5.60439 0.166748 5.57835 0.166748 5.60439 0.166748Z"
      fill="#8C8C8C"
    />
    <path
      d="M10.6567 8.64495C10.2661 8.90835 9.84939 9.14497 9.45875 9.38159C8.18265 10.1458 6.9326 10.8831 5.6565 11.6466C5.63045 11.6466 5.63045 11.6726 5.60441 11.6726C5.57837 11.6726 5.57837 11.6466 5.57837 11.6466V6.35392C5.57837 6.32788 5.60441 6.32788 5.63045 6.32788C5.73463 6.37997 5.8388 6.43354 5.96901 6.48563C6.28153 6.64412 6.62008 6.77582 6.9326 6.93356C7.21907 7.06527 7.4795 7.19697 7.76597 7.30188C8.05244 7.43359 8.31287 7.56529 8.59934 7.69699C8.83372 7.80265 9.09415 7.90756 9.32854 8.03927C9.56292 8.14493 9.82335 8.24984 10.0577 8.38154C10.24 8.46042 10.4223 8.56608 10.6307 8.64495C10.6307 8.61891 10.6307 8.64495 10.6567 8.64495Z"
      fill="#141414"
    />
    <path
      d="M5.60441 16.8333C5.60441 16.8333 5.57837 16.8333 5.60441 16.8333C5.57837 16.8333 5.57837 16.8333 5.55233 16.8065C5.03147 16.0699 4.53666 15.3586 4.0158 14.6212L2.45323 12.4098C1.95842 11.6992 1.43756 10.9886 0.942747 10.2504L0.552105 9.69759C0.552105 9.67155 0.526062 9.67155 0.526062 9.64551C0.552105 9.64551 0.552105 9.67155 0.578148 9.67155C1.2813 10.0927 2.0105 10.5139 2.71366 10.935C3.52099 11.4358 4.35436 11.9097 5.16169 12.4098C5.2919 12.4886 5.44816 12.5675 5.57837 12.6464C5.60441 12.6464 5.60441 12.6732 5.60441 12.6992V16.8333Z"
      fill="#8C8C8C"
    />
    <path
      d="M0.5 8.36915C0.5 8.34311 0.5 8.34311 0.5 8.36915C0.760428 8.23745 1.02086 8.13254 1.28128 8.00083L2.29696 7.52685C2.55738 7.39515 2.81781 7.29024 3.07824 7.15853C3.44284 6.974 3.83348 6.81626 4.19808 6.63172C4.45851 6.52607 4.71894 6.39436 4.97937 6.28945C5.16167 6.21057 5.34397 6.1317 5.52627 6.02604C5.55231 6.02604 5.55231 6 5.57835 6V11.3708C5.55231 11.3976 5.55231 11.3708 5.52627 11.3708C5.44814 11.3187 5.37001 11.2919 5.31792 11.2391L0.552086 8.39594C0.526043 8.36915 0.5 8.36915 0.5 8.36915ZM10.5786 9.3439C10.5786 9.36994 10.5786 9.36994 10.5525 9.39598C9.04205 11.5553 7.53156 13.6878 6.02108 15.8472C5.86482 16.0838 5.70857 16.2944 5.55231 16.5317V12.3448C5.89087 12.1342 6.22942 11.9236 6.56798 11.7398L10.5525 9.36994C10.5525 9.3439 10.5786 9.3439 10.5786 9.3439Z"
      fill="#3C3C3B"
    />
    <path
      d="M5.60437 6.32779V0.194336L10.6046 8.56673C10.6306 8.59278 10.6567 8.61882 10.6567 8.64561C10.5525 8.59352 10.4483 8.53995 10.3181 8.48786C10.1879 8.43503 10.0577 8.35616 9.92748 8.30333C9.84935 8.27729 9.77122 8.22446 9.66705 8.19767C9.53684 8.14558 9.38058 8.06597 9.25037 8.01388C9.17224 7.9871 9.09411 7.93501 9.01598 7.90822L8.46908 7.6716C8.36491 7.61877 8.28678 7.59273 8.18261 7.5399C8.0524 7.48707 7.92218 7.4082 7.79197 7.35537C7.71384 7.32933 7.63571 7.2765 7.55758 7.25045L7.01068 7.01309C6.90651 6.96101 6.82838 6.93422 6.72421 6.88139C6.594 6.82931 6.46378 6.74969 6.33357 6.69686C6.25544 6.64477 6.15127 6.61799 6.07314 6.5659L5.60437 6.32854V6.32779Z"
      fill="#343434"
    />
  </svg>
);
const SOL = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
  >
    <path
      d="M2.92524 10.8056C3.03539 10.7003 3.18472 10.6412 3.34041 10.6412H17.7058C17.9674 10.6412 18.0984 10.944 17.9133 11.121L15.0748 13.8355C14.9646 13.9408 14.8153 14 14.6596 14H0.294254C0.0325834 14 -0.0984248 13.6971 0.0866697 13.5201L2.92524 10.8056Z"
      fill="url(#paint0_linear_961_134)"
    />
    <path
      d="M2.92524 0.664501C3.03538 0.559164 3.18471 0.499995 3.34041 0.5H17.7058C17.9674 0.5 18.0984 0.802856 17.9133 0.979902L15.0748 3.69438C14.9646 3.79969 14.8153 3.85885 14.6596 3.85885H0.294254C0.0325834 3.85885 -0.0984248 3.55599 0.0866697 3.37898L2.92524 0.664501Z"
      fill="url(#paint1_linear_961_134)"
    />
    <path
      d="M15.0748 5.70276C14.9646 5.59744 14.8153 5.53829 14.6596 5.53829H0.294254C0.0325834 5.53829 -0.0984248 5.84115 0.0866697 6.01816L2.92524 8.73264C3.03538 8.83797 3.18471 8.89714 3.34041 8.89714H17.7058C17.9674 8.89714 18.0984 8.59428 17.9133 8.41724L15.0748 5.70276Z"
      fill="url(#paint2_linear_961_134)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_961_134"
        x1="12.1691"
        y1="-3.2031"
        x2="2.89575"
        y2="15.3561"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00FFA3" />
        <stop offset="1" stop-color="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_961_134"
        x1="12.1691"
        y1="-3.2031"
        x2="2.89575"
        y2="15.3561"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00FFA3" />
        <stop offset="1" stop-color="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_961_134"
        x1="12.1691"
        y1="-3.2031"
        x2="2.89575"
        y2="15.3561"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00FFA3" />
        <stop offset="1" stop-color="#DC1FFF" />
      </linearGradient>
    </defs>
  </svg>
);
const rows = [
  createData(
    { name: "Bitcoin", tiker: "BTC", icon: BTC },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Binance", tiker: "BNB", icon: BNB },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Ethereum", tiker: "ETH", icon: ETH },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Solana", tiker: "SOL", icon: SOL },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Bitcoin", tiker: "BTC", icon: BTC },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Binance", tiker: "BNB", icon: BNB },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Ethereum", tiker: "ETH", icon: ETH },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Solana", tiker: "SOL", icon: SOL },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),

  createData(
    { name: "Bitcoin", tiker: "BTC", icon: BTC },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Binance", tiker: "BNB", icon: BNB },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Ethereum", tiker: "ETH", icon: ETH },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Solana", tiker: "SOL", icon: SOL },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),

  createData(
    { name: "Bitcoin", tiker: "BTC", icon: BTC },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Binance", tiker: "BNB", icon: BNB },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Ethereum", tiker: "ETH", icon: ETH },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
  createData(
    { name: "Solana", tiker: "SOL", icon: SOL },
    "0.00000024685",
    "0.00000031",
    "0.0000002221"
  ),
];
