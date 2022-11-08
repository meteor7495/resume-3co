import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { showAlert } from "../../store/AlertsSlice";
// import useStyles from "./styles";
import 'react-toastify/dist/ReactToastify.css';

export default function Toastify(props) {
  // var classes = useStyles();
  const { notify } = useSelector(s => s.alerts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (notify?.message) {
      switch (notify.type) {
        case "danger": {
          toast.error(notify.message, {
            draggable: true,
            progress: undefined,
            autoClose: true,
            pauseOnHover:true,
            hideProgressBar:true
          });
          break;
        }
        case "success": {
          toast.success(notify.message, {
            draggable: true,
            progress: undefined,
            autoClose: true,
            pauseOnHover:true,
            hideProgressBar:true
          });
          break;
        }
        case "info": {
          toast.info(notify.message, {
            draggable: true,
            progress: undefined,
            autoClose: true,
            pauseOnHover:true,
            hideProgressBar:true
          });
          break;
        }
        default: {
          toast(notify.message, {
            draggable: true,
            progress: undefined,
            autoClose: true,
            pauseOnHover:true,
            hideProgressBar:true
          });
        }
      }
    }

  }, [notify, dispatch]);
  return <ToastContainer />;
}
