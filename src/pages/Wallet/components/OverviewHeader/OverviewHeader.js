import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import BoxUi from "../../../../components/UiKit/BoxUi";

export default function OverviewHeader({ pages, ...props }) {
  const [visibility, setVisibility] = useState(true);
  return (
    <div className={`flex gap-[10px] leading-none`}>
      <BoxUi
        className={`flex flex-[3] h-auto flex-col items-center justify-center`}
      >
        <div
          className={`flex gap-[10px] pb-[13px] text-[15px] items-center justify-center`}
        >
          Asset Overview
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
            <NumberHandler number={2.62} visibility={visibility} /> BTC
          </span>
          <span className={`opacity-50 text-center flex items-center`}>
            ≈ <NumberHandler number={1585.69} visibility={visibility} /> USD
          </span>
        </div>
        <div
          className={`flex gap-[5px] opacity-50 text-[15px] items-center justify-center`}
        >
          <span className={`flex`}>
            <Lock className="text-[16px]" />
          </span>
          <span>
            <NumberHandler number={1585.69} visibility={visibility} /> USD
          </span>
        </div>
      </BoxUi>
      <BoxUi className={`flex flex-col flex-[2] gap-[15px] text-center `}>
        <div>Asset Portfolio</div>
        <div className={`flex flex-col`}>
          <PieChart />
        </div>
      </BoxUi>
    </div>
  );
}

const NumberHandler = ({ number, visibility }) => {
  return visibility ? "****" : number.toLocaleString();
};
const seriesValues = {
  Spot: 0,
  Financial: 0,
  Margin: 0,
  "NFT Market": 0,
};
const PieChart = () => {
  const data = Object.values(seriesValues);
  const series = data.filter((v) => v !== 0).length > 0 ? data : [];

  const options = {
    chart: {
      type: "donut",
    },
    noData: {
      text: "No data text",
      align: "left",
      verticalAlign: "middle",
    },
    dataLabels: {
      enabled: false,
    },
    labels: Object.entries(seriesValues).map(([k, v]) => `${k}: ${v}%`),
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     options: {
    //       chart: {
    //         width: 200,
    //       },
    //       legend: {
    //         position: "bottom",
    //       },
    //     },
    //   },
    // ],
  };
  return (
    <ReactApexChart
      options={options}
      width="100%"
      height="100%"
      series={series}
      type="donut"
    />
  );
};
