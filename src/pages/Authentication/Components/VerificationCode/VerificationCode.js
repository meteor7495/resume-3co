import React, {useEffect} from "react";
import useStyles from "./VerificationCode.styles";
import WelcomeSvg from '../../../../assets/images/welcome-background.png'
import WelcomeDarkSvg from '../../../../assets/images/welcome-background-dark.png'
import {useDispatch, useSelector} from "react-redux";
import {Typography} from "@mui/material";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import {PinInput} from 'react-input-pin-code';
import BoxUi from "../../../../components/UiKit/BoxUi";
import {Controller, useForm} from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {showAlert} from "../../../../store/AlertsSlice";
import {AlertTypes} from "../../../../constants/alertTypes.enum";
import * as yup from "yup";
import {useNavigate, useSearchParams} from "react-router-dom";

const schema = yup.object({
  verificationCode: yup.string(),
}).required();

export default function VerificationCode(props) {
  const classes = useStyles();
  const {verifyCode, resendPassword} = useAuth();
  const {theme} = useSelector((s) => s.app);
  const {user} = useSelector((s) => s);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const backgroundUrl = theme === 'light' ? WelcomeSvg : WelcomeDarkSvg;
  const [values, setValues] = React.useState(['', '', '', '', '', '']);
  const [buttonStatus, setButtonStatus] = React.useState(true);
  const {control, register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });
  const inputValidator = () => {
    let statusArray = [];
    values?.map((item) => {
      if(item === ''){
        statusArray.push(false)
      }
    })
    if(statusArray.includes(false)){
      setButtonStatus(true);
      return false
    }
  }
  const onSubmit = async() => {
    let data = {};
    Object.assign(data, {email: searchParams.get('email'), verificationCode: values.join('')})
    await verifyCode(data)
  };
  const changeValueHandler = () => {
    inputValidator()
  };
  const changeButtonStatus = () => {
    setButtonStatus(false)
  }
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
            <Typography className={'text-center font-[700] text-[25px] mb-3'} color={'text.primary'} variant={'h1'}>
              Verification Code
            </Typography>
            <Typography color={'text.primary'} className={'opacity-50 text-[14px] font-[400] mb-3 text-center'}>
              Enter the verification code sent
              to your email: {searchParams.get('email')}
            </Typography>
            <div>
              <Controller
                name="verificationCode"
                control={control}
                render={({field}) => <div className={classes.pinInputWrapper}><PinInput type="text"
                                                                                        id={'verificationCode'}
                                                                                        name={'verificationCode'}
                                                                                        values={values}
                                                                                        placeholder={''}
                                                                                        onComplete={() => changeButtonStatus()}
                                                                                        onChange={(value, index, values) => {
                                                                                          changeValueHandler()
                                                                                          setValues(values)
                                                                                        }}
                /></div>}
              />
              <ButtonUi disabled={buttonStatus} onClick={() => onSubmit()} variant={'contained'} className={`mt-3 ${classes.button}`}>
                Verify Code
              </ButtonUi>
              <ButtonUi type={'button'} variant={'text'}
                        onClick={() => resendPassword({email: searchParams.get('email')})}
                        className={`mt-3 ${classes.button}`}>
                Resend the code
              </ButtonUi>
            </div>
          </BoxUi>
        </div>
      </div>
    </section>
  );
}
