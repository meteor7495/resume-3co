import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import useStyles from "./Landing.style";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
export default function Landing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login, requestVerificationCode } = useAuth();

  const classes = useStyles();

  const loginHandler = async () => {
    let user = await login({
      email: "m.akramifard@gmail.com",
      password: "m0261644",
    });
    if (user) {
      if (user.unVerified === true) {
        await requestVerificationCode({ email: "m.akramifard@gmail.com" });
        //navigate('/otp-verify',{ email: data.email})
      } else {
        window.location.assign(window.location.origin);
      }
    }
  };
  return (
    <div className={`${classes.body} flex gap-[12px] items-center`}>
      un-Autorized
      <Button color="primary" onClick={loginHandler}>
        login
      </Button>
      <Link to={"exchange"}>
        <Button color="primary" variant="contained">
          exchange
        </Button>
      </Link>
    </div>
  );
}
