import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  customToast:{
    "& .Toastify__toast":{
      border: '1px solid',
      boxShadow: 'none!important',
      "&.Toastify__toast--error":{
        backgroundColor: theme.palette.error.alertBg+'!important',
        borderColor: theme.palette.error.main+'!important',
        color: theme.palette.error.main+'!important',
      },
      "&.Toastify__toast--success":{
        backgroundColor: theme.palette.success.alertBg+'!important',
        borderColor: theme.palette.success.main+'!important',
        color: theme.palette.success.main+'!important',
      },
      "&.Toastify__toast--info":{
        backgroundColor: theme.palette.success.alertBg+'!important',
        borderColor: theme.palette.success.main+'!important',
        color: theme.palette.success.main+'!important',
      },
      "& .Toastify__toast-icon":{
          display:'none'
      },
      "& .Toastify__close-button":{
        display:'none'
      }
    },
  }
}));
