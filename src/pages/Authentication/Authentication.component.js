import React from "react";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import useStyles from './Authentication.styles'
import ChoosePassword from "./Components/ChoosePassword/ChoosePassword";
import TwoFactorAuthentication from "./Components/TwoFactorAuthentication/TwoFactorAuthentication";
import VerificationCode from "./Components/VerificationCode/VerificationCode";

export default function Authentication({page}) {
  const classes = useStyles();
  const pageHandler = (page) => {
    if (page === 'login') {
      return <Login/>
    } else if (page === 'register') {
      return <Register/>
    } else if (page === 'resetPassword') {
      return <ResetPassword/>
    } else if (page === 'choosePassword') {
      return <ChoosePassword/>
    } else if (page === 'twoFactorAuth') {
      return <TwoFactorAuthentication/>
    } else if (page === 'verificationCode') {
      return <VerificationCode/>
    }
    return <Login/>
  }
  return (
    <div className={classes.body}>
      {
        pageHandler(page)
      }
    </div>
  );
}
