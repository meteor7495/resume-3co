import React, { useEffect, Fragment, useState } from "react";
import Logo from "../../Logo";
import DarkSvg from "../../../assets/icons/dark.svg";
import LightSvg from "../../../assets/icons/light.svg";
import NotificationsSvg from "../../../assets/icons/notifications.svg";
import { Button, Drawer, IconButton } from "@mui/material";
import { ThemeTypes } from "../../../constants/themeTypes.enum";
import { setTheme } from "../../../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "./styles";
import ButtonUi from "../../UiKit/ButtonUi";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import routes from "../../../configs/routes";
import { AlignHorizontalLeft } from "@mui/icons-material";

const Header = (props) => {
  const classes = useStyles();
  const { theme } = useSelector((s) => s.app);
  const { headerSidebar } = useSelector((s) => s.layoutSettings);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const themeChangeHandler = (theme) => {
    dispatch(setTheme(theme));
  };
  useEffect(() => {}, [dispatch]);
  const [open, setOpen] = useState();
  const [headerSidebarOpen, setHeaderSidebarOpen] = useState();
  return (
    <>
      <nav className={"body-font z-10 relative"}>
        <div
          className={
            "mx-auto container px-2 sm:px-6 lg:px-8 border-0 border-b border-solid lg:border-0 " +
            classes.header
          }
        >
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex gap-[10px] items-center lg:hidden">
              <ButtonUi
                sx={{ minWidth: "auto" }}
                onClick={() => {
                  theme === "light"
                    ? themeChangeHandler(ThemeTypes.dark)
                    : themeChangeHandler(ThemeTypes.light);
                }}
              >
                <img src={theme === "light" ? DarkSvg : LightSvg} />
              </ButtonUi>
              <ButtonUi sx={{ minWidth: "auto" }}>
                <img src={NotificationsSvg} />
              </ButtonUi>
              {/* Mobile menu button*/}
              {headerSidebar && (
                <IconButton
                  className={
                    "border-0 inline-flex items-center justify-center rounded-md p-[10px] w-fit text-black " +
                    classes.buttonColor
                  }
                  onClick={() => setHeaderSidebarOpen((o) => !o)}
                >
                  {headerSidebarOpen ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AlignHorizontalLeft
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </IconButton>
              )}
              <IconButton
                className={
                  "border-0 inline-flex items-center justify-center rounded-md p-[10px] w-fit text-black " +
                  classes.buttonColor
                }
                onClick={() => setOpen((o) => !o)}
              >
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </IconButton>
            </div>
            <div className="flex flex-1 items-center justify-start lg:justify-center lg:items-center">
              <div className="flex items-center">
                <Link
                  to={"/"}
                  className="flex title-font font-medium items-center text-gray-900"
                >
                  <Logo />
                </Link>
              </div>
              <div className="hidden sm:ml-6 lg:block w-full">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-center justify-center">
                  <Link to={"/"} className={"mr-5 " + classes.link}>
                    Home
                  </Link>
                  <Link to={routes.exchange} className={"mr-5 " + classes.link}>
                    Exchange
                  </Link>
                  <Link to={"#"} className={"mr-5 " + classes.link}>
                    Trade Bot
                  </Link>
                  <Link to={"#"} className={"mr-5 " + classes.link}>
                    NFT Market
                  </Link>
                  <Link to={"#"} className={"mr-5 " + classes.link}>
                    DEX
                  </Link>
                  <Link to={"#"} className={"mr-5 " + classes.link}>
                    Margin
                  </Link>
                  <Link
                    to={routes.wallet.index}
                    className={"mr-5 " + classes.link}
                  >
                    Assets
                  </Link>
                  <ButtonUi variant="outlined">Financial</ButtonUi>
                </nav>
              </div>
            </div>
            <div className="absolute hidden lg:flex inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div>
                <ButtonUi
                  onClick={() => navigate("/login")}
                  className={"mr-3 " + classes.loginBtn}
                >
                  Login
                </ButtonUi>
                <ButtonUi
                  onClick={() => navigate("/register")}
                  className={"mr-3"}
                  variant={"contained"}
                >
                  Register
                </ButtonUi>
                <ButtonUi
                  className={"mr-3"}
                  sx={{ minWidth: "auto" }}
                  onClick={() => {
                    theme === "light"
                      ? themeChangeHandler(ThemeTypes.dark)
                      : themeChangeHandler(ThemeTypes.light);
                  }}
                >
                  <img src={theme === "light" ? DarkSvg : LightSvg} />
                </ButtonUi>
                <ButtonUi sx={{ minWidth: "auto" }}>
                  <img src={NotificationsSvg} />
                </ButtonUi>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Drawer
        open={open}
        anchor="top"
        onClose={() => setOpen(false)}
        classes={{
          paper: `top-[65px] shadow-none`,
        }}
        className={`lg:hidden top-[65px]`}
        ModalProps={{
          BackdropProps: {
            classes: {
              root: `top-[65px]`,
            },
          },
        }}
      >
        <nav
          className={
            " flex flex-col  flex-wrap items-center text-base justify-center " +
            classes.menuBg
          }
        >
          <Link
            onClick={() => setOpen(false)}
            to={"/"}
            className={"lg:mr-5 mb-3 lg:mb-0 mt-3 lg:mt-0 " + classes.link}
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to={routes.exchange}
            className={"lg:mr-5 mb-3 lg:mb-0 " + classes.link}
          >
            Exchange
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to={"#"}
            className={"lg:mr-5 mb-3 lg:mb-0 " + classes.link}
          >
            Trade Bot
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to={"#"}
            className={"lg:mr-5 mb-3 lg:mb-0 " + classes.link}
          >
            NFT Market
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to={"#"}
            className={"lg:mr-5 mb-3 lg:mb-0 " + classes.link}
          >
            DEX
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to={"#"}
            className={"lg:mr-5 mb-3 lg:mb-0 " + classes.link}
          >
            Margin
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to={routes.wallet.index}
            className={"lg:mr-5 mb-3 lg:mb-0 " + classes.link}
          >
            Assets
          </Link>
          <ButtonUi className={"mb-3 lg:mb-0"} variant="outlined">
            Financial
          </ButtonUi>
        </nav>
      </Drawer>
      {headerSidebar && (
        <Drawer
          open={headerSidebarOpen}
          anchor="top"
          onClose={() => setHeaderSidebarOpen(false)}
          classes={{
            paper: `top-[65px] shadow-none`,
          }}
          className={`lg:hidden top-[65px]`}
          ModalProps={{
            BackdropProps: {
              classes: {
                root: `top-[65px]`,
              },
            },
          }}
        >
          {headerSidebar(setHeaderSidebarOpen)}
        </Drawer>
      )}
      {/*<header className={"body-font border-0 border-b border-solid " + classes.header}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Logo/>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to={'/'} className={"mr-5 " + classes.link}>
                            Home
                        </Link>
                        <Link to={'/exchange'} className={"mr-5 " + classes.link}>Exchange</Link>
                        <Link to={'#'} className={"mr-5 " + classes.link}>Trade Bot</Link>
                        <Link to={'#'} className={"mr-5 " + classes.link}>NFT Market</Link>
                        <Link to={'#'} className={"mr-5 " + classes.link}>DEX</Link>
                        <Link to={'#'} className={"mr-5 " + classes.link}>Margin</Link>
                        <Link to={'#'} className={"mr-5 " + classes.link}>Assets</Link>
                        <ButtonUi variant="outlined">
                            Financial
                        </ButtonUi>
                    </nav>
                    <div>
                        <ButtonUi className={'mr-3 ' + classes.loginBtn}>
                            Login
                        </ButtonUi>
                        <ButtonUi className={'mr-3'} variant={'contained'}>
                            Register
                        </ButtonUi>
                        <ButtonUi className={'mr-3'}
                                  sx={{minWidth :'auto'}}
                                  onClick={() => {
                                      theme === 'light' ? themeChangeHandler(ThemeTypes.dark) : themeChangeHandler(ThemeTypes.light)
                                  }}
                        >
                            <img src={theme === 'light' ? DarkSvg : LightSvg}/>
                        </ButtonUi>
                        <ButtonUi
                            sx={{minWidth :'auto'}}
                        >
                            <img src={NotificationsSvg}/>
                        </ButtonUi>
                    </div>
                </div>
            </header>*/}
    </>
  );
};
export default Header;
