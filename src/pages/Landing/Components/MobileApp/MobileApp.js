import React from "react";
import useStyles from "./styles";
import {Typography} from "@mui/material";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import AppDevelopmentSvg from '../../../../assets/images/AppDevelopment.svg'
import AppleSvg from '../../../../assets/images/Apple.svg'
import GooglePlaySvg from '../../../../assets/images/GooglePlay.svg'
export default function MobileApp() {
  const classes = useStyles();

  return (
    <section className={"text-gray-600 lg:py-[56px] " + classes.background}>
      <div
        className={"container mx-auto  px-5 md:flex-row flex-col items-center"}
      >
        <div
          className={`${classes.body} flex flex-col lg:flex-row w-full lg:px-[62px] lg:py-[36px] px-[32px] py-[18px]`}
        >
          <div className="lg:w-1/5 mb-10 lg:mb-0">
            <img
              className="lg:max-w-[250px] w-full object-cover object-center rounded"
              alt="hero"
              src={AppDevelopmentSvg}
            />
          </div>
          <div className="lg:w-4/5 flex flex-col md:items-start md:text-left items-center gap-[20px] text-center">
            <Typography variant={"h1"} className={classes.title}>
              Mobile app coming soon...
            </Typography>
            <Typography className={classes.text}>
              We are excited to announce that the 3CO Exchange mobile app is coming soon!
            </Typography>
            <Typography className={classes.text}>
              You will be able to download it from the stores
            </Typography>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-8">
              <ButtonUi variant={"contained"} className={classes.button}>
                <div>
                  <img src={AppleSvg}/>
                </div>
                <div>
                  <Typography className={'text-left text-[8px]'}>
                    Coming soon on the
                  </Typography>
                  <Typography className={'text-left text-sm'}>
                    App Store
                  </Typography>
                </div>
              </ButtonUi>
              <ButtonUi variant={"contained"} className={classes.button}>
                <div>
                  <img src={GooglePlaySvg}/>
                </div>
                <div>
                  <Typography className={'text-left text-[8px]'}>
                    COMING SOON ON
                  </Typography>
                  <Typography className={'text-left text-sm'}>
                    Google Play
                  </Typography>
                </div>
              </ButtonUi>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
