import {
  Step,
  StepConnector,
  StepContent,
  StepLabel,
  Stepper,
} from "@mui/material";
import React from "react";
import useStyles from "./styles";
export default function VerticalStepper({ steps }) {
  const classes = useStyles();
  return (
    <Stepper
      orientation="vertical"
      className={`w-full h-fit`}
      connector={
        <StepConnector
          className="h-[26px]"
          classes={{
            line: `border-dashed ${classes.line} h-full border-y-0 border-r-0 border-l-0 lg:border-l`,
          }}
        />
      }
    >
      {steps.map(({ label, children }, i) => (
        <Step key={label} active={true}>
          <StepLabel
            classes={{
              root: `pb-[15px]`,
              label: classes.label,
            }}
            StepIconProps={{
              classes: { root: `${classes.icon}`, text: `${classes.text}` },
            }}
          >
            {label}
          </StepLabel>
          <StepContent
            className={`p-0 m-0 lg:pl-[20px] lg:ml-[12px] ${
              steps.length === i + 1
                ? ""
                : `border-dashed ${classes.line} border-y-0 border-r-0 border-l-0 lg:border-l`
            }`}
          >
            {children}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}
