import React, {useEffect} from "react";
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
        <header className={"body-font border-0 border-b border-solid " + classes.header}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Logo/>
                </a>
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
                    <Button variant="outlined">
                        Financial
                    </Button>
                </nav>
                <div>
                    <Button className={'mr-3 ' + classes.loginBtn}>
                        Login
                    </Button>
                    <Button className={'mr-3'} variant={'contained'}>
                        Register
                    </Button>
                    <Button className={'mr-3'}
                        sx={{minWidth :'auto'}}
                        onClick={() => {
                            theme === 'light' ? themeChangeHandler(ThemeTypes.dark) : themeChangeHandler(ThemeTypes.light)
                        }}
                    >
                        <img src={theme === 'light' ? DarkSvg : LightSvg}/>
                    </Button>
                    <Button
                        sx={{minWidth :'auto'}}
                    >
                        <img src={NotificationsSvg}/>
                    </Button>
                </div>
            </div>
        </header>
    );
};
export default Header;

