import React from "react";
import useStyles from "./PopularMarketsList.styles";
import BitcoinSvg from '../../../../assets/images/bitcoin.svg'
import EtherSvg from '../../../../assets/images/ethereum.svg'
import BNBSvg from '../../../../assets/images/bnb.svg'
import SolanaSvg from '../../../../assets/images/solana.svg'
import ArrowUp from '../../../../assets/icons/arrow-up.svg'
import ArrowDown from '../../../../assets/icons/arrow-down.svg'
import Charts from "../../../../components/Charts";
import {Typography} from "@mui/material";
import ButtonUi from "../../../../components/UiKit/ButtonUi";

export default function PopularMarketsList() {
    const classes = useStyles();
    const CoinName = ({url, name, shortName}) => {
        return (
            <>
                <img src={url}/>
                <span className={'ml-[13px] text-black font-bold'}>
                    {name}
                </span>
                <span className={'ml-[13px] opacity-50'}>
                    {shortName}
                </span>
            </>
        )
    }
    return (
        <section className={"text-gray-600 body-font " + classes.background}>
            <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow w-full flex flex-col mb-16 md:mb-0 items-center text-center px-16">
                    <Typography className={"title-font sm:text-[35px] font-[700] text-3xl mb-4 font-medium text-gray-900 " + classes.title}>
                        Popular crypt ocurrencies
                    </Typography>
                    <div className="flex flex-col w-full mt-[36px]">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-12 ">
                            <div className="inline-block min-w-full">
                                <div className="overflow-hidden">
                                    <table className={"min-w-full border rounded-[15px] border-gray-300 border-solid " + classes.table  + ' ' + classes.borderColor} style={{borderSpacing:0}}>
                                        <thead>
                                        <tr>
                                            <th scope="col-3"
                                                className={"opacity-50 border-b border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] text-gray-900 px-6 py-4 text-left w-[45%] " + classes.borderColor}>
                                                Name
                                            </th>
                                            <th scope="col"
                                                className={"opacity-50 border-b border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] text-gray-900 px-6 py-4 text-center w-[15%] " + classes.borderColor}>
                                                Price
                                            </th>
                                            <th scope="col"
                                                className={"opacity-50 border-b border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] text-gray-900 px-6 py-4 text-center w-[15%] " + classes.borderColor}>
                                                Change
                                            </th>
                                            <th scope="col"
                                                className={"opacity-50 border-b border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] text-gray-900 px-6 py-4 text-center w-[5%] " + classes.borderColor}>
                                                Chart
                                            </th>
                                            <th scope="col"
                                                className={"opacity-50 border-b border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] text-gray-900 px-6 py-4 text-center w-[10%] " + classes.borderColor}>
                                                Trade
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="border-b">
                                            <td className="flex items-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                                                <CoinName
                                                    url={BitcoinSvg}
                                                    name={'Bitcoin'}
                                                    shortName={'BTC'}
                                                />
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                $19,626.7
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                <span className={'mr-2 text-emerald-500'}>
                                                    +1.78%
                                                </span>
                                                <img src={ArrowUp}/>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                <Charts
                                                    width={65}
                                                    type="area"
                                                    data={{
                                                        name: 'بازدیدها',
                                                        data: [432, 428, 327, 363, 456, 267, 231]
                                                    }}
                                                    options={{
                                                        colors: ['#35C85A'],
                                                    }}
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <ButtonUi variant={'outlined'} className={'text-[14px] font-[700]'}>
                                                    Buy
                                                </ButtonUi>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="flex items-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                                                <CoinName
                                                    url={EtherSvg}
                                                    name={'Ethereum'}
                                                    shortName={'ETH'}
                                                />
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                $19,626.7
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                <span className={'mr-2 text-red-500'}>
                                                    -1.78%
                                                </span>
                                                <img src={ArrowDown}/>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                <Charts
                                                    width={65}
                                                    type="area"
                                                    data={{
                                                        name: 'بازدیدها',
                                                        data: [432, 428, 327, 363, 456, 267, 231]
                                                    }}
                                                    options={{
                                                        colors: ['#F34F45'],
                                                    }}
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <ButtonUi variant={'outlined'} className={'text-[14px] font-[700]'}>
                                                    Buy
                                                </ButtonUi>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="flex items-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                                                <CoinName
                                                    url={BNBSvg}
                                                    name={'BNB'}
                                                    shortName={'BNB'}
                                                />
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                $19,626.7
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                <span className={'mr-2 text-emerald-500'}>
                                                    +1.78%
                                                </span>
                                                <img src={ArrowUp}/>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                <Charts
                                                    width={65}
                                                    type="area"
                                                    data={{
                                                        name: 'بازدیدها',
                                                        data: [432, 428, 327, 363, 456, 267, 231]
                                                    }}
                                                    options={{
                                                        colors: ['#35C85A'],
                                                    }}
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <ButtonUi variant={'outlined'} className={'text-[14px] font-[700]'}>
                                                    Buy
                                                </ButtonUi>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="flex items-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                                                <CoinName
                                                    url={SolanaSvg}
                                                    name={'Solana'}
                                                    shortName={'SOL'}
                                                />
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                $19,626.7
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                <span className={'mr-2 text-red-500'}>
                                                    -1.78%
                                                </span>
                                                <img src={ArrowDown}/>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                <Charts
                                                    width={65}
                                                    type="area"
                                                    data={{
                                                        name: 'بازدیدها',
                                                        data: [432, 428, 327, 363, 456, 267, 231]
                                                    }}
                                                    options={{
                                                        colors: ['#F34F45'],
                                                    }}
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <ButtonUi variant={'outlined'} className={'text-[14px] font-[700]'}>
                                                    Buy
                                                </ButtonUi>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
