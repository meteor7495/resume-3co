import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/ModalSlice";

const ModalUi = ({
  title,
  children,
  actions,
  id,
  contentClassName,
  classes: classesP,
  ...props
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { modal } = useSelector((s) => s);
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <Dialog
      onClose={handleClose}
      {...props}
      open={!!(modal?.visible && modal?.id === id)}
      classes={{
        ...classesP,
        paper: `${classes.paper} ${classesP?.paper}`,
      }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent className={`pb-0 ${contentClassName}`}>
        {children}
      </DialogContent>
      <DialogActions>
        {actions ? actions : <Button onClick={handleClose}>Close</Button>}
      </DialogActions>
    </Dialog>
  );
};

export default ModalUi;
