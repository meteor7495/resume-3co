import CopyButton from "components/CopyButton/CopyButton";
import { getHistory } from "pages/Wallet/store/historySlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDate from "../../../../hooks/useDate";
import bigInt from "../../../../utils/bigInt";
import WalletTable from "../WalletTable/WalletTable";
import useStyles from "./styles";

const statusTypes = {
  Succesful: "done",
  Unsuccesful: "failed",
  Pending: "pending",
  Inprogress: "inprogress",
};

export default function HistoryTable({
  type,
  paginator: isPaginator,
  querys,
  ...props
}) {
  const getDate = useDate();
  const classes = useStyles();
  const { itemsList, paginator } = useSelector((s) => s.wallet.history);
  const dispatch = useDispatch();
  const historyHandler = (args) => {
    dispatch(
      getHistory({
        query: { action: type && type.toLowerCase(), limit: 20, ...args },
      })
    );
  };
  useEffect(() => {
    historyHandler(querys);
    //eslint-disable-next-line
  }, [querys, type]);

  const pageHandler = (e, page) => {
    historyHandler({ page, ...querys });
  };

  const headerItems = [
    { name: "Transaction Id" },
    { name: "Time" },
    { name: "Coin" },
    { name: "Amount" },
    { name: "Network" },
    { name: `${type ? type + " " : ""}Address` },
    { name: "Status" },
  ];
  !type && headerItems.splice(5, 0, { name: "Deposit/Withdraw" });
  const newRows = itemsList?.map(
    ({
      createdAt,
      currency,
      amount,
      txId,
      network,
      toAddress,
      status,
      action,
    }) => {
      const className = `text-[14px]`;
      let statusEl = <div>{status}</div>;
      switch (status) {
        // {
        //   PENDING: 'pending',
        //   INPROGRESS: 'inprogress',
        //   FAILED: 'failed',
        //   DONE: 'done',
        // }
        case statusTypes.Succesful:
          statusEl = <div className="text-success">DONE</div>;
          break;
        case statusTypes.Unsuccesful:
          statusEl = <div className="text-error">FAILED</div>;
          break;
        case statusTypes.Inprogress:
        case statusTypes.Pending:
          statusEl = <div className="text-warning">INPROGRESS</div>;
          break;
        default:
          break;
      }
      const rowElement = [
        {
          className,
          children: txId && (
            <CopyButton className="w-[85px] m-auto cursor-pointer" value={txId}>
              <span className="inline-block flex items-center text-[14px] font-normal">
                <span className=" flex truncate">{txId}</span>
                ...{txId.slice(-5)}
              </span>
            </CopyButton>
          ),
        },
        // { className, children: <div>{txId}</div> },
        {
          className,
          children: (
            <div className="w-max m-auto">
              {getDate(createdAt).format("MM/DD - HH:mm:ss")}
            </div>
          ),
        },
        {
          className: `${className} ${classes.text}`,
          children: currency?.ticker,
        },
        {
          className: `${className} ${classes.text}`,
          children: (
            <div className="w-max m-auto">
              {bigInt(amount)} {currency?.ticker}
            </div>
          ),
        },
        { className, children: <div>{network?.ticker}</div> },
        {
          className,
          children: (
            <CopyButton
              className="w-[85px] m-auto cursor-pointer"
              value={toAddress}
            >
              <span className="inline-block flex items-center text-[14px] font-normal">
                <span className=" flex truncate">{toAddress}</span>
                ...{toAddress.slice(-5)}
              </span>
            </CopyButton>
          ),
        },
        { className, children: <div>{statusEl}</div> },
      ];
      !type &&
        rowElement.splice(5, 0, {
          className,
          children: <div className={classes.text}>{action}</div>,
        });
      return rowElement;
    }
  );
  return (
    <WalletTable
      {...props}
      paginator={isPaginator && paginator}
      header={headerItems}
      rows={newRows}
      pageHandler={pageHandler}
    />
  );
}
