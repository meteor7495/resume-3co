import React from "react";
import useDate from "../../../../hooks/useDate";
import bigInt from "../../../../utils/bigInt";
import WalletTable from "../WalletTable/WalletTable";
import useStyles from "./styles";

const statusTypes = {
  Succesful: "Succesful",
  Unsuccesful: "Unsuccesful",
  Pending: "Pending"
}

export default function HistoryTable({ ...props }) {
  const getDate = useDate();
  const classes = useStyles();
  const newRows = rows.map(({ time, coin, amount, network, address, status }) => {
    const className = `text-[14px]`;
    let statusEl = <div>{status}</div>;
    switch (status) {
      case statusTypes.Succesful:
        statusEl = <div className="text-success" >Succesful</div>
        break;
      case statusTypes.Unsuccesful:
        statusEl = <div className="text-error" >Unsuccesful</div>
        break;
      case statusTypes.Pending:
        statusEl = <div className="text-warning" >Pending</div>
        break;
      default:
        break;
    }
    return [
      {
        className,
        children: getDate(time).format("MM/DD - HH:mm:ss"),
      },
      { className: `${className} ${classes.text}`, children: coin },
      {
        className: `${className} ${classes.text}`,
        children: (
          <div>
            {bigInt(amount)} {coin}
          </div>
        ),
      },
      { className, children: <div>{network}</div> },
      {
        className, children: <div className="w-[90px] m-auto" ><span className=" whitespace-nowrap inline-block flex items-center  text-[14px] font-normal" ><span className="inline-block w-full truncate" >{address}</span>{address.slice(-5)}</span></div >
      },
      { className, children: <div>{statusEl}</div> },
    ];
  });
  return <WalletTable {...props} header={headerItems} rows={newRows} />;
}

const CreateData = (time, coin, amount, network, address, status) => ({
  time,
  coin,
  amount,
  network,
  address,
  status,
});

const headerItems = [
  { name: "Time" },
  { name: "Coin" },
  { name: "Amount" },
  { name: "Network" },
  { name: "Deposit Address" },
  { name: "Status" },
];

const rows = [
  CreateData(
    "2022-11-23 15:44:00",
    "BTC",
    0.00000055,
    "BTC",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Succesful"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "ETH",
    0.2546,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Unsuccesful"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "USDT",
    925.582,
    "CSC",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Succesful"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "BTC",
    0.00000258,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Pending"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "BTC",
    0.00000055,
    "BTC",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Succesful"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "ETH",
    0.2546,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Unsuccesful"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "USDT",
    925.582,
    "CSC",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Succesful"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "BTC",
    0.00000258,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Pending"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "USDT",
    925.582,
    "CSC",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Succesful"
  ),
  CreateData(
    "2022-11-23 15:44:00",
    "BTC",
    0.00000258,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    "Pending"
  ),
];
