import React from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import OverviewHeader from "../../components/OverviewHeader/OverviewHeader";
import useStyles from "./Overview.style";

export default function Assets({ children, ...props }) {
  const classes = useStyles();
  return (
    <div className={`flex lg:flex-col gap-[10px]`}>
      <OverviewHeader />
      <div className={`text-[20px]`}>www</div>
    </div>
  );
}
