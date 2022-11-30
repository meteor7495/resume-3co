import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import { Box } from "@mui/system";
import React, {useState} from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const PasswordInputUi = ({ children, className, InputProps, label, field, ...props }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <FormControl className={'w-full'} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        {...field}
        inputProps={{
          type: "password",
          autoComplete: 'new-password'
        }}
        className={`${className}`}
        id="outlined-adornment-password"
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
        label={label}
      />
    </FormControl>
  );
};

export default PasswordInputUi;
