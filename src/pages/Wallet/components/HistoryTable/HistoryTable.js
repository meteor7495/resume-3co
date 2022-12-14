import { getHistory } from "pages/Wallet/store/historySlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDate from "../../../../hooks/useDate";
import bigInt from "../../../../utils/bigInt";
import WalletTable from "../WalletTable/WalletTable";
import useStyles from "./styles";

const statusTypes = {
  Succesful: "Succesful",
  Unsuccesful: "Unsuccesful",
  Pending: "Pending",
  Inprogress: "inprogress",
};

export default function HistoryTable({
  type,
  pagination: isPagination,
  ...props
}) {
  const getDate = useDate();
  const classes = useStyles();
  const { itemsList, pagination } = useSelector((s) => s.wallet.history);
  console.log({ itemsList });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getHistory({ query: { action: type && type.toLowerCase(), limit: 10 } })
    );
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
  const newRows = itemsList?.map(
    ({ createdAt, coin, amount, network, toAddress, status, action }) => {
      const className = `text-[14px]`;
      let statusEl = <div>{status}</div>;
      switch (status) {
        case statusTypes.Succesful:
          statusEl = <div className="text-success">Succesful</div>;
          break;
        case statusTypes.Unsuccesful:
          statusEl = <div className="text-error">Unsuccesful</div>;
          break;
        case statusTypes.Inprogress:
          statusEl = <div className="text-warning">Inprogress</div>;
          break;
        default:
          break;
      }
      const rowElement = [
        {
          className,
          children: (
            <div className="w-max m-auto">
              {getDate(createdAt).format("MM/DD - HH:mm:ss")}
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
                <span className="inline-block truncate">{toAddress}</span>
                {toAddress.slice(-5)}
              </span>
            </div>
          ),
        },
        { className, children: <div>{statusEl}</div> },
      ];
      !type &&
        rowElement.splice(5, 0, {
          className,
          children: <div className="opacity-50 font-bold">{action}</div>,
        });
      return rowElement;
    }
  );
  console.log({isPagination})
  return (
    <WalletTable
      {...props}
      pagination={isPagination && pagination}
      header={headerItems}
      rows={newRows}
    />
  );
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
