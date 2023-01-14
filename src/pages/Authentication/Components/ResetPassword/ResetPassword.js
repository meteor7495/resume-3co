import React, {useState} from "react";
import useStyles from "./ResetPassword.styles";
import WelcomeSvg from '../../../../assets/images/welcome-background.png'
import WelcomeDarkSvg from '../../../../assets/images/welcome-background-dark.png'
import {useDispatch, useSelector} from "react-redux";
import {Typography} from "@mui/material";
import InputUi from "../../../../components/UiKit/InputUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import {Link} from "react-router-dom";
import BoxUi from "../../../../components/UiKit/BoxUi";
import {Controller, useFormContext} from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import _ from "../../../../@lodash";

export default function ResetPassword(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {theme} = useSelector((s) => s.app);
  const backgroundUrl = theme === 'light' ? WelcomeSvg : WelcomeDarkSvg;
  const {requestResetPassword} = useAuth();
  const methods = useFormContext();
  const {control, formState, getValues} = methods;
  const {errors, isValid, dirtyFields} = formState;
  const onSubmit = async (data) => {
    await requestResetPassword(data)
  };

  return (
    <section className={"text-gray-600 body-font " + classes.body} style={{
      backgroundImage: 'url(' + backgroundUrl + ') ',
      backgroundSize: 'cover'
    }}>
      <div
        className="container w-full mx-auto flex px-5 py-8 justify-center lg:py-24 md:flex-row flex-col items-center">
        <div className="p-0 lg:p-4 w-full max-w-[414px]">
          <BoxUi
            className={"h-full p-[18px] lg:p-[36px] border-solid border rounded-lg overflow-hidden"}>
            <Typography className={'text-center font-[700] text-[25px]'} color={'text.primary'} variant={'h1'}>
              Reset Password
            </Typography>
            <div>
              <Controller
                name="email"
                control={control}
                render={({field}) => <InputUi
                  {...field}
                  label={'Email address'}
                  error={!!errors.email}
                  className={`mt-5 ${classes.inputStyle}`}
                />
                }
              />
              <span className={'h-[30px] text-xs text-error flex items-center'}>
                {errors?.email?.message}
              </span>
              <ButtonUi
                variant={'contained'}
                className={`mt-1 ${classes.button}`}
                onClick={() => onSubmit(getValues())}
                disabled={_.isEmpty(dirtyFields) || !isValid}
              >
                Submit
              </ButtonUi>
            </div>
          </BoxUi>
          <Typography className={'mt-3 text-center'} color={'text.primary'}>
            Remember password?  &nbsp;
            <Link to={'/login'}>
              <Typography className={'inline'} color={'primary'}>
                Sign in here
              </Typography>
            </Link>
          </Typography>
        </div>
      </div>
    </section>
  );
}
