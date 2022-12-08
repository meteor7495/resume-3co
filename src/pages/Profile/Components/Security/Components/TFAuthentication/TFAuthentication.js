import React, {useEffect, useState} from "react";
import useStyles from "./TFAuthentication.styles";
import {Tooltip, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import InputUi from "../../../../../../components/UiKit/InputUi";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";
import {useDispatch, useSelector} from "react-redux";
import useAuth from "../../../../../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {showAlert} from "../../../../../../store/AlertsSlice";
import {AlertTypes} from "../../../../../../constants/alertTypes.enum";
import * as yup from "yup";
import ModalUi from "../../../../../../components/UiKit/ModalUi";
import {setModal} from "../../../../../../store/ModalSlice";
import securityLight from '../../../../../../assets/images/securityLight.svg'
import securityDark from '../../../../../../assets/images/securityDark.svg'
import QRCodeUi from "../../../../../../components/UiKit/QRCodeUi";

const schema = yup.object({
  email: yup.string(),
  password: yup.string(),
}).required();

export default function TFAuthentication() {
  const classes = useStyles();
  const {theme} = useSelector((s) => s.app);
  const activatePopUpImage = theme === 'light' ? securityLight : securityDark
  const [showPassword, setShowPassword] = useState(false)
  const {TFAGenerator,TFAActivator} = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {control, register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });
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
  const [response, setResponse] = useState({
    tfaCode: '',
    tfaKey: '',
  })
  useEffect(async () => {
    const data = await TFAGenerator()
    setResponse(data)
  },[])
  const [open, setOpen] = useState(false)
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const onSubmit = data => {
    TFAActivator(data)
  };
  return (
    <ModalUi maxWidth={'xs'} fullWidth={true} id={'activate'}
             actions={
               <div className={'flex flex-col w-full'}>
                 <ButtonUi onClick={handleSubmit(onSubmit)} variant={'contained'}
                           className={`w-full h-[60px] mt-3 ${classes.button}`}>
                   Submit
                 </ButtonUi>
                 <ButtonUi onClick={() => dispatch(setModal({visible: false, modal: ''}))} variant={'text'}
                           className={`w-full h-[42px] mt-3 ${classes.button}`}>
                   Cancel
                 </ButtonUi>
               </div>
             }>
      <div className={'flex justify-center'}>
        <img src={activatePopUpImage}/>
      </div>
      <div className={'mt-3'}>
        <Typography className={'text-[1rem] font-[700]'} variant={'h5'} color={'text.primary'}>
          Two-Factor Authentication
        </Typography>
        <Typography className={'text-[1rem] font-[400] opacity-50 mt-3'} color={'text.primary'}>
          Two-Factor Authentication (2FA) enhances the security of your 3co account and is required for crypto
          withdrawals and trading.
        </Typography>
      </div>
      <div className={'mt-3 flex'}>
        <QRCodeUi title={'Two-Factor Authentication'} value={response?.tfaCode}/>
        <div className={'ml-3 flex gap-[10px] flex-col'}>
          <Typography color={'text.primary'} variant={'h6'} className={'text-[0.875rem] font-[700]'}>
            Google Authenticator
          </Typography>
          <Typography color={'text.primary'} className={'text-[0.75rem] font-[400] opacity-50'}>
            Download and install Google Authenticator.
            Scan the QR code or copy the key:
          </Typography>
          <Tooltip color={'success'} onClose={handleTooltipClose} open={open}
                   classes={{tooltip: classes.tooltip, arrow: classes.tooltipColor}} title={<span>Copied!</span>}
                   leaveDelay={200} arrow>
            <InputUi onClick={(event) => {
              handleTooltipOpen()
              console.log(event.target.value)
              navigator.clipboard.writeText(event.target.value);
            }} value={response?.tfaKey}
                     className={`cursor-pointer read-only readOnly ${classes.inputStyle}`}/>
          </Tooltip>
        </div>
      </div>
      <div className={'mt-5'}>
        <Typography color={'text'} className={'mb-3'}>
          Enter 2FA Code:
        </Typography>
        <form>
          <Controller
            name="tfaCode"
            control={control}
            render={({field}) => <InputUi {...field} placeholder={'Enter 2FA Code'}
                                          className={`h-[45px_!important] ${classes.inputStyle}`}/>}
          />

        </form>
      </div>
    </ModalUi>
  );
}
