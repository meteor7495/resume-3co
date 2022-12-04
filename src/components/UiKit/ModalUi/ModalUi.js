import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React, {useEffect, useState} from "react";
import useStyles from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {setModal} from "../../../store/ModalSlice";

const ModalUi = ({fullWidth, maxWidth, title, children, actions, id, contentClassName, ...props}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {modal} = useSelector((s) => s);
  const handleClose = () => {
    dispatch(setModal({visible: false,modal:''}))
  };
  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={!!(modal?.visible && modal?.id === id)}
      onClose={handleClose}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent className={contentClassName}>
        {children}
      </DialogContent>
      <DialogActions>
        {
          actions ? actions
            : <Button onClick={handleClose}>Close</Button>
        }
      </DialogActions>
    </Dialog>
  );
};

export default ModalUi;
