import React from "react";
import useStyles from './styles'
export default function AttentionCard({ items }) {
  const classes = useStyles();
  return (
    <div className={`flex flex-col gap-[10px] px-[30px] pt-[10px] pb-[25px] text-[12px] border border-solid rounded-[5px] ${classes.attentionWrapper}`} >
      <div className={`text-center font-bold ${classes.warningTitle}`} >ATTENTION</div>
      {items?.map(({ title, value, unit, warning }, i) => (
        <div className={`flex justify-between`} key={i}>
          <div>{title}</div>
          <div className={`font-bold ${warning ? classes.warningTitle : ""}`} >{value} <span className={`font-normal ${classes.textSecondary}`} >{unit}</span></div>
        </div>
      ))}
    </div>
  );
}