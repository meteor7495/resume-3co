import { Autocomplete, Box, FormHelperText, TextField } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";

const AutocompleteUi = ({ renderValue, onChange, ...props }) => {
  const classes = useStyles();
  const [focused, setFocused] = useState();
  const [value, setValue] = useState();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <Autocomplete
        isOptionEqualToValue={(op, val) => op.value === val.value}
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        disableClearable
        fullWidth
        onChange={(...e) => {
          setFocused(false);
          onChange && onChange(...e);
        }}
        getOptionLabel={(option) => (option?.value ? option?.value : option)}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              onChange={({ target: { value } }) => {
                setFocused(true);
                setValue(value);
              }}
              className={props.className}
              inputProps={{
                ...params.inputProps,
                className: `p-0 ${
                  renderValue ? (focused ? "" : "text-transparent") : ""
                }`,
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: renderValue ? (focused ? "" : renderValue) : "",
                className: classes.notchedOutline,
                autoComplete: "new-password",
                classes: {
                  input: "p-0",
                  notchedOutline: `border-0`,
                },
              }}
            />
          );
        }}
      />
      {/* {errorHandler(valueId) && (
        <FormHelperText sx={{ pl: 2, color: "#E31B54" }}>
          {errorHandler(valueId)}
        </FormHelperText>
      )} */}
    </Box>
  );
};

export default AutocompleteUi;
