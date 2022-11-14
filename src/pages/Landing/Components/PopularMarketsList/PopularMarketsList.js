import React from "react";
import useStyles from "./PopularMarketsList.styles";
import BitcoinSvg from '../../../../assets/images/bitcoin.svg'
import EtherSvg from '../../../../assets/images/ethereum.svg'
import BNBSvg from '../../../../assets/images/bnb.svg'
import SolanaSvg from '../../../../assets/images/solana.svg'
import ArrowUp from '../../../../assets/icons/arrow-up.svg'
import ArrowDown from '../../../../assets/icons/arrow-down.svg'
import Charts from "../../../../components/Charts";

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
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow w-full flex flex-col mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Before they sold out
                    </h1>

                    <div className="flex flex-col w-full">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-12">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <thead className="border-b">
                                        <tr>
                                            <th scope="col-3"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left w-[400px]">
                                                Name
                                            </th>
                                            <th scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                                Price
                                            </th>
                                            <th scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                                Change
                                            </th>
                                            <th scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-center w-[120px]">
                                                Chart
                                            </th>
                                            <th scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
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
                                                <button type="button"
                                                        className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Buy
                                                </button>
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
                                                <button type="button"
                                                        className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Buy
                                                </button>
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
                                                <button type="button"
                                                        className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Buy
                                                </button>
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
                                                <button type="button"
                                                        className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                                    Buy
                                                </button>
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
