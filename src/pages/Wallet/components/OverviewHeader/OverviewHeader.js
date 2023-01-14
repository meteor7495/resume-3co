import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import ReactApexChart from "react-apexcharts";
import bigInt from "utils/bigInt";
import BoxUi from "../../../../components/UiKit/BoxUi";
import useStyles from "./styles";
export default function OverviewHeader({
  pages,
  visibility,
  setVisibility,
  ChartValues,
  lockIcon,
  data,
  title,
  ...props
}) {
  return (
    <div className={`flex flex-col lg:flex-row gap-[10px] leading-none`}>
      <BoxUi
        className={`flex flex-[3] h-auto flex-col items-center justify-center`}
      >
        <div
          className={`flex gap-[10px] pb-[13px] text-[15px] items-center justify-center`}
        >
          {title} Overview
          <span
            onClick={() => setVisibility((v) => !v)}
            className={`flex cursor-pointer`}
          >
            {visibility ? (
              <Visibility color="primary" className="text-[16px]" />
            ) : (
              <VisibilityOff color="primary" className="text-[16px]" />
            )}
          </span>
        </div>
        <div className={`py-[13px] flex gap-[5px]`}>
          <span className={`text-[20px] font-bold items-center flex`}>
            {data?.BTC !== undefined &&
              numberHandler({ number: data?.BTC, visibility }) + " BTC"}
            {data &&
              data["3CO"] !== undefined &&
              numberHandler({ number: data["3CO"], visibility }) + " 3CO"}
          </span>
          <span className={`opacity-50 text-center flex items-center`}>
            ≈ {numberHandler({ number: data?.USD, visibility })} USDT
          </span>
        </div>
        {(data?.lock || +data?.lock == 0) && (
          <div
            className={`flex gap-[5px] opacity-50 text-[15px] items-center justify-center`}
          >
            <span className={`flex`}>
              {lockIcon ? lockIcon : <Lock className="text-[16px]" />}
            </span>
            <span>
              {numberHandler({ number: data?.lock, visibility })} USDT
            </span>
          </div>
        )}
      </BoxUi>
      <BoxUi className={`flex flex-col flex-[2] text-center `}>
        <div>{title} Portfolio</div>
        <PieChart ChartValues={ChartValues} />
      </BoxUi>
    </div>
  );
}

const numberHandler = ({ number, visibility }) => {
  return visibility ? "****" : number && bigInt(+number);
};
const PieChart = ({ ChartValues }) => {
  const classes = useStyles();
  const data = Object.values(ChartValues);
  // const isData = false;
  const isData = data.filter((v) => v !== 0).length > 0;
  const series = isData ? data : [];

  const options = {
    chart: {
      type: "donut",
    },

    plotOptions: {
      pie: {
        offsetX: "-100px",
      },
    },

    legend: {
      onItemClick: {
        toggleDataSeries: false,
      },
      labels: {
        colors: ["inherit"],
      },
      fontSize: "13px",
      formatter: function (seriesName, opts) {
        const value = opts.w.globals.series[opts.seriesIndex];
        return [`${seriesName}: ${value ? value.toFixedNumber(3) : 0}%`];
      },
      markers: {
        width: "20px",
        height: "20px",
      },
    },
    colors: ["#4478A8", "#AA70B9", "#B34848", "#6ABF5C"],
    dataLabels: {
      enabled: false,
    },

    labels: Object.keys(ChartValues),
    responsive: [
      {
        breakpoint: 1024,
        options: {
          legend: {
            position: "bottom",
            // floating: true,
          },
        },
      },
    ],
  };
  return (
    <div className={`flex flex-col lg:flex-row h-full relative`}>
      {!isData && (
        <div
          className={`grow flex flex-col justify-center absolute w-full lg:w-1/2 top-[40px] lg:top-1/2 text-center`}
        >
          No Data
        </div>
      )}
      <div className={`flex w-full lg:h-full`}>
        <ReactApexChart
          className={`${classes.chart} grow`}
          options={options}
          width="100%"
          height={"180px"}
          series={series}
          type="donut"
        />
      </div>
    </div>
  );
};
