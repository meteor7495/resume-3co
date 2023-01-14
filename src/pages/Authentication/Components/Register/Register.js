import React, { useEffect, useState } from "react";
import useStyles from "./Register.styles";
import WelcomeSvg from "../../../../assets/images/welcome-background.png";
import WelcomeDarkSvg from "../../../../assets/images/welcome-background-dark.png";
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
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { Controller, useFormContext } from "react-hook-form";
import BoxUi from "../../../../components/UiKit/BoxUi";
import _ from "../../../../@lodash";
import { setModal } from "../../../../store/ModalSlice";
import ModalUi from "../../../../components/UiKit/ModalUi";

export default function Login(props) {
  const classes = useStyles();
  const { theme } = useSelector((s) => s.app);
  const backgroundUrl = theme === "light" ? WelcomeSvg : WelcomeDarkSvg;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const methods = useFormContext();
  const { control, formState, getValues, setValue } = methods;
  const { errors, isValid, dirtyFields } = formState;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const { registerUser } = useAuth();
  const homeEmail = searchParams.get("email");
  useEffect(() => {
    setValue("email", homeEmail);
  }, []);

  const onSubmit = (data) => {
    if (data?.referralCode === "") {
      delete data.referralCode;
    }
    checked && registerUser(data);
  };
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
            <div>
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <InputUi
                    {...field}
                    error={!!errors.fullName}
                    label={"Full Name"}
                    className={`mt-5 ${classes.inputStyle}`}
                  />
                )}
              />
              <span className={"h-[30px] text-xs text-error flex items-center"}>
                {errors?.fullName?.message}
              </span>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputUi
                    {...field}
                    value={field?.value}
                    error={!!errors.email}
                    label={"Email Address"}
                    className={`${classes.inputStyle}`}
                  />
                )}
              />
              <span className={"h-[30px] text-xs text-error flex items-center"}>
                {errors?.email?.message}
              </span>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <FormControl className={"w-full"} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      {...field}
                      error={!!errors.password}
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
              <span className={"h-[30px] text-xs text-error flex items-center"}>
                {errors?.password?.message}
              </span>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <FormControl className={"w-full"} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      {...field}
                      error={!!errors.confirmPassword}
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
                      label="Confirm Password"
                    />
                  </FormControl>
                )}
              />
              <span className={"h-[30px] text-xs text-error flex items-center"}>
                {errors?.confirmPassword?.message}
              </span>
              <Controller
                name="referralCode"
                control={control}
                render={({ field }) => (
                  <InputUi
                    {...field}
                    label={"Referral Code"}
                    className={`${classes.inputStyle}`}
                  />
                )}
              />
              <div className="flex items-center">
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
                  variant="text"
                  disableFocusRipple
                  disableTouchRipple
                  disableRipple
                  className={"p-0 bg-[transparent_!important]"}
                  sx={{ minWidth: "auto" }}
                  color={"primary"}
                  onClick={() =>
                    dispatch(setModal({ visible: true, id: "termsConditions" }))
                  }
                >
                  Terms & Conditions
                </ButtonUi>
              </div>
              <ButtonUi
                type={checked ? "submit" : "button"}
                variant={"contained"}
                className={`mt-3 ${classes.button}`}
                disabled={_.isEmpty(dirtyFields) || !isValid || !checked}
                onClick={() => onSubmit(getValues())}
              >
                Create Account
              </ButtonUi>
            </div>
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
      <ModalUi
        maxWidth={"lg"}
        fullWidth={true}
        id={"termsConditions"}
        actions={
          <div className={"flex flex-col w-full"}>
            <ButtonUi
              onClick={() => dispatch(setModal({ visible: false, modal: "" }))}
              variant={"contained"}
              className={`w-full h-[42px] mt-3 ${classes.button}`}
            >
              Close
            </ButtonUi>
          </div>
        }
      >
        <Typography variant={"h4"} className={"text-xl font-bold mb-2"}>
          Terms and Conditions
        </Typography>
        {Terms.map(({ title, body }) => (
          <>
            <Typography variant={"h5"} className={"font-bold text-base mb-1"}>
              {title}
            </Typography>
            {body.map((text) => (
              <Typography className={"text-base mb-1"}>{text}</Typography>
            ))}
          </>
        ))}
      </ModalUi>
    </section>
  );
}

const Terms = [
  {
    title: "1- Introduction",
    body: [
      "1.1 These terms and conditions apply to your use of our website, 3CO Exchange, and the services we offer through the website.",
    ],
  },
  {
    title: "2- Service",
    body: [
      "2.1 We offer trading and investing services through our website.",
      "2.2 We reserve the right to modify or discontinue, temporarily or permanently, our services (or any part thereof) with or without notice at any time.",
    ],
  },
  {
    title: "3- Use of website",
    body: [
      "3.1 You must not use our website in any way that causes damage or impairs its availability.",
      "3.2 You must not use our website to transmit or send unsolicited commercial communications.",
    ],
  },
  {
    title: "4- Restricted access",
    body: [
      "4.1 We reserve the right to restrict access to certain areas of our website or the entire website at our discretion and without notice.",
      "4.2 If we provide you with a user ID and password to access restricted areas of our website or other content or services, you must keep this information confidential at all times.",
      "4.3 We reserve the right to disable your user ID and password if we believe you have not complied with these terms and conditions.",
    ],
  },
  {
    title: "5- Disclaimer of warranties",
    body: [
      '5.1 The website is provided on an "as is" and "as available" basis without any representations or warranties of any kind.',
      "5.2 We will not be liable for any indirect or consequential loss or damage arising out of or in connection with the use of the website.",
      "5.3 We make no warranty that the website will be uninterrupted or error-free, or that defects will be corrected.",
    ],
  },
  {
    title: "6- Limitation of liability",
    body: [
      "6.1 We will not be liable for any losses or damages resulting from your use of the website or the services we offer.",
    ],
  },
  {
    title: "7- Governing law",
    body: [
      "7.1 These terms and conditions are governed by and construed in accordance with the laws of [Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
    ],
  },
];
