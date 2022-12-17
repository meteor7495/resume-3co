import React from "react";
import useStyles from "./styles";
export default function AttentionCard({ items, description, className }) {
  const classes = useStyles();
  return (
    <div
      className={`px-[10px] pt-[10px] pb-[25px] border border-solid rounded-[5px] ${classes.attentionWrapper} ${className}`}
    >
      <div className="flex flex-col gap-[10px] text-[12px] lg:px-[20px]">
        <div className={`text-center font-bold ${classes.warningTitle}`}>
          ATTENTION
        </div>
        {items?.map(({ title, value, unit, warning }, i) => (
          <div
            className={`flex justify-between text-[10px] lg:text-[12px]`}
            key={i}
          >
            <div>{title}</div>
            <div className={`font-bold ${warning ? classes.warningTitle : ""}`}>
              {value.toLocaleString()}{" "}
              <span className={`font-normal ${classes.textSecondary}`}>
                {unit}
              </span>
            </div>
          </div>
        ))}
        {description && (
          <>
            <div className="m-auto border-0 hidden lg:block border-b border-warning w-5/6 border-dashed"></div>
            <div >{description}</div>
          </>
        )}
      </div>
    </div>
  );
}
