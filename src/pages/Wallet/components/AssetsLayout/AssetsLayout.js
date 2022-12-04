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

export default function AssetsLayout({ pages, ...props }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSettings({
        headerSidebar: (setOpen) => (
          <Sidebar responsive setClose={() => setOpen((o) => !o)} />
        ),
      })
    );
  }, []);
  return (
    <PagesLayout className={classes.body} sidebar={<Sidebar />}>
      <Outlet />
    </PagesLayout>
  );
}

const Sidebar = ({ responsive, setClose }) => {
  const classes = useStyles();
  const [open, setOpen] = useState("");
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
      ])
    ) {
      setOpen("history");
    }
  }, []);
  return (
    <div className={`flex flex-col gap-[10px]`}>
      <Link
        onClick={setClose}
        to={responsive ? routes.wallet.index : ""}
        className={`flex flex-col ${classes.CollapseLink}`}
      >
        <Button
          className={`h-full rounded-[10px] h-[60px] px-[20px] justify-start gap-[10px] h-[45px] normal-case text-[15px] text-[20px] border border-solid justify-center font-bold rounded-[10px] font-bold leading-none ${
            isActive("")
              ? `font-bold border border-solid ${classes.buttonActive} ${classes.activeOverview}`
              : `${classes.OverviewButton} ${classes.overview}`
          }`}
        >
          Overview
        </Button>
      </Link>
      <BoxUi className={`flex gap-[10px] flex-col`}>
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
          className="h-[45px] font-bold"
          to={routes.wallet.financial}
          height={45}
          rounded={15}
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
  to = responsive ? `${routes.wallet.index}/${to}` : to;
  return (
    <Link {...props} onClick={setClose} to={to} className={`${linkClassName}`}>
      <Button
        className={`h-full rounded-[${rounded ? rounded : 5}px] h-[${
          height ? height : "30"
        }px] px-[20px] justify-start gap-[10px] h-[45px] normal-case text-[15px] ${className} ${
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
      className={`border-0`}
      classes={{
        button: `border-b-0 font-bold ${classes.CollapseUiButton}`,
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
