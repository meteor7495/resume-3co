import React, {useEffect, Fragment} from "react";
import Logo from "../../Logo";
import DarkSvg from '../../../assets/icons/dark.svg'
import LightSvg from '../../../assets/icons/light.svg'
import NotificationsSvg from '../../../assets/icons/notifications.svg'
import {Button} from "@mui/material";
import {ThemeTypes} from "../../../constants/themeTypes.enum";
import {setTheme} from "../../../store/appSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import useStyles from './styles'
import ButtonUi from "../../UiKit/ButtonUi";

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const Header = (props) => {
    const classes = useStyles();
    const {theme} = useSelector((s) => s.app);
    const dispatch = useDispatch();
    const themeChangeHandler = (theme) => {
        dispatch(setTheme(theme));
    };
    useEffect(() => {
    }, [dispatch]);
    return (
        <>
            <Disclosure as="nav"  className={"body-font " + classes.header}>
                {({ open }) => (
                    <>
                        <div className={"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-0 border-b border-solid lg:border-0 " + classes.header}>
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                                    <ButtonUi className={'mr-3'}
                                              sx={{minWidth :'auto'}}
                                              onClick={() => {
                                                  theme === 'light' ? themeChangeHandler(ThemeTypes.dark) : themeChangeHandler(ThemeTypes.light)
                                              }}
                                    >
                                        <img src={theme === 'light' ? DarkSvg : LightSvg}/>
                                    </ButtonUi>
                                    <ButtonUi
                                        className={'mr-3'}
                                        sx={{minWidth :'auto'}}
                                    >
                                        <img src={NotificationsSvg}/>
                                    </ButtonUi>
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className={"border-0 inline-flex items-center justify-center rounded-md p-2 text-black " + classes.buttonColor}>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-start lg:justify-center lg:items-center">
                                    <div className="flex items-center">
                                        <Link to={'/'} className="flex title-font font-medium items-center text-gray-900">
                                            <Logo/>
                                        </Link>
                                    </div>
                                    <div className="hidden sm:ml-6 lg:block w-full">
                                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-center justify-center">
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
                                    </div>
                                </div>
                                <div className="absolute hidden lg:flex inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
                            </div>
                        </div>

                        <Disclosure.Panel className={"lg:hidden"}>
                            <nav className={"absolute lg:ml-auto lg:mr-auto flex flex-col w-full z-10 flex-wrap items-center text-base justify-center " + classes.menuBg}>
                                <Link to={'/'} className={"lg:mr-5 mb-3 lg:mb-0 mt-3 lg:mt-0 " + classes.link}>
                                    Home
                                </Link>
                                <Link to={'/exchange'} className={"lg:mr-5 mb-3 lg:mb-0 " + classes.link}>Exchange</Link>
                                <Link to={'#'} className={"lg:mr-5 mb-3 lg:mb-0 " + classes.link}>Trade Bot</Link>
                                <Link to={'#'} className={"lg:mr-5 mb-3 lg:mb-0 " + classes.link}>NFT Market</Link>
                                <Link to={'#'} className={"lg:mr-5 mb-3 lg:mb-0 " + classes.link}>DEX</Link>
                                <Link to={'#'} className={"lg:mr-5 mb-3 lg:mb-0 " + classes.link}>Margin</Link>
                                <Link to={'#'} className={"lg:mr-5 mb-3 lg:mb-0 " + classes.link}>Assets</Link>
                                <ButtonUi className={'mb-3 lg:mb-0'} variant="outlined">
                                    Financial
                                </ButtonUi>
                            </nav>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
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

