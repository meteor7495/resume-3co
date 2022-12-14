import { Button } from "@mui/material";
import { walletType } from "constants/walletType.enum copy";
import { getHistory } from "pages/Wallet/store/historySlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BoxUi from "../../../../components/UiKit/BoxUi";
import HistoryTable from "../../components/HistoryTable/HistoryTable";
import useStyles from "./History.style";

export default function History({ type, ...props }) {
  const classes = useStyles();
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getHistory({
        query: { action: type && type.toLowerCase(), limit: 5 },
      })
    );
  }, [type]);
  return (
    <BoxUi
      className={`flex flex-col ${classes.wrapper}`}
      header={
        <div className={`font-bold text-[15px] text-center lg:text-start `}>
          {type ? type : "All Assets"} History
        </div>
      }
      classes={{ body: "h-full flex flex-col gap-[10px]" }}
    >
      <div className="flex gap-[10px] lg:gap-[20px] items-center flex-col lg:flex-row">
        <div className="font-bold">Time</div>
        <div className="flex gap-[10px]">
          <NetworkBtn
            onClick={() => setActive("All")}
            active={active === "All"}
          >
            All
          </NetworkBtn>
          <NetworkBtn onClick={() => setActive("7")} active={active === "7"}>
            Last 7 days
          </NetworkBtn>
          <NetworkBtn onClick={() => setActive("30")} active={active === "30"}>
            Last 30 days
          </NetworkBtn>
        </div>
      </div>
      <HistoryTable type={type} pagination />
    </BoxUi>
  );
}

const NetworkBtn = ({ className, children, active, ...props }) => {
  const classes = useStyles();

  return (
    <Button
      {...props}
      className={`h-full flex gap-[4px] text-[12px] rounded-[5px] h-[40px] px-[7px] py-[10px] gap-[10px] h-[45px] normal-case ${className} ${
        active
          ? `font-bold border border-solid ${classes.activeOverview}`
          : `${classes.button} ${classes.overview}`
      }`}
    >
      {children}
    </Button>
  );
};
