import React from "react";
import useStyles from "./SideBar.styles";
import { useSelector } from "react-redux";
import Item from "./Components/Item";
import { Link, useLocation, useNavigate } from "react-router-dom";
import routes from "../../../../../../configs/routes";
import { Button } from "@mui/material";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";

export default function SideBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section
      className={
        "text-gray-600 body-font border border-solid lg:h-[202px] sticky top-20 " +
        classes.body
      }
    >
      <div className="container justify-between flex-wrap gap-2 h-full w-full mx-auto flex px-5 py-5 lg:py-5 md:flex-row flex-col items-center">
        <Item
          status={location?.pathname === "/profile"}
          onClick={() => navigate("/profile")}
        >
          Account Settings
        </Item>
        <Item
          status={location?.pathname.includes("/profile/message-center")}
          onClick={() => navigate("/profile/message-center")}
        >
          Support
        </Item>
        <Item status={false} disabled>
          Referral Rewards
        </Item>
      </div>

      <ButtonUi
        onClick={() => navigate("/profile/message-center/submit-ticket")}
        variant="outlined"
        className={"mt-3 w-full h-[60px] rounded-[10px] text-base font-bold"}
      >
        Submit a Ticket
      </ButtonUi>
    </section>
  );
}
