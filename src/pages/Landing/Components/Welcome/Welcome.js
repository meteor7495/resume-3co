import React from "react";
import useStyles from "./Welcome.styles";
import WelcomeSvg from '../../../../assets/images/welcome-background.png'
import WelcomeDarkSvg from '../../../../assets/images/welcome-background-dark.png'
import BusinessDealSvg from '../../../../assets/images/business-deal.svg'
import BusinessDealDarkSvg from '../../../../assets/images/business-deal-dark.svg'
import {useSelector} from "react-redux";
export default function Welcome(props) {
    const classes = useStyles();
    const {theme} = useSelector((s) => s.app);
    const imageUrl = theme === 'light' ? BusinessDealSvg : BusinessDealDarkSvg;
    const backgroundUrl = theme === 'light' ? WelcomeSvg : WelcomeDarkSvg;
    return (
        <section className="text-gray-600 body-font"  style={{
            backgroundImage:'url('+ backgroundUrl +') ',
            backgroundSize: 'cover'
        }}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                        <br className="hidden lg:inline-block"/>readymade gluten
                    </h1>
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                        air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot
                        chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                        <button
                            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
                        </button>
                        <button
                            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-center rounded w-full" alt="hero" src={imageUrl}/>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar
                                toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS
                                try-hard.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar
                                toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS
                                try-hard.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar
                                toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS
                                try-hard.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar
                                toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS
                                try-hard.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
