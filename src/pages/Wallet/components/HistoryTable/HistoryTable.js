import React from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import WalletTable from "../WalletTable/WalletTable";

export default function HistoryTable({ ...props }) {
  return <WalletTable {...props} header={headerItems} rows={rows} />;
}

const headerItems = [
  { name: "Time" },
  { name: "Coin" },
  { name: "Amount" },
  { name: "Network" },
  { name: "Deposit Address" },
  { name: "Status" },
];

function createData(time, coin, amount, network, address, status) {
  return [
    { children: <div>{time}</div> },
    { children: <div>{coin}</div> },
    { children: <div>{amount}</div> },
    { children: <div>{network}</div> },
    { children: <div>{address}</div> },
    { children: <div>{status}</div> },
  ];
}

const rows = [
  createData(
    "2022-11-23 15:44:00",
    "BTC",
    636213.43,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    true
  ),
  createData(
    "2022-11-23 15:44:00",
    "BTC",
    636213.43,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    false
  ),
  createData(
    "2022-11-23 15:44:00",
    "BTC",
    636213.43,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    true
  ),
  createData(
    "2022-11-23 15:44:00",
    "BTC",
    636213.43,
    "ERC20",
    "0X0ba42afds56f45sf4sdfaf65sfdf455454fsdfsdf",
    true
  ),
];
