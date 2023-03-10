import React from "react";
import useStyles from "./YourPlatform.styles";
import {Typography} from "@mui/material";
import industrySvg from '../../../../assets/images/industry-best-practices.svg'
import industryDarkSvg from '../../../../assets/images/industry-best-practices-dark.svg'
import protectedSvg from '../../../../assets/images/protected-by-insurance.svg'
import protectedDarkSvg from '../../../../assets/images/protected-by-insurance-dark.svg'
import secureSvg from '../../../../assets/images/secure-storage.svg'
import secureDarkSvg from '../../../../assets/images/secure-storage-dark.svg'

import {useSelector} from "react-redux";

export default function YourPlatform(props) {
    const {theme} = useSelector((s) => s.app);
    const classes = useStyles();
    const secureUrl = theme === 'light' ? secureSvg : secureDarkSvg;
    const protectedUrl = theme === 'light' ? protectedSvg : protectedDarkSvg;
    const industryUrl = theme === 'light' ? industrySvg : industryDarkSvg;
    return (
        <section className={"text-gray-600 body-font " + classes.body}>
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <Typography variant={'h1'} className={"font-[700] text-[35px] sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 " + classes.textColor}>
                        Your trusted cryptocurrency platform
                    </Typography>
                    <Typography className={"font-[400] text-[20px] text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s " + classes.textColor}>Blue bottle
                        Here are a few reasons why you should choose 3co
                    </Typography>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 w-full md:w-1/3 flex flex-col text-center items-center">
                        <div
                            className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                            <img src={secureUrl} />
                        </div>
                        <div className="flex-grow">
                            <Typography color={'primary'} className={'font-[500] text-[18px] mb-[20px]'} variant={'h2'}>Security</Typography>
                            <Typography color={'text.primary'}>
                                Our exchange has robust security measures in place to protect user accounts and assets. This includes measures such as two-factor authentication, cold storage for digital assets, and regular security audits.
                            </Typography>
                        </div>
                    </div>
                    <div className="p-4 w-full  md:w-1/3 flex flex-col text-center items-center">
                        <div
                            className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                            <img src={protectedUrl}/>
                        </div>
                        <div className="flex-grow">
                            <Typography color={'primary'} className={'font-[500] text-[18px] mb-[20px]'} variant={'h2'}>Fast transaction processing</Typography>
                            <Typography color={'text.primary'}>
                                Our exchange has a robust infrastructure in place to ensure fast and efficient processing of transactions. This can be especially important for those looking to take advantage of market fluctuations and trade quickly.
                            </Typography>
                        </div>
                    </div>
                    <div className="p-4 w-full md:w-1/3 flex flex-col text-center items-center">
                        <div
                            className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                            <img src={industryUrl} />
                        </div>
                        <div className="flex-grow">
                            <Typography color={'primary'} className={'font-[500] text-[18px] mb-[20px]'} variant={'h2'}>User-friendly interface</Typography>
                            <Typography color={'text.primary'}>
                                Our exchange has a clean, intuitive interface that makes it easy for users to buy and sell cryptocurrencies. This can be especially appealing for those new to the world of cryptocurrency.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}