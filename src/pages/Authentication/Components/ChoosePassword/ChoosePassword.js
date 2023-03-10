import React, { useEffect, useState } from "react";
import useStyles from "./ChoosePassword.styles";
import WelcomeSvg from "../../../../assets/images/welcome-background.png";
import WelcomeDarkSvg from "../../../../assets/images/welcome-background-dark.png";
import BusinessDealSvg from "../../../../assets/images/business-deal.svg";
import BusinessDealDarkSvg from "../../../../assets/images/business-deal-dark.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useAuth from "../../../../hooks/useAuth";
import {Controller, useForm, useFormContext} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { showAlert } from "../../../../store/AlertsSlice";
import { AlertTypes } from "../../../../constants/alertTypes.enum";
import * as yup from "yup";
import InputUi from "../../../../components/UiKit/InputUi";
import _ from "../../../../@lodash";
import {useSearchParams} from "react-router-dom";

export default function ChoosePassword(props) {
  const classes = useStyles();
  const { theme } = useSelector((s) => s.app);
  const backgroundUrl = theme === "light" ? WelcomeSvg : WelcomeDarkSvg;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const methods = useFormContext();
  const {control, formState, getValues} = methods;
  const {errors, isValid, dirtyFields} = formState;
  const { resetPassword } = useAuth();
  const [searchParams] = useSearchParams();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const onSubmit = async(data) => {
    Object.assign(data, {email: searchParams.get('email')})
    console.log('datadatadatadata',data);
    await resetPassword(data);
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
        <div className="p-0 lg:p-4 w-full max-w-[414px]">
          <div
            className={
              "h-full p-[18px] lg:p-[36px] border-solid border rounded-lg overflow-hidden bg-white " +
              classes.borderColor
            }
          >
            <Typography
              className={"text-center font-[700] text-[25px]"}
              color={"text.primary"}
              variant={"h1"}
            >
              Reset password
            </Typography>
            <div>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <FormControl className={"w-full mt-5"} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      New Password
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
                      label="New Password"
                    />
                  </FormControl>
                )}
              />
              <span className={'h-[30px] text-xs text-error flex items-center'}>
                {errors?.password?.message}
              </span>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <FormControl className={"w-full "} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm New Password
                    </InputLabel>
                    <OutlinedInput
                      {...field}
                      error={!!errors.confirmNewPassword}
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
                      label="Confirm New Password"
                    />
                  </FormControl>
                )}
              />
              <span className={'h-[30px] text-xs text-error flex items-center'}>
                {errors?.confirmPassword?.message}
              </span>
              <Controller
                name="verificationCode"
                control={control}
                render={({ field }) => (
                  <InputUi
                    {...field}
                    error={!!errors.verificationCode}
                    label={"Verification Code"}
                    className={`${classes.inputStyle}`}
                  />
                )}
              />
              <span className={'h-[30px] text-xs text-error flex items-center'}>
                {errors?.verificationCode?.message}
              </span>
              <ButtonUi
                variant={"contained"}
                disabled={_.isEmpty(dirtyFields) || !isValid}
                onClick={() => onSubmit(getValues())}
                className={`mt-3 ${classes.button}`}
              >
                Submit
              </ButtonUi>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
