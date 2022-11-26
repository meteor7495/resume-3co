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
  let { pathname } = useLocation();
  const isActive = (path) => {
    if (Array.isArray(path)) {
      let active;
      path.forEach(() => {
        if (`${routes.wallet.index}${path}` === pathname) {
          active = true;
        }
      });
      return active;
    } else {
      return `${routes.wallet.index}${path}` === pathname;
    }
  };
  const linkClassName = `px-[20px] p-y[6px] text-[15px] ${classes.CollapseLink}`;
  return (
    <PagesLayout
      className={classes.body}
      sidebar={
        <div className="flex flex-col gap-[10px]">
          <Link className="flex flex-col" to={``}>
            <ButtonUi
              className={`py-[18px] text-[20px] font-bold rounded-[10px] leading-none ${
                isActive("") ? classes.activeOverview : classes.overview
              }`}
              variant="outlined"
            >
              Overview
            </ButtonUi>
          </Link>
          <BoxUi className={`flex gap-[10px] flex-col`}>
            <WalletCollapse name="Spot">
              <div className={`p-[15px] flex flex-col gap-[10px]`}>
                <Link to={routes.wallet.assets} className={linkClassName}>
                  Assets
                </Link>
                <Link to={routes.wallet.deposit} className={linkClassName}>
                  Deposit
                </Link>
                <Link to={routes.wallet.withdraw} className={linkClassName}>
                  Withdraw
                </Link>
              </div>
            </WalletCollapse>
            <div
              className={` py-[11px] rounded-[15px] px-[20px] text-[15px] font-bold ${classes.CollapseUiButton}`}
            >
              Financial
            </div>
            <WalletCollapse name="Spot">
              <Link to={routes.wallet.withdraw} className={linkClassName}>
                Withdraw
              </Link>
            </WalletCollapse>
          </BoxUi>
        </div>
      }
    >
      <Outlet />
    </PagesLayout>
  );
}

const WalletCollapse = ({ ...props }) => {
  const classes = useStyles();
  return (
    <CollapseUi
      {...props}
      className={`border-0`}
      classes={{
        button: `border-b-0  font-bold ${classes.CollapseUiButton}`,
        vector: classes.vector,
      }}
    ></CollapseUi>
  );
};
