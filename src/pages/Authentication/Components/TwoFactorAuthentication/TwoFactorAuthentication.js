import React, {useState} from "react";
import useStyles from "./TwoFactorAuthentication.styles";
import WelcomeSvg from '../../../../assets/images/welcome-background.png'
import WelcomeDarkSvg from '../../../../assets/images/welcome-background-dark.png'
import BusinessDealSvg from '../../../../assets/images/business-deal.svg'
import BusinessDealDarkSvg from '../../../../assets/images/business-deal-dark.svg'
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import { PinInput } from 'react-input-pin-code';
import BoxUi from "../../../../components/UiKit/BoxUi";
import useAuth from "../../../../hooks/useAuth";

export default function TwoFactorAuthentication(props) {
  const classes = useStyles();
  const {theme} = useSelector((s) => s.app);
  const backgroundUrl = theme === 'light' ? WelcomeSvg : WelcomeDarkSvg;
  const {tfaSignIn} = useAuth();
  const [values, setValues] = React.useState(['', '', '','', '', '']);
  const [buttonStatus, setButtonStatus] = React.useState(true);
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
    inputValidator()
    let data = values.join('')
    await tfaSignIn({tfaCode:data})
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
            <Typography className={'text-center font-[700] text-[18px] lg:text-[25px] mb-3'} color={'text.primary'} variant={'h1'}>
              Two-Factor Authentication
            </Typography>
            <Typography color={'text.primary'} className={'opacity-50 text-[14px] font-[400] mb-3 text-center'}>
              Enter the verification code generated
              by your mobile application
            </Typography>
            <div className={classes.pinInputWrapper}>
              <PinInput
                values={values}
                placeholder={''}
                onComplete={() => changeButtonStatus()}
                onChange={(value, index, values) => {
                  changeValueHandler()
                  setValues(values)
                }}
              />
            </div>
            <ButtonUi disabled={buttonStatus} onClick={() => onSubmit()} variant={'contained'} className={`mt-3 ${classes.button}`}>
              Verify Code
            </ButtonUi>
          </BoxUi>
        </div>
      </div>
    </section>
  );
}
