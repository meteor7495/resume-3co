import { Button } from "@mui/material";
import React, { useState } from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import HistoryTable from "../../components/HistoryTable/HistoryTable";
import useStyles from "./History.style";

const dateTypes = [{
  value: "",
  name: "All"
},
{
  value: "last-7-days",
  name: "Last 7 days"
},
{
  value: "last-30-days",
  name: "Last 30 days"
}]

export default function History({ type, ...props }) {
  const classes = useStyles();
  const [date, setDate] = useState("");
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
          {dateTypes.map(({ name, value }) => (
            <NetworkBtn
              key={name}
              onClick={() => setDate(value)}
              active={date === value}
            >
              {name}
            </NetworkBtn>
          ))}
        </div>
      </div>
      <HistoryTable querys={{ date }} type={type} paginator />
    </BoxUi>
  );
}

const NetworkBtn = ({ className, children, active, ...props }) => {
  const classes = useStyles();

  return (
    <Button
      {...props}
      className={`h-full flex gap-[4px] text-[12px] rounded-[5px] h-[40px] px-[7px] py-[10px] gap-[10px] h-[45px] normal-case ${className} ${active
        ? `font-bold border border-solid ${classes.activeOverview}`
        : `${classes.button} ${classes.overview}`
        }`}
    >
      {children}
    </Button>
  );
};
