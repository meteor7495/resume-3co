import React, {useEffect} from "react";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import useStyles from './Authentication.styles'
import ChoosePassword from "./Components/ChoosePassword/ChoosePassword";
import TwoFactorAuthentication from "./Components/TwoFactorAuthentication/TwoFactorAuthentication";
import VerificationCode from "./Components/VerificationCode/VerificationCode";
import { resetSettings } from "../../store/LayoutSettings";
import { useDispatch } from "react-redux";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().required('Enter Email'),
  password: yup.string().required('Enter Password'),
});
const registerSchema = yup.object().shape({
  fullName: yup.string().required('Please enter your full name !').min(6).max(30),
  email: yup.string().email('Please enter a valid email !').required('Please enter your email !'),
  password: yup.string().required('Please enter your password !').min(8).max(30),
  confirmPassword: yup.string().required('Please enter your confirm password !').min(8).max(30),
  referralCode: yup.string().default(''),
});
const resetPasswordSchema = yup.object({
  email: yup.string(),
}).required();
const twoFactorAuthSchema = yup.object({
  email: yup.string(),
}).required();
const choosePasswordSchema = yup.object({
  email: yup.string(),
}).required();
const verificationCodeSchema = yup.object({
  verificationCode: yup.string(),
}).required();

export default function Authentication({page}) {
  const loginForm = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(loginSchema),
  });
  const registerForm = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(registerSchema),
  });
  const resetPasswordForm = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(resetPasswordSchema),
  });
  const choosePasswordForm = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(choosePasswordSchema),
  });
  const twoFactorAuthForm = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(twoFactorAuthSchema),
  });
  const verificationCodeForm = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(verificationCodeSchema),
  });
  const classes = useStyles();
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetSettings());
  }, []);
  const pageHandler = (page) => {
    if (page === 'login') {
      return (
        <FormProvider {...loginForm}>
          <Login/>
        </FormProvider>
      )
    } else if (page === 'register') {
      return (
        <FormProvider {...registerForm}>
          <Register/>
        </FormProvider>
      )
    } else if (page === 'resetPassword') {
      return (
        <FormProvider {...resetPasswordForm}>
          <ResetPassword/>
        </FormProvider>
      )
    } else if (page === 'choosePassword') {
      return (
        <FormProvider {...choosePasswordForm}>
          <ChoosePassword/>
        </FormProvider>
      )
    } else if (page === 'twoFactorAuth') {
      return (
        <FormProvider {...twoFactorAuthForm}>
          <TwoFactorAuthentication/>
        </FormProvider>
      )
    } else if (page === 'verificationCode') {
      return (
        <FormProvider {...verificationCodeForm}>
          <VerificationCode/>
        </FormProvider>
      )
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
