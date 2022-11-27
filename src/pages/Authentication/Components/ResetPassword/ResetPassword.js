import React, {useEffect, useState} from "react";
import useStyles from "./ResetPassword.styles";
import WelcomeSvg from '../../../../assets/images/welcome-background.png'
import WelcomeDarkSvg from '../../../../assets/images/welcome-background-dark.png'
import BusinessDealSvg from '../../../../assets/images/business-deal.svg'
import BusinessDealDarkSvg from '../../../../assets/images/business-deal-dark.svg'
import {useDispatch, useSelector} from "react-redux";
import {
  Checkbox,
  FormControl,
  FormControlLabel, FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from "@mui/material";
import InputUi from "../../../../components/UiKit/InputUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Link} from "react-router-dom";
import BoxUi from "../../../../components/UiKit/BoxUi";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {showAlert} from "../../../../store/AlertsSlice";
import {AlertTypes} from "../../../../constants/alertTypes.enum";
import * as yup from "yup";
import useAuth from "../../../../hooks/useAuth";


const schema = yup.object({
  email: yup.string(),
}).required();


export default function ResetPassword(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {theme} = useSelector((s) => s.app);
  const backgroundUrl = theme === 'light' ? WelcomeSvg : WelcomeDarkSvg;
  const [showPassword,setShowPassword] = useState(false)
  const {requestResetPassword} = useAuth();
  const {control, register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    requestResetPassword(data)
  };
  const notifyHandler = ({message, alertType, key}) => {
    dispatch(showAlert({notify: {message, type: alertType, visible: true, key},}));
  };

  useEffect(() => {
    Object.keys(errors).forEach(function (key, index) {
      setTimeout(() => {
        notifyHandler(errors[key].message, AlertTypes.danger, index)
      }, 100)
    });

  }, [errors])

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="email"
                control={control}
                render={({field}) => <InputUi {...field} label={'Email address'} className={`mt-5 mb-5 ${classes.inputStyle}`}/>}
              />
              <ButtonUi type={'submit'} variant={'contained'} className={`mt-3 ${classes.button}`}>
                Submit
              </ButtonUi>
            </form>
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
