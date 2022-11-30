import React from "react";
import useStyles from "./SideBar.styles";
import {useSelector} from "react-redux";
import Item from "./Components/Item";

export default function SideBar(props) {
  const classes = useStyles();
  const {theme} = useSelector((s) => s.app);
  return (
    <section className={"text-gray-600 body-font border border-solid lg:h-[202px] sticky top-20 " + classes.body}>
      <div className="container justify-between flex-wrap h-full w-full mx-auto flex px-5 py-5 lg:py-5 md:flex-row flex-col items-center">
        <Item active>
          Account Settings
        </Item>
        <Item disabled>
          Message Center
        </Item>
        <Item disabled>
          Referral Rewards
        </Item>
      </div>
    </section>
  );
}
