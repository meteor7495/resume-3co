import React, {useEffect, useState} from "react";
import useStyles from "./Security.styles";
import {Typography} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";
import InputUi from "../../../../components/UiKit/InputUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import {useDispatch, useSelector} from "react-redux";
import WelcomeSvg from "../../../../assets/images/welcome-background.png";
import WelcomeDarkSvg from "../../../../assets/images/welcome-background-dark.png";
import useAuth from "../../../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {showAlert} from "../../../../store/AlertsSlice";
import {AlertTypes} from "../../../../constants/alertTypes.enum";
import {setModal} from "../../../../store/ModalSlice";
import disableAccountLight from '../../../../assets/images/disableAccountLight.svg'
import disableAccountDark from '../../../../assets/images/disableAccountDark.svg'
import securityLight from '../../../../assets/images/securityLight.svg'
import securityDark from '../../../../assets/images/securityDark.svg'
import DisableAccount from "./Components/DisableAccount/DisableAccount";
import TFAuthentication from "./Components/TFAuthentication/TFAuthentication";

export default function Security() {
  const methods = useFormContext();
  const {control, formState, getValues} = methods;
  const {errors} = formState;
  const classes = useStyles();
  const {theme} = useSelector((s) => s.app);
  const activatePopUpImage = theme === 'light' ? securityLight : securityDark;
  const disablePopUpImage = theme === 'light' ? disableAccountLight : disableAccountDark;
  const backgroundUrl = theme === 'light' ? WelcomeSvg : WelcomeDarkSvg;
  const [showPassword, setShowPassword] = useState(false)
  const {updatePassword} = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = data => {
    updatePassword(data)
  };
  const notifyHandler = ({message, alertType, key}) => {
    dispatch(showAlert({notify: {message, type: alertType, visible: true, key},}));
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  useEffect(() => {
    Object.keys(errors).forEach(function (key, index) {
      setTimeout(() => {
        notifyHandler(errors[key].message, AlertTypes.danger, index)
      }, 100)
    });

  }, [errors])
  const [open, setOpen] = useState(false)
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <section className={"text-gray-600 body-font border border-solid " + classes.body}>
      <div className="container mx-auto flex flex-wrap py-5 lg:py-5 px-5 md:flex-row flex-col items-center">
        <div className={'w-full mb-6'}>
          <Typography className={'text-[1rem] font-[400] opacity-50 '}>
            Security
          </Typography>
        </div>
        <div className={'flex w-full justify-between flex-wrap'}>
          <div className={'w-[100%] lg:w-[49%]'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              Old Password
            </Typography>
            <Controller
              name="oldPassword"
              control={control}
              render={({field}) => <InputUi {...field} placeholder={'Old Password'}
                                            className={`${classes.inputStyle}`}/>}
            />
          </div>
          <div className={'w-[100%] lg:w-[49%]'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              New Password
            </Typography>
            <Controller
              name="newPassword"
              control={control}
              render={({field}) => <InputUi {...field} placeholder={'New Password'}
                                            className={`${classes.inputStyle}`}/>}
            />
          </div>
          <div className={'w-[100%] lg:w-[49%] mt-4'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              Two Factor Authentication
            </Typography>
            <div className={'w-full flex justify-between items-center'}>
              <Typography className={'text-[1rem] font-[400]'}>
                Status: <span className={'text-error font-[700]'}>Not Active!</span>
              </Typography>
              <ButtonUi onClick={() => dispatch((setModal({visible: true, id: 'activate'})))} variant={'outlined'}
                        className={`w-[127px] h-[42px] ${classes.button}`}>
                Activate
              </ButtonUi>
            </div>
          </div>
          <div className={'w-[100%] lg:w-[49%] mt-4'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              New Password Confirmation
            </Typography>
            <Controller
              name="newPasswordConfirmation"
              control={control}
              render={({field}) => <InputUi {...field} placeholder={'New Password Confirmation'}
                                            className={`${classes.inputStyle}`}/>}
            />
          </div>
          <div className={'w-[100%] lg:w-[49%] mt-4'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              Account Disable
            </Typography>
            <div className={'w-full flex justify-between items-center'}>
              <Typography className={'text-[1rem] font-[400] opacity-50'}>
                Permanently ban access to this account:
              </Typography>
              <ButtonUi onClick={() => dispatch((setModal({visible: true, id: 'disableAccount'})))} variant={'outlined'}
                        color={'error'} className={`w-[127px] h-[42px] ${classes.button}`}>
                Disable
              </ButtonUi>
            </div>
          </div>
          <div className={'w-full flex justify-end mt-8'}>
            <ButtonUi onClick={() => onSubmit(getValues())} variant={'contained'}
                      className={`w-full lg:w-[127px] h-[42px] mt-3 ${classes.button}`}>
              Update
            </ButtonUi>
          </div>
        </div>
      </div>
      <DisableAccount/>
      <TFAuthentication/>
    </section>
  );
}
