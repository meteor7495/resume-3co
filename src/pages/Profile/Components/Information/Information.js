import React, {useEffect, useState} from "react";
import useStyles from "./Information.styles";
import {Controller, useFormContext} from "react-hook-form";
import InputUi from "../../../../components/UiKit/InputUi";
import {Typography} from "@mui/material";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import {showAlert} from "../../../../store/AlertsSlice";
import {AlertTypes} from "../../../../constants/alertTypes.enum";
import {useDispatch, useSelector} from "react-redux";
import BusinessDealSvg from "../../../../assets/images/business-deal.svg";
import BusinessDealDarkSvg from "../../../../assets/images/business-deal-dark.svg";
import WelcomeSvg from "../../../../assets/images/welcome-background.png";
import WelcomeDarkSvg from "../../../../assets/images/welcome-background-dark.png";
import useAuth from "../../../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import AutocompleteUi from "../../../../components/UiKit/AutocompleteUi/AutocompleteUi";

export default function PopularMarketsList() {
  const methods = useFormContext();
  const {control, formState, getValues} = methods;
  const {errors} = formState;

  const classes = useStyles();
  const {theme} = useSelector((s) => s.app);
  const imageUrl = theme === 'light' ? BusinessDealSvg : BusinessDealDarkSvg;
  const backgroundUrl = theme === 'light' ? WelcomeSvg : WelcomeDarkSvg;
  const [showPassword, setShowPassword] = useState(false)
  const {updateUser, getUser} = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = data => {
    updateUser(data)
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
  useEffect(async () => {
    const data = await getUser()
    console.log('datadatadata', data)
  }, [])
  return (
    <section className={"text-gray-600 body-font border border-solid " + classes.body}>
      <div className="container mx-auto flex flex-wrap py-5 lg:py-5 px-5 md:flex-row flex-col items-center">
        <div className={'w-full mb-6'}>
          <Typography className={'text-[1rem] font-[400] opacity-50 '}>
            Account Information
          </Typography>
        </div>
        <div className={'flex w-full justify-between flex-wrap'}>
          <div className={'w-[100%] lg:w-[49%]'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              Full Name
            </Typography>
            <Controller
              name="fullName"
              control={control}
              render={({field}) => <InputUi {...field} placeholder={'Full Name'}
                                            className={`${classes.inputStyle}`}/>}
            />
          </div>
          <div className={'w-[100%] lg:w-[49%] mt-4 lg:mt-0'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              Email Address
            </Typography>
            <Controller
              name="email"
              control={control}
              render={({field}) => <InputUi {...field} placeholder={'Email Address'}
                                            className={`${classes.inputStyle}`}/>}
            />
          </div>
          <div className={'w-[100%] lg:w-[49%] mt-4'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              Language
            </Typography>
            <Controller
              name="language"
              control={control}
              render={({field}) => <AutocompleteUi options={
                [
                  {label: 'English', value: 'English'},
                ]
              } {...field} placeholder={'Language'} className={`${classes.inputStyle}`}/>}
            />
          </div>
          <div className={'w-[100%] lg:w-[49%] mt-4'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              Currency
            </Typography>
            <Controller
              name="currency"
              control={control}
              render={({field}) => <AutocompleteUi options={
                [
                  {label: 'USD', value: 'USD'},
                ]
              } {...field} placeholder={'Currency'} className={`${classes.inputStyle}`}/>}
            />
          </div>
          <div className={'w-full flex justify-end'}>
            <ButtonUi onClick={() => onSubmit(getValues())} variant={'contained'}
                      className={`w-full lg:w-[127px] h-[42px] mt-5 ${classes.button}`}>
              Update
            </ButtonUi>
          </div>
        </div>
      </div>
    </section>
  );
}
