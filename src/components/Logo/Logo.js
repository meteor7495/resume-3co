import React from "react";
import LogoSVG from '../../assets/images/logo.svg'
import DarkLogoSvg from '../../assets/images/dark-logo.svg'
import {useSelector} from "react-redux";

export default function Logo() {
    const {theme} = useSelector((s) => s.app);
    return (
        <img src={theme === 'light' ? LogoSVG : DarkLogoSvg} alt={'Logo'}/>
    );
}
