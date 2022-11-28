import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import PagesLayout from "../../../../components/PagesLayout";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import CollapseUi from "../../../../components/UiKit/CollapseUi/CollapseUi";
import routes from "../../../../configs/routes";
import useStyles from "./styles";

export default function AssetsLayout({ pages, ...props }) {
  const classes = useStyles();
  const [open, setOpen] = useState("");
  const isActive = IsActive();
  useEffect(() => {
    if (
      isActive([
        routes.wallet.assets,
        routes.wallet.deposit,
        routes.wallet.withdraw,
      ])
    ) {
      setOpen("spot");
    } else if (
      isActive([
        routes.wallet.historyAllAssets,
        routes.wallet.historyDeposit,
        routes.wallet.historyWithdraw,
      ])
    ) {
      setOpen("history");
    }
  }, []);

  return (
    <PagesLayout
      className={classes.body}
      sidebar={
        <div className="flex flex-col gap-[10px]">
          <Link to={""} className={`flex flex-col ${classes.CollapseLink}`}>
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
          {/* <WalletLink
            isButton
            height={60}
            className={`text-[20px] border border-solid justify-center font-bold rounded-[10px] font-bold leading-none`}
            to={``}
            rounded={10}
          >
            Overview
          </WalletLink> */}
          <BoxUi className={`flex gap-[10px] flex-col`}>
            <WalletCollapse
              open={open === "spot"}
              setOpen={(o) => setOpen(o ? "spot" : "")}
              name="Spot"
            >
              <WalletLink to={routes.wallet.assets}>Assets</WalletLink>
              <WalletLink to={routes.wallet.deposit}>Deposit</WalletLink>
              <WalletLink to={routes.wallet.withdraw}>Withdraw</WalletLink>
            </WalletCollapse>
            <WalletLink
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
              <WalletLink to={routes.wallet.historyAllAssets}>
                All Assets
              </WalletLink>
              <WalletLink to={routes.wallet.historyDeposit}>Deposit</WalletLink>
              <WalletLink to={routes.wallet.historyWithdraw}>
                Withdraw
              </WalletLink>
            </WalletCollapse>
          </BoxUi>
        </div>
      }
    >
      <Outlet />
    </PagesLayout>
  );
}

const WalletLink = ({
  className,
  isButton,
  height,
  children,
  rounded,
  to,
  ...props
}) => {
  const classes = useStyles();
  const linkClassName = `flex flex-col ${classes.CollapseLink}`;
  const isActive = IsActive();
  return (
    <Link {...props} to={to} className={`${linkClassName}`}>
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
