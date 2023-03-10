import React from "react";
import useStyles from './MessageCenter.styles'
import {Route, Routes} from "react-router-dom";
import TicketsList from "./Components/TicketsList/TicketsList.component";
import TicketDetails from "./Components/TicketDetails/TicketDetails.component";
import SubmitTicket from "./Components/SubmitTicket/SubmitTicket.component";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import withReducer from "../../../../store/withReducer";
import reducer from "./Store";


function MessageCenter() {
  const classes = useStyles();
  const schema = yup.object().shape({
    issue: yup.object().required('Please select on of the issues'),
    description: yup.string().required('Please enter your description'),
    coin: yup.string().default(''),
    txId: yup.string().default(''),
    amount: yup.string().default(''),
    depositAddress: yup.string().default(''),
    attachment: yup.string(),
  });
  const messageCenterMethods = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  return (
    <div className="lg:w-[calc(80%-10px)] w-full object-cover object-center rounded-lg">
      <Routes>
        <Route path={'/:id'} element={<TicketDetails/>}/>
        <Route path={'/submit-ticket'} element={
          <FormProvider {...messageCenterMethods}>
            <SubmitTicket/>
          </FormProvider>
        }/>
        <Route path={'/'} element={<TicketsList/>}/>
      </Routes>
    </div>
  );
}
export default withReducer("messageCenter", reducer)(MessageCenter);
