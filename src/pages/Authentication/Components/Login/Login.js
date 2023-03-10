import React, {useEffect} from "react";
import useStyles from "./Login.styles";
import WelcomeSvg from '../../../../assets/images/welcome-background.png'
import WelcomeDarkSvg from '../../../../assets/images/welcome-background-dark.png'
import {useDispatch, useSelector} from "react-redux";
import {Checkbox, FormControlLabel, FormGroup, Typography} from "@mui/material";
import InputUi from "../../../../components/UiKit/InputUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import {Link} from "react-router-dom";
import BoxUi from "../../../../components/UiKit/BoxUi";
import {Controller, useFormContext} from "react-hook-form";
import {showAlert} from "../../../../store/AlertsSlice";
import {AlertTypes} from "../../../../constants/alertTypes.enum";
import useAuth from "../../../../hooks/useAuth";
import PasswordInputUi from "../../../../components/UiKit/PasswordInputUi";
import _ from "../../../../@lodash";

export default function Login(props) {
  const classes = useStyles();
  const {theme} = useSelector((s) => s.app);
  const backgroundUrl = theme === 'light' ? WelcomeSvg : WelcomeDarkSvg;
  const {login} = useAuth();
  const dispatch = useDispatch();
  const methods = useFormContext();
  const {control, formState, getValues} = methods;
  const {errors, isValid, dirtyFields} = formState;

  const onSubmit = async(data) => {
    await login(data)
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
            className={"gap-2 flex flex-col h-full p-[18px] lg:p-[36px] border-solid border rounded-lg overflow-hidden"}>
            <Typography className={'text-center font-[700] text-[25px] mb-4'} color={'text.primary'} variant={'h1'}>
              Log In
            </Typography>
            <div>
              <Controller
                name="email"
                control={control}
                render={({field}) => <InputUi
                  {...field}
                  label={'Email address'}
                  error={!!errors.email}
                  className={`${classes.inputStyle}`}/>}
              />
              <span className={'h-[30px] text-xs text-error flex items-center'}>
              {errors?.email?.message}
            </span>
            </div>
            <div>
              <Controller
                name="password"
                control={control}
                render={({field}) => <PasswordInputUi
                  {...field}
                  label={'Password'}
                  error={!!errors.password}
                  inputClassName={`${classes.inputStyle}`}/>}
              />
              <span className={'h-[30px] text-xs text-error flex items-center'}>
              {errors?.password?.message}
            </span>
            </div>
            <div>
              <FormGroup>
                <FormControlLabel className={'text-[14px] font-[400] ' + classes.textColor}
                                  control={<Checkbox size={'small'}/>} label="Remember me"/>
              </FormGroup>
            </div>
            <ButtonUi
              disabled={_.isEmpty(dirtyFields) || !isValid}
              onClick={() => onSubmit(getValues())}
              type={'button'}
              variant={'contained'}
              className={`mt-3 ${classes.button}`}>
              Log In
            </ButtonUi>
            <Link to={'/reset-password'}>
              <Typography className={'text-[14px] mt-3'} color={'primary'}>
                Forget Password?
              </Typography>
            </Link>
          </BoxUi>
          <Typography className={'mt-3 text-center'} color={'text.primary'}>
            Don???t have an account? &nbsp;
            <Link to={'/register'}>
              <Typography className={'inline'} color={'primary'}>
                Sign up here
              </Typography>
            </Link>
          </Typography>
        </div>
      </div>
    </section>
  );
}
