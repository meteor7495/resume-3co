import React from "react";
import useStyles from "./TradeNow.styles";
import {Typography} from "@mui/material";
import TradeNowSvg from '../../../../assets/images/trade-now.svg'
import ButtonUi from "../../../../components/UiKit/ButtonUi";

export default function TradeNow() {
    const classes = useStyles();

    return (
        <section className={"text-gray-600 lg:py-[56px] " + classes.background}>
            <div
                className={"container mx-auto  px-5 md:flex-row flex-col items-center"}>
                <div className={`${classes.body} flex flex-col lg:flex-row w-full lg:px-[62px] lg:py-[36px] px-[32px] py-[18px]`}>
                    <div className="lg:w-1/5 mb-10 lg:mb-0">
                        <img className="lg:max-w-[170px] w-full object-cover object-center rounded" alt="hero"
                             src={TradeNowSvg}/>
                    </div>
                    <div
                        className="lg:w-4/5 flex flex-col md:items-start md:text-left items-center text-center">
                        <Typography variant={'h1'} className={classes.title}>
                            Your go-to crypto platform
                        </Typography>
                        <Typography className={classes.text}>
                            3Co Exchange is a platform that allows users to buy, sell, and trade a wide range of cryptocurrencies. We prioritize security at 3Co Exchange, with robust measures in place to protect user accounts and assets, including two-factor authentication and cold storage. Our exchange also has a user-friendly interface, making it easy for users of all experience levels to buy and sell cryptocurrencies. In addition, we offer a wide range of cryptocurrencies, including both major coins and smaller, niche coins, giving users a diverse range of options to choose from. We also aim to offer competitive fees and have a robust infrastructure in place to ensure fast and efficient transaction processing. Whether you're a seasoned crypto trader or new to the world of cryptocurrency, 3Co Exchange is an excellent choice for buying, selling, and trading digital assets.
                        </Typography>
                        <div className="flex justify-center">
                            <ButtonUi variant={'contained'} className={classes.button}>
                                Trade now
                            </ButtonUi>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
