import React from "react";
import SideBar from "./Components/AccountSettings/Components/SideBar/SideBar";
import useStyles from './Profile.styles'
import {Route, Routes} from "react-router-dom";
import AccountSettings from './Components/AccountSettings/AccountSettings.component'
import MessageCenter from './Components/MessageCenter/MessageCenter.component'

export default function Profile() {
  const classes = useStyles();
  return (
    <section className={"body-font " + classes.body}>
      <div className="container px-2 sm:px-6 lg:px-8 py-6 lg:py-8 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full justify-between">
          <div className="hidden lg:flex lg:w-[20%] md:w-1/5">
            <SideBar/>
          </div>
          <Routes>
            <Route path={'/'} element={<AccountSettings/>}/>
            <Route path={'/message-center/*'} element={<MessageCenter/>}/>
          </Routes>
        </div>
      </div>
    </section>
  );
}
