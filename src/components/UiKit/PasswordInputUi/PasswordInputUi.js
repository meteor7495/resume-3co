import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import { Box } from "@mui/system";
import React, {useState} from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const PasswordInputUi = ({ children, className, inputClassName, InputProps, label, ...props }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <FormControl
      className={`w-full ${className}`} variant="outlined">
      {label && <InputLabel>{label}</InputLabel>}
      <OutlinedInput
        className={`${inputClassName}`}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff/> : <Visibility/>}
            </IconButton>
          </InputAdornment>
        }
        {...props}
      />
    </FormControl>
  );
};

export default PasswordInputUi;
