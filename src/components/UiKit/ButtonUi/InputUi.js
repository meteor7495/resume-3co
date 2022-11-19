import {Button} from "@mui/material";
import React from "react";
import useStyles from "./styles";

const InputUi = ({children, ...props}) => {
    const classes = useStyles();
    // disableElevation
    return (
        <Button style={{textTransform:'none'}} disableElevation {...props}>
            {children}
        </Button>
    );
};

export default InputUi;
