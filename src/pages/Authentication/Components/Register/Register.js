import React, { useEffect, useState } from "react";
import useStyles from "./Register.styles";
import WelcomeSvg from "../../../../assets/images/welcome-background.png";
import WelcomeDarkSvg from "../../../../assets/images/welcome-background-dark.png";
import BusinessDealSvg from "../../../../assets/images/business-deal.svg";
import BusinessDealDarkSvg from "../../../../assets/images/business-deal-dark.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import InputUi from "../../../../components/UiKit/InputUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AlertTypes } from "../../../../constants/alertTypes.enum";
import { showAlert } from "../../../../store/AlertsSlice";
import BoxUi from "../../../../components/UiKit/BoxUi";
import { setEmail } from "../../../../store/userSlice";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Please enter your full name !")
      .min(6)
      .max(30),
    email: yup
      .string()
      .email("Please enter a valid email !")
      .required("Please enter your email !"),
    password: yup
      .string()
      .required("Please enter your password !")
      .min(8)
      .max(30),
    confirmPassword: yup
      .string()
      .required("Please enter your confirm password !")
      .min(8)
      .max(30),
    referralCode: yup.string().default(""),
  })
  .required();

export default function Login(props) {
  const classes = useStyles();
  const { theme } = useSelector((s) => s.app);
  const backgroundUrl = theme === "light" ? WelcomeSvg : WelcomeDarkSvg;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const { registerUser } = useAuth();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    if (data?.referralCode === "") {
      delete data.referralCode;
    }
    checked && registerUser(data);
  };
  const notifyHandler = ({ message, alertType, key }) => {
    dispatch(showAlert({ message, type: alertType, visible: true, key }));
  };

  useEffect(() => {
    Object.keys(errors).forEach(function (key, index) {
      setTimeout(() => {
        notifyHandler(errors[key].message, AlertTypes.danger, index);
      }, 100);
    });
  }, [errors]);
  return (
    <section
      className={"text-gray-600 body-font " + classes.body}
      style={{
        backgroundImage: "url(" + backgroundUrl + ") ",
        backgroundSize: "cover",
      }}
    >
      <div className="container w-full mx-auto flex px-5 py-8 justify-center lg:py-24 md:flex-row flex-col items-center">
        <div className="p-0 lg:p-4 w-full max-w-[414px] ">
          <BoxUi
            className={
              "h-full p-[18px] lg:p-[36px] border-solid border rounded-lg overflow-hidden "
            }
          >
            <Typography
              className={"text-center font-[700] text-[25px]"}
              color={"text.primary"}
              variant={"h1"}
            >
              Create Account
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <InputUi
                    {...field}
                    label={"Full Name"}
                    className={`mt-5 ${classes.inputStyle}`}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputUi
                    {...field}
                    label={"Email Address"}
                    className={`mt-5 ${classes.inputStyle}`}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <FormControl className={"w-full mt-5"} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      {...field}
                      className={`${classes.inputStyle}`}
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                )}
              />
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <FormControl className={"w-full mt-5"} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      {...field}
                      className={`${classes.inputStyle}`}
                      id="outlined-adornment-password"
                      type={showConfirmPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                )}
              />
              <Controller
                name="referralCode"
                control={control}
                render={({ field }) => (
                  <InputUi
                    {...field}
                    label={"Referral Code"}
                    className={`mt-5 ${classes.inputStyle}`}
                  />
                )}
              />
              <div className="flex items-center mt-3 ">
                <FormGroup>
                  <FormControlLabel
                    className={
                      "text-[14px] font-[400] mr-1 " + classes.textColor
                    }
                    control={
                      <Checkbox
                        onChange={() => setChecked(!checked)}
                        size={"small"}
                      />
                    }
                    label="I agree to the"
                  />
                </FormGroup>
                <ButtonUi
                  disableFocusRipple
                  disableTouchRipple
                  disableRipple
                  className={"p-0"}
                  sx={{ minWidth: "auto" }}
                  color={"primary"}
                >
                  Terms & Conditions
                </ButtonUi>
              </div>
              <ButtonUi
                type={checked ? "submit" : "button"}
                disabled={!checked}
                variant={"contained"}
                className={`mt-3 ${classes.button}`}
              >
                Create Account
              </ButtonUi>
            </form>
          </BoxUi>
          <Typography className={"mt-3 text-center"} color={"text.primary"}>
            Already have an account? &nbsp;
            <Link to={"/login"}>
              <Typography className={"inline"} color={"primary"}>
                Sign in here
              </Typography>
            </Link>
          </Typography>
        </div>
      </div>
    </section>
  );
}
