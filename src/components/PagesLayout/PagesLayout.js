import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSettings } from "../../store/LayoutSettings";
import useStyles from "./styles";

const PagesLayout = ({ children, className, Sidebar, ...props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!!Sidebar) {
      dispatch(
        setSettings({
          headerSidebar: (setOpen) => (
            <div className={`pt-[15px] pb-[20px] flex flex-col`}>
              <Sidebar responsive setClose={() => setOpen((o) => !o)} />
            </div>
          ),
        })
      );
    }
  }, [dispatch, Sidebar]);
  return (
    <div {...props} className={`${classes.body} ${className}`}>
      <div
        className={`p-[15px] lg:p-[20px] pb-[24px] mx-auto container h-full ${
          !!Sidebar ? "flex gap-[10px] " : ""
        }`}
      >
        {!!Sidebar && (
          <div className={`hidden lg:block flex-[1]`}>
            <Sidebar />
          </div>
        )}
        {!!Sidebar ? <div className={`flex-[4]`}>{children}</div> : children}
      </div>
    </div>
  );
};

export default PagesLayout;
