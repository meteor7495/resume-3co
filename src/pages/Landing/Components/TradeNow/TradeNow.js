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
                        className="lg:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                        <Typography variant={'h1'} className={classes.title}>
                            Before they sold out
                        </Typography>
                        <Typography className={classes.text}>
                            With our fast and comfortable trading services, trade everywhere you can
                        </Typography>
                        <Typography className={classes.text}>
                            Low transaction fees {'< 0.2 % >'}
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
