import React, {useEffect} from "react";
import Logo from "../../Logo";
import DarkSvg from '../../../assets/icons/dark.svg'
import NotificationsSvg from '../../../assets/icons/notifications.svg'
import {Button} from "@mui/material";

const Header = (props) => {

    useEffect(() => {
    }, []);

    return (
        <header className="text-gray-600 body-font border-0 border-b border-solid">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Logo/>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-black">Home</a>
                    <a className="mr-5 hover:text-gray-900">Exchange</a>
                    <a className="mr-5 hover:text-gray-900">Trade Bot</a>
                    <a className="mr-5 hover:text-gray-900">NFT Market</a>
                    <a className="mr-5 hover:text-gray-900">DEX</a>
                    <a className="mr-5 hover:text-gray-900">Margin</a>
                    <a className="mr-5 hover:text-gray-900">Assets</a>
                </nav>
                <div>
                    <Button>
                        Login
                    </Button>
                    <Button variant={'contained'}>
                        Register
                    </Button>
                    <Button>
                        <img src={DarkSvg}/>
                    </Button>
                    <Button>
                        <img src={NotificationsSvg}/>
                    </Button>
                </div>
            </div>
        </header>
    );
};
export default Header;

