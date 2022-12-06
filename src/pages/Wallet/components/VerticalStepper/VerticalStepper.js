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
      connector={
        <StepConnector
          className="h-[26px]"
          classes={{
            line: `border-dashed ${classes.line} border-y-0 border-r-0`,
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
            className={
              steps.length === i + 1
                ? ""
                : `border-dashed ${classes.line} border-y-0 border-r-0`
            }
          >
            {children}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}
