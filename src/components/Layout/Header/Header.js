import React, { useEffect, useState } from "react";
import Logo from "../../Logo";
import DarkSvg from "../../../assets/icons/dark.svg";
import LightSvg from "../../../assets/icons/light.svg";
import NotificationsSvg from "../../../assets/icons/notifications.svg";
import UsersSvg from "../../../assets/icons/users.svg";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { ThemeTypes } from "../../../constants/themeTypes.enum";
import { setTheme } from "../../../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "./styles";
import ButtonUi from "../../UiKit/ButtonUi";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import routes from "../../../configs/routes";
import { AlignHorizontalLeft } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../../hooks/useAuth";

const Header = (props) => {
  const classes = useStyles();
  const { theme } = useSelector((s) => s.app);
  const { user } = useSelector((s) => s);
  const { headerSidebar } = useSelector((s) => s.layoutSettings);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const themeChangeHandler = (theme) => {
    dispatch(setTheme(theme));
  };
  useEffect(() => {}, [dispatch]);
  const [open, setOpen] = useState();
  const [headerSidebarOpen, setHeaderSidebarOpen] = useState();
  const MenuCustomItem = ({ color, title, children }) => {
    return (
      <ButtonUi
        color="textColor"
        disableTouchRipple
        disableRipple
        variant={"text"}
        hover={false}
        className={classes.menuItemCustom}
      >
        {children}
        <Typography color={color} className={"ml-3 text-xs"}>
          {title}
        </Typography>
      </ButtonUi>
    );
  };
  const ProfileButtons = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openProfileMenu = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
        <div className={"flex items-center"}>
          <Typography>Balance:</Typography>
          <ButtonUi
            color="textColor"
            variant={"text"}
            onClick={() => navigate("/wallet")}
            className={`mr-3 ${classes.balance}`}
          >
            0.00 USDT
          </ButtonUi>
        </div>
        <ButtonUi
          color="textColor"
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
        <ButtonUi
          color="textColor"
          sx={{ minWidth: "auto" }}
          className={"mr-3"}
        >
          <img src={NotificationsSvg} />
        </ButtonUi>
        <Button
          color="textColor"
          onClick={handleClick}
          aria-controls={openProfileMenu ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openProfileMenu ? "true" : undefined}
          sx={{ minWidth: "auto" }}
        >
          <img src={UsersSvg} />
        </Button>
        <Menu
          className={classes.menuStyles}
          anchorEl={anchorEl}
          id="account-menu"
          open={openProfileMenu}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem disableTouchRipple>
            <Typography className={"text-base font-bold w-full text-center"}>
              {user?.user?.fullName}
            </Typography>
          </MenuItem>
          <MenuItem disableTouchRipple>
            <Typography
              className={"w-full text-center opacity-50"}
              color={"text.main"}
            >
              {user?.user?.email}
            </Typography>
          </MenuItem>
          <MenuItem disableTouchRipple onClick={() => navigate("/profile")}>
            <MenuCustomItem color={"textColor"} title={"Profile"}>
              <PersonIcon color={"icons"} />
            </MenuCustomItem>
          </MenuItem>
          <MenuItem disableTouchRipple onClick={() => navigate("/wallet")}>
            <MenuCustomItem color={"textColor"} title={"My Wallet"}>
              <AccountBalanceWalletIcon color={"icons"} />
            </MenuCustomItem>
          </MenuItem>
          <MenuItem disableTouchRipple onClick={() => logOut()}>
            <MenuCustomItem color={"error"} title={"Logout"}>
              <LogoutIcon color={"error"} />
            </MenuCustomItem>
          </MenuItem>
        </Menu>
      </>
    );
  };
  const LoginButtons = () => {
    return (
      <>
        <ButtonUi
          onClick={() => navigate("/login")}
          className={"mr-3 font-bold " + classes.loginBtn}
          color="textColor"
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
          color="textColor"
          sx={{ minWidth: "auto" }}
          onClick={() => {
            theme === "light"
              ? themeChangeHandler(ThemeTypes.dark)
              : themeChangeHandler(ThemeTypes.light);
          }}
        >
          <img src={theme === "light" ? DarkSvg : LightSvg} />
        </ButtonUi>
        <ButtonUi
          color="textColor"
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            minWidth: "auto",
          }}
        >
          <img src={NotificationsSvg} />
        </ButtonUi>
      </>
    );
  };
  const ButtonsHandler = () => {
    if (user?.token) {
      return <ProfileButtons />;
    } else {
      return <LoginButtons />;
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfileMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav className={`body-font z-10 relative ${classes.header}`}>
        <div
          className={
            "mx-auto container w-full px-2 sm:px-5 lg:px-5 border-0 border-b border-solid lg:border-0"
          }
        >
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex gap-[10px] items-center lg:hidden">
              <ButtonUi
                color="textColor"
                sx={{ minWidth: "auto" }}
                onClick={() => {
                  theme === "light"
                    ? themeChangeHandler(ThemeTypes.dark)
                    : themeChangeHandler(ThemeTypes.light);
                }}
              >
                <img src={theme === "light" ? DarkSvg : LightSvg} />
              </ButtonUi>
              <ButtonUi color="textColor" sx={{ minWidth: "auto" }}>
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
              <div className={"flex items-center"}>
                <ButtonsHandler />
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
          className={`flex flex-col items-center text-base ${
            user?.token ? "h-[560px]" : "h-[410px]"
          } overflow-auto ${classes.menuBg}`}
        >
          {user?.token ? (
            <>
              <div
                className={`h-full ${classes.menuStyles} ${classes.menuStylesResponsive}`}
              >
                <MenuItem disableTouchRipple>
                  <div>
                    <Typography
                      className={"text-base font-bold w-full text-center"}
                    >
                      {user?.user?.fullName}
                    </Typography>
                    <Typography
                      className={"w-full text-center opacity-50 mt-1"}
                      color={"text.main"}
                    >
                      {user?.user?.email}
                    </Typography>
                  </div>
                </MenuItem>
                <MenuItem
                  disableTouchRipple
                  onClick={() => {
                    setOpen(false);
                    navigate("/profile");
                  }}
                >
                  <MenuCustomItem color={"textColor"} title={"Profile"}>
                    <PersonIcon color={"icons"} />
                  </MenuCustomItem>
                </MenuItem>
                <MenuItem
                  disableTouchRipple
                  onClick={() => {
                    setOpen(false);
                    navigate("/wallet");
                  }}
                >
                  <MenuCustomItem color={"textColor"} title={"My Wallet"}>
                    <AccountBalanceWalletIcon color={"icons"} />
                  </MenuCustomItem>
                </MenuItem>
                <MenuItem
                  disableTouchRipple
                  onClick={() => {
                    setOpen(false);
                    logOut();
                  }}
                >
                  <MenuCustomItem color={"error"} title={"Logout"}>
                    <LogoutIcon color={"error"} />
                  </MenuCustomItem>
                </MenuItem>
              </div>
              <div className={"flex w-full mt-5"}>
                <Divider sx={{ width: "100%" }} />
              </div>
            </>
          ) : (
            <>
              <ButtonUi
                onClick={() => {
                  setOpen(false);
                  navigate("/register");
                }}
                className={"mr-3 mt-5 w-full max-w-[300px]"}
                variant={"contained"}
              >
                Register
              </ButtonUi>
              <ButtonUi
                onClick={() => {
                  setOpen(false);
                  navigate("/login");
                }}
                className={"mr-3 " + classes.loginBtn}
              >
                Login
              </ButtonUi>
            </>
          )}
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
            paper: `top-[65px] shadow-none ${classes.drawer}`,
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
