import React from "react";
import ReactApexChart from 'react-apexcharts';

export default function PopularMarketsList({data, options, type, ...props}) {
    return (
        <ReactApexChart
            type="area"
            series={
                [
                    data
                ]
            }
            options={{
                colors: ['#35C85A'],
                stroke: {
                    curve: 'smooth',
                    width: 1,
                },
                chart: {
                    type: 'area',
                    height: '100%',
                    sparkline: {
                        enabled: true
                    }
                },
                xaxis: {
                    categories: ['2شنبه', '3شنبه', '4شنبه', '5شنبه', 'جمعه', 'شنبه', '1شنبه']
                },
                fill: {
                    type: 'solid',
                    opacity: 0.2
                },
                tooltip: {
                    enabled: false,
                },
                ...options
            }}
            {...props}
        />
    );
}
