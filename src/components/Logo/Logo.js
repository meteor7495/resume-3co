import React from "react";
import LogoSVG from '../../assets/images/logo.svg'

export default function Logo({data, options, type}) {
    return (
        <img src={LogoSVG} alt={'Logo'}/>
    );
}
