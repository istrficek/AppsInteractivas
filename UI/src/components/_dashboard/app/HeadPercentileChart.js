import { Card, CardHeader } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function HeadPercentileChart({ name, title, subtitle, month, value }) {
  const [pData, setPData] = useState([1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000])

  useEffect(()=>{
    pData[month] = value;
    setPData(pData);
  })
    let state = {
        optionsMixedChart: {
          chart: {
            id: "basic-bar",
            toolbar: {
              show: false
            }
          },
          stroke: {
            width: [1, 2]
          },
          xaxis: {
            categories: [0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18]
          },
          markers: {
            size: [5,0,0,0],
            hover: {
              size: 8
            }
          },
          yaxis: {
            tickAmount: 5,
            min: 30,
            max: 55
          }
        },
        seriesMixedChart: [
          {
            name: name,
            type: "scatter",
            data: pData
          },
          {
            name: "Percentil 3",
            type: "line",
            data: [31.48,	33.25,	35.78,	37.55,	38.89,	39.95,	40.81,	41.53,	42.13,	42.65,	43.1,	43.49,	43.83,	44.13,	44.4,	44.64,	44.85,	45.04,	45.21]//,	45.37,	45.5,	45.63,	45.74,	45.84,	45.92,	46,	46.07,	46.14,	46.19,	46.24,	46.28,	46.32,	46.35,	46.37,	46.39,	46.41,	46.42,	46.43]
          },
          {
            name: "Percentil 50",
            type: "line",
            data: [35.81,	37.19,	39.2,	40.65,	41.76,	42.66,	43.4,	44.03,	44.58,	45.05,	45.47,	45.85,	46.19,	46.49,	46.77,	47.03,	47.26,	47.47,	47.67]//,	47.85,	48.02,	48.18,	48.33,	48.47,	48.6,	48.72,	48.83,	48.93,	49.03,	49.13,	49.22,	49.3,	49.38,	49.45,	49.52,	49.59,	49.65,	49.68]
          },
          {
            name: "Percentil 97",
            type: "line",
            data: [38.85,	40.1,	41.94,	43.28,	44.32,	45.17,	45.89,	46.5,	47.03,	47.5,	47.93,	48.3,	48.65,	48.96,	49.25,	49.51,	49.76,	49.99,	50.2]//,	50.4,	50.58,	50.76,	50.92,	51.08,	51.23,	51.36,	51.5,	51.62,	51.74,	51.86,	51.97,	52.07,	52.17,	52.26,	52.36,	52.44,	52.53,	52.57]
          }
        ]}

    return(
        <Card>
        <CardHeader title={title} subheader={subtitle} />
        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <Chart
            options={state.optionsMixedChart}
            series={state.seriesMixedChart}
            type="line"
        />
        </Box>
        </Card>
        
    )
}