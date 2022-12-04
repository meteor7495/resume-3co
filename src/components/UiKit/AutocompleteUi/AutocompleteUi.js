import { Autocomplete, TextField } from "@mui/material";
import React from "react";

export default function AutocompleteUi({options,label,placeholder,...props}) {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      renderInput={(params) => <TextField className={props.className} placeholder={placeholder} {...params} label={label} />}
      {...props}
    />
  );
}