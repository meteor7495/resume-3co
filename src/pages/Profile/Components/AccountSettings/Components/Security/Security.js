import React, {useEffect, useState} from "react";
import useStyles from "./Security.styles";
import {Typography} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";
import InputUi from "../../../../../../components/UiKit/InputUi";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";
import {useDispatch, useSelector} from "react-redux";
import useAuth from "../../../../../../hooks/useAuth";
import {showAlert} from "../../../../../../store/AlertsSlice";
import {AlertTypes} from "../../../../../../constants/alertTypes.enum";
import {setModal} from "../../../../../../store/ModalSlice";
import DisableAccount from "./Components/DisableAccount/DisableAccount";
import TFAuthentication from "./Components/TFAuthentication/TFAuthentication";
import PasswordInputUi from "../../../../../../components/UiKit/PasswordInputUi";

export default function Security() {
  const methods = useFormContext();
  const {control, formState:{errors}, reset, getValues} = methods;
  const classes = useStyles();
  const {updatePassword, TFADeActivator} = useAuth();
  const dispatch = useDispatch();
  const {user} = useSelector((s) => s);
  const {modal} = useSelector((s) => s);
  const onSubmit = async(data) => {
    console.log('errorserrorserrorserrorserrors data',data)
    console.log('errorserrorserrorserrorserrors',errors)
    return false;
    await updatePassword(data)
    reset({
      oldPassword:'',
      newPassword:'',
      newPasswordConfirmation:'',
    })
  };
  const notifyHandler = ({message, alertType, key}) => {
    dispatch(showAlert( {message, type: alertType, visible: true, key}));
  };
  /*useEffect(() => {
    Object.keys(errors).forEach(function (key, index) {
      setTimeout(() => {
        notifyHandler({message: errors[key].message, alertType:AlertTypes.danger, key:index})
      }, 100)
    });
  }, [errors])*/
  const [tfaStatus, setTfaStatus] = useState(false);
  useEffect(() => {
    setTfaStatus(user?.user?.isTfaActive)
  }, [user])

  return (
    <section className={"body-font border border-solid " + classes.body}>
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
              render={({field}) => <PasswordInputUi {...field} placeholder={'Old Password'}
                                                    inputClassName={`${classes.inputStyle}`}/>}
            />
          </div>
          <div className={'w-[100%] lg:w-[49%]'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              New Password
            </Typography>
            <Controller
              name="newPassword"
              control={control}
              render={({field}) => <PasswordInputUi {...field} placeholder={'New Password'}
                                                    inputClassName={`${classes.inputStyle}`}/>}
            />
          </div>
          <div className={'w-[100%] lg:w-[49%] mt-4'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              Two Factor Authentication
            </Typography>
            <div className={'w-full flex justify-between items-center'}>
              <Typography className={'text-[1rem] font-[400]'}>
                Status: {
                tfaStatus ?
                  <span className={'text-success font-[700]'}>Active!</span>
                  :
                  <span className={'text-error font-[700]'}>Not Active!</span>
              }
              </Typography>
              {
                tfaStatus ?
                  <ButtonUi onClick={() => TFADeActivator()} variant={'outlined'}
                            className={`w-[127px] h-[42px] ${classes.button}`}>
                    Deactivate
                  </ButtonUi>
                  :
                  <ButtonUi onClick={() => dispatch((setModal({visible: true, id: 'activate'})))} variant={'outlined'}
                            className={`w-[127px] h-[42px] ${classes.button}`}>
                    Activate
                  </ButtonUi>
              }

            </div>
          </div>
          <div className={'w-[100%] lg:w-[49%] mt-4'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              New Password Confirmation
            </Typography>
            <Controller
              name="newPasswordConfirmation"
              control={control}
              render={({field}) => <PasswordInputUi {...field} placeholder={'New Password Confirmation'}
                                                 inputClassName={`${classes.inputStyle}`}/>}
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
      {
        !tfaStatus && modal?.id === 'activate' && modal?.visible === true && <TFAuthentication/>
      }
    </section>
  );
}
