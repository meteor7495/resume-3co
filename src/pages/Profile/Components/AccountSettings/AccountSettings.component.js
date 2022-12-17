import React from "react";
import Information from "./Components/Information/Information";
import Security from "./Components/Security/Security";
import useStyles from './AccountSettings.styles'
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";


const informationSchema = yup.object().shape({
  fullName: yup.string().min(8).max(30).required('Enter FullName'),
  email: yup.string().required('Enter Email'),
});
const securitySchema = yup.object().shape({
  oldPassword: yup.string().min(8).max(30).required('Please enter your old password'),
  newPassword: yup.string().min(8).max(30).required('Please enter your new password'),
  newPasswordConfirmation: yup.string().min(8).max(30).required('Please enter your new password confirmation'),
});

export default function AccountSettings() {

  const informationMethods = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(informationSchema),
  });
  const securityMethods = useForm({
    mode: "onChange",
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      newPasswordConfirmation: '',
    },
    resolver: yupResolver(securitySchema),
  });
  const classes = useStyles();
  return (
    <div className="lg:w-[calc(80%-10px)] w-full object-cover object-center rounded-lg">
      <div>
        <FormProvider {...informationMethods}>
          <Information/>
        </FormProvider>
      </div>
      <div className={'w-full mt-[10px]'}>
        <FormProvider {...securityMethods}>
          <Security/>
        </FormProvider>
      </div>
    </div>
  );
}
