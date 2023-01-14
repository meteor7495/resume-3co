import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import PagesLayout from "../../../../components/PagesLayout";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import CollapseUi from "../../../../components/UiKit/CollapseUi/CollapseUi";
import routes from "../../../../configs/routes";
import useStyles from "./styles";
import { setSettings } from "../../../../store/LayoutSettings";
import TFAModale from "../TFAModale/TFAModale";
import FinancialModal from "../../pages/Financial/components/FinancialModal/FinancialModal";

export default function AssetsLayout({ pages, ...props }) {
  const classes = useStyles();
  return (
    <PagesLayout className={classes.body} Sidebar={Sidebar}>
      <Outlet />
      <TFAModale />
      <FinancialModal />
    </PagesLayout>
  );
}

const Sidebar = ({ responsive, setClose }) => {
  const classes = useStyles();
  const [open, setOpen] = useState("");
  let { pathname } = useLocation();
  const isActive = IsActive();
  useEffect(() => {
    if (
      isActive([
        routes.wallet.spot.assets,
        routes.wallet.spot.deposit,
        routes.wallet.spot.withdraw,
      ])
    ) {
      setOpen("spot");
    } else if (
      isActive([
        routes.wallet.history.allAssets,
        routes.wallet.history.deposit,
        routes.wallet.history.withdraw,
        routes.wallet.history.trade,
      ])
    ) {
      setOpen("history");
    }
  }, [pathname]);
  return (
    <div
      className={`flex flex-col gap-[10px] w-[200px] m-auto lg:m-0 lg:w-full`}
    >
      <Link
        onClick={setClose}
        to={responsive ? routes.wallet.index : ""}
        className={`flex flex-col ${classes.CollapseLink}`}
      >
        <Button
          className={`h-full rounded-[5px] lg:rounded-[10px] px-[20px] gap-[10px] h-[24px] lg:h-[60px] normal-case text-[14px] lg:text-[20px] border border-solid justify-center font-bold leading-none ${
            isActive("")
              ? `font-bold border border-solid ${classes.activeOverview}`
              : `border-0 lg:border ${classes.OverviewButton} ${classes.overview}`
          }`}
        >
          Overview
        </Button>
      </Link>
      <BoxUi
        className={`flex gap-[10px] flex-col border-0 p-0 lg:p-[10px] lg:border ${classes.body}`}
      >
        <WalletCollapse
          open={open === "spot"}
          setOpen={(o) => setOpen(o ? "spot" : "")}
          name="Spot"
        >
          <WalletLink
            setClose={setClose}
            responsive={responsive}
            to={routes.wallet.spot.assets}
          >
            Assets
          </WalletLink>
          <WalletLink
            setClose={setClose}
            responsive={responsive}
            to={routes.wallet.spot.deposit}
          >
            Deposit
          </WalletLink>
          <WalletLink
            setClose={setClose}
            responsive={responsive}
            to={routes.wallet.spot.withdraw}
          >
            Withdraw
          </WalletLink>
        </WalletCollapse>
        <WalletLink
          setClose={setClose}
          responsive={responsive}
          isButton
          className="font-bold"
          to={routes.wallet.financial}
          height={responsive ? 24 : 45}
          rounded={responsive ? 5 : 15}
        >
          Financial
        </WalletLink>
        <WalletCollapse
          open={open === "history"}
          setOpen={(o) => setOpen(o ? "history" : "")}
          name="History"
        >
          <WalletLink
            setClose={setClose}
            responsive={responsive}
            to={routes.wallet.history.allAssets}
          >
            All Assets
          </WalletLink>
          <WalletLink
            setClose={setClose}
            responsive={responsive}
            to={routes.wallet.history.deposit}
          >
            Deposit
          </WalletLink>
          <WalletLink
            setClose={setClose}
            responsive={responsive}
            to={routes.wallet.history.withdraw}
          >
            Withdraw
          </WalletLink>
          <WalletLink
            setClose={setClose}
            responsive={responsive}
            to={routes.wallet.history.trade}
          >
            Trade History
          </WalletLink>
        </WalletCollapse>
      </BoxUi>
    </div>
  );
};

const WalletLink = ({
  className,
  isButton,
  height,
  children,
  rounded,
  responsive,
  setClose,
  to,
  ...props
}) => {
  const classes = useStyles();
  const linkClassName = `flex flex-col ${classes.CollapseLink}`;
  const isActive = IsActive();
  return (
    <Link
      {...props}
      onClick={setClose}
      to={responsive ? `${routes.wallet.index}/${to}` : to}
      className={`${linkClassName}`}
    >
      <Button
        className={`h-full rounded-[${rounded ? rounded : 5}px] h-[${
          height ? height : responsive ? "24" : "30"
        }px] px-[20px] justify-center lg:justify-start gap-[10px] h-[45px] normal-case text-[15px] ${className} ${
          isActive(to)
            ? `font-bold border border-solid ${
                isButton ? classes.buttonActive : ""
              } ${classes.activeOverview}`
            : `${isButton ? classes.button : ""} ${classes.overview}`
        }`}
      >
        {children}
      </Button>
    </Link>
  );
};

const WalletCollapse = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <CollapseUi
      {...props}
      className={`border-0 ${classes.OverviewButton}`}
      classes={{
        button: `border-b-0 h-[24px] gap-0 lg:gap-[10px] lg:h-[45px] font-bold ${classes.CollapseUiButton}`,
        vector: ` ${classes.vector}`,
      }}
    >
      <div className={`pt-[15px] flex flex-col gap-[10px]`}>{children}</div>
    </CollapseUi>
  );
};

const IsActive = () => {
  let { pathname } = useLocation();
  const isActive = (path) => {
    if (Array.isArray(path)) {
      let active;
      path.forEach((p) => {
        if (`${routes.wallet.index}${p ? "/" + p : ""}` === pathname) {
          active = true;
        }
      });
      return active;
    } else {
      return `${routes.wallet.index}${path ? "/" + path : ""}` === pathname;
    }
  };
  return isActive;
};
