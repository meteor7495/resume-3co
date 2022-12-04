import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import Information from "./Components/Information/Information";
import Security from "./Components/Security/Security";
import useStyles from './Profile.styles'
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";


export default function Profile() {
  const informationSchema = yup.object().shape({
    firstName: yup.string().required('Enter FullName'),
    email: yup.string().required('Enter Email'),
  });
  const securitySchema = yup.object().shape({
    firstName: yup.string().required('Enter FullName'),
    email: yup.string().required('Enter Email'),
  });

  const informationMethods = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(informationSchema),
  });
  const securityMethods = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(securitySchema),
  });
  const classes = useStyles();
  return (
    <section className={"text-gray-600 body-font " + classes.body}>
      <div className="container px-2 sm:px-6 lg:px-8 py-6 lg:py-8 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full justify-between">
          <div className="hidden lg:flex lg:w-[20%] md:w-1/5">
            <SideBar/>
          </div>
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
        </div>
      </div>
    </section>
  );
}
