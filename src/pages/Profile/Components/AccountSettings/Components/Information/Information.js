import React, {useEffect, useMemo, useState} from "react";
import useStyles from "./Information.styles";
import {Controller, useFormContext} from "react-hook-form";
import InputUi from "../../../../../../components/UiKit/InputUi";
import {Typography} from "@mui/material";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";
import {useDispatch, useSelector} from "react-redux";
import useAuth from "../../../../../../hooks/useAuth";
import AutocompleteUi from "../../../../../../components/UiKit/AutocompleteUi/AutocompleteUi";
import _ from "@lodash";

export default function PopularMarketsList() {
  const methods = useFormContext();
  const {control, reset, formState, watch, getValues} = methods;
  const {errors, isValid, dirtyFields} = formState;
  const classes = useStyles();
  const {updateUser, getUser} = useAuth();
  const {user} = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const onSubmit = async(data) => {
    await updateUser(data)
  };
  useEffect( () => {
    reset(user);
  }, [user])
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
              render={({field}) =>
                <>
                  <InputUi
                    {...field}
                    id={'fullName'}
                    placeholder={'Full Name'}
                    error={!!errors.fullName}
                    className={`${classes.inputStyle}`}/>
                </>
              }
            />
            <span className={'h-[30px] text-error flex items-center'}>
              {errors?.fullName?.message}
            </span>
          </div>
          <div className={'w-[100%] lg:w-[49%] mt-4 lg:mt-0'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              Email Address
            </Typography>
            <Controller
              name="email"
              control={control}
              render={({field}) => <InputUi disabled {...field} id={'email'} placeholder={'Email Address'}
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
              render={({field}) => <AutocompleteUi id={'language'} options={
                [
                  {label: 'English', value: 'English'},
                ]
              } {...field} value={'English'} disabled placeholder={'Language'} className={`${classes.inputStyle}`}/>}
            />
          </div>
          <div className={'w-[100%] lg:w-[49%] mt-4'}>
            <Typography className={'mb-3 font-[700] text-[1rem]'} color={'text.primary'}>
              Currency
            </Typography>
            <Controller
              name="currency"
              control={control}
              render={({field}) => <AutocompleteUi autocomplete="new-password" id={'currency'} options={
                [
                  {label: 'USD', value: 'USD'},
                ]
              } {...field} value={'USD'} disabled placeholder={'Currency'} className={`${classes.inputStyle}`}/>}
            />
          </div>
          <div className={'w-full flex justify-end'}>
            <ButtonUi
              disabled={_.isEmpty(dirtyFields) || !isValid}
              onClick={() => onSubmit(getValues())} variant={'contained'}
                      className={`w-full lg:w-[127px] h-[42px] mt-5 ${classes.button}`}>
              Update
            </ButtonUi>
          </div>
        </div>
      </div>
    </section>
  );
}
