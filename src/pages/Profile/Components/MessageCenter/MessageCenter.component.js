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
    firstName: yup.string().required('Enter FullName'),
    email: yup.string().required('Enter Email'),
  });
  const messageCentermethods = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  return (
    <div className="lg:w-[calc(80%-10px)] w-full object-cover object-center rounded-lg">
      <Routes>
        <Route path={'/:id'} element={<TicketDetails/>}/>
        <Route path={'/submit-ticket'} element={
          <FormProvider {...messageCentermethods}>
            <SubmitTicket/>
          </FormProvider>
        }/>
        <Route path={'/'} element={<TicketsList/>}/>
      </Routes>
    </div>
  );
}
export default withReducer("messageCenter", reducer)(MessageCenter);
