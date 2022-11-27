import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import PagesLayout from "../../../../components/PagesLayout";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import CollapseUi from "../../../../components/UiKit/CollapseUi/CollapseUi";
import routes from "../../../../configs/routes";
import useStyles from "./AssetsLayout.style";

export default function AssetsLayout({ pages, ...props }) {
  const classes = useStyles();
  return (
    <PagesLayout
      className={classes.body}
      sidebar={
        <div className="flex flex-col gap-[10px]">
          <WalletLink activeDisable className="px-0 py-0" to={``}>
            <ButtonUi
              className={`py-[18px] text-[20px] font-bold rounded-[10px] leading-none ${
                IsActive("") ? classes.activeOverview : classes.overview
              }`}
              variant="outlined"
            >
              Overview
            </ButtonUi>
          </WalletLink>
          <BoxUi className={`flex gap-[10px] flex-col`}>
            <WalletCollapse name="Spot">
              <WalletLink to={routes.wallet.assets}>Assets</WalletLink>
              <WalletLink to={routes.wallet.deposit}>Deposit</WalletLink>
              <WalletLink to={routes.wallet.withdraw}>Withdraw</WalletLink>
            </WalletCollapse>
            <WalletLink
              activeDisable
              to={routes.wallet.financial}
              className="px-0 py-0"
            >
              <Button
                className={`h-full rounded-[15px] flex justify-between px-[20px] gap-[10px] h-[45px] normal-case text-[15px] border-b-0  font-bold ${classes.CollapseUiButton} ${
                  IsActive(routes.wallet.financial)
                    ? classes.activeOverview
                    : classes.overview
                }`}
              >
                Financial
              </Button>
            </WalletLink>
            <WalletCollapse name="History">
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

const WalletLink = ({ className, activeDisable, to, ...props }) => {
  const classes = useStyles();
  const linkClassName = `px-[20px] flex flex-col py-[4px] text-[15px] ${
    classes.CollapseLink
  } ${
    IsActive(to) && !activeDisable ? `${classes.activeLink}` : ""
  } ${className}`;
  return <Link {...props} to={to} className={`${linkClassName}`} />;
};

const WalletCollapse = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <CollapseUi
      {...props}
      className={`border-0`}
      classes={{
        button: `border-b-0  font-bold ${classes.CollapseUiButton}`,
        vector: classes.vector,
      }}
    >
      <div className={`p-[15px] flex flex-col gap-[10px]`}>{children}</div>
    </CollapseUi>
  );
};

const IsActive = (path) => {
  let { pathname } = useLocation();
  if (Array.isArray(path)) {
    let active;
    path.forEach(() => {
      if (`${routes.wallet.index}/${path}` === pathname) {
        active = true;
      }
    });
    return active;
  } else {
    return `${routes.wallet.index}${path ? "/" + path : ""}` === pathname;
  }
};
