import { getHistory } from "pages/Wallet/store/historySlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useDate from "../../../../hooks/useDate";
import bigInt from "../../../../utils/bigInt";
import WalletTable from "../WalletTable/WalletTable";
import useStyles from "./styles";

const statusTypes = {
  Succesful: "Succesful",
  Unsuccesful: "Unsuccesful",
  Pending: "Pending",
};

export default function HistoryTable({ type, ...props }) {
  const getDate = useDate();
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getHistory({}));
  }, []);
  const headerItems = [
    { name: "Time" },
    { name: "Coin" },
    { name: "Amount" },
    { name: "Network" },
    { name: `${type ? type + " " : ""}Address` },
    { name: "Status" },
  ];
  !type && headerItems.splice(5, 0, { name: "Deposit/Withdraw" });
  const newRows = rows.map(
    ({ time, coin, amount, network, address, status, type: rowType }) => {
      const className = `text-[14px]`;
      let statusEl = <div>{status}</div>;
      switch (status) {
        case statusTypes.Succesful:
          statusEl = <div className="text-success">Succesful</div>;
          break;
        case statusTypes.Unsuccesful:
          statusEl = <div className="text-error">Unsuccesful</div>;
          break;
        case statusTypes.Pending:
          statusEl = <div className="text-warning">Pending</div>;
          break;
        default:
          break;
      }
      const rowElement = [
        {
          className,
          children: (
            <div className="w-max m-auto">
              {getDate(time).format("MM/DD - HH:mm:ss")}
            </div>
          ),
        },
        { className: `${className} ${classes.text}`, children: coin },
        {
          className: `${className} ${classes.text}`,
          children: (
            <div className="w-max m-auto">
              {bigInt(amount)} {coin}
            </div>
          ),
        },
        { className, children: <div>{network}</div> },
        {
          className,
          children: (
            <div className="w-[85px] m-auto">
              <span className="inline-block flex items-center text-[14px] font-normal">
                <span className="inline-block truncate">{address}</span>
                {address.slice(-5)}
              </span>
            </div>
          ),
        },
        { className, children: <div>{statusEl}</div> },
      ];
      !type &&
        rowElement.splice(5, 0, {
          className,
          children: <div className="opacity-50 font-bold">{rowType}</div>,
        });
      return rowElement;
    }
  );
  return <WalletTable {...props} header={headerItems} rows={newRows} />;
}

const CreateData = (time, coin, amount, network, address, status, type) => ({
  time,
  coin,
  amount,
  network,
  address,
  status,
  type,
});

const rows = [
  CreateData(
    "2022-11-23 15:44:00",
    "BTC",
    0.00000055,
    "BTC",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Succesful",
    "Deposit"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "ETH",
    0.2546,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Unsuccesful",
    "Withdraw"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "USDT",
    925.582,
    "CSC",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Succesful",
    "Deposit"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "BTC",
    0.00000258,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Pending",
    "Withdraw"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "BTC",
    0.00000055,
    "BTC",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Succesful",
    "Deposit"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "ETH",
    0.2546,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Unsuccesful",
    "Withdraw"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "USDT",
    925.582,
    "CSC",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Succesful",
    "Deposit"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "BTC",
    0.00000258,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Pending",
    "Withdraw"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "USDT",
    925.582,
    "CSC",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Succesful",
    "Deposit"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "BTC",
    0.00000258,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Pending",
    "Withdraw"
  ),
];
