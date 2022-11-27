import React from "react";
import useStyles from "./Welcome.styles";
import WelcomeSvg from '../../../../assets/images/welcome-background.png'
import WelcomeDarkSvg from '../../../../assets/images/welcome-background-dark.png'
import BusinessDealSvg from '../../../../assets/images/business-deal.svg'
import BusinessDealDarkSvg from '../../../../assets/images/business-deal-dark.svg'
import {useSelector} from "react-redux";
import {Button, Typography} from "@mui/material";
import InputUi from "../../../../components/UiKit/InputUi/InputUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";

export default function Welcome(props) {
    const classes = useStyles();
    const {theme} = useSelector((s) => s.app);
    const imageUrl = theme === 'light' ? BusinessDealSvg : BusinessDealDarkSvg;
    const backgroundUrl = theme === 'light' ? WelcomeSvg : WelcomeDarkSvg;
    return (
        <section className={"text-gray-600 body-font " + classes.body} style={{
            backgroundImage: 'url(' + backgroundUrl + ') ',
            backgroundSize: 'cover'
        }}>
            <div className="container w-full mx-auto flex px-5 py-8 lg:py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-left">
                    <Typography variant={'h1'} className={classes.title}>
                        Welcome to the <span>3Co Exchange</span>
                    </Typography>
                    <Typography className={classes.text}>
                        Buy and Sell Cryptocurrencies and Invest in 3Co Exchange . . .
                    </Typography>
                    <div className="flex justify-center lg:justify-start flex-wrap w-full">
                        <InputUi placeholder={'Email address'} className={`${classes.inputStyle}`}/>
                        <ButtonUi variant={'contained'} className={classes.button + ' ml-0 lg:ml-5'}>
                            Register
                        </ButtonUi>
                    </div>
                </div>
                <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-center rounded w-full" alt="hero" src={imageUrl}/>
                </div>
            </div>
            <div className="container hidden sm:hidden md:block mx-auto pb-[50px]">
                <div className="flex flex-wrap ">
                    <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div className="flex-grow">
                            <Typography className={classes.boxTitle}>$23 billion</Typography>
                            <Typography className={classes.boxText}>
                                24h trading volume on 3co exchange
                            </Typography>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div className="flex-grow">
                            <Typography className={classes.boxTitle}>5 million</Typography>
                            <Typography className={classes.boxText}>
                                Registered users
                            </Typography>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div className="flex-grow">
                            <Typography className={classes.boxTitle}> {"<"}0.2%</Typography>
                            <Typography className={classes.boxText}>
                                Low transaction fee
                            </Typography>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div className="flex-grow">
                            <Typography className={classes.boxTitle}>+230</Typography>
                            <Typography className={classes.boxText}>
                                Cryptocurrencies listed
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
