import { Card, CardHeader } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function WeightPercentileChart({ name, title, subtitle, month, value }) {
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
            min: 1,
            max: 20
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
            data: [2.35,	2.79,	3.61,	4.34,	4.99,	5.57,	6.09,	6.56,	6.98,	7.36,	7.7,	8,	8.28,	8.53,	8.76,	8.97,	9.16,	9.34,	9.5]//,	9.65,	9.8,	9.94,	10.07,	10.19,	10.32,	10.44,	10.55,	10.67,	10.78,	10.9,	11.01,	11.12,	11.24,	11.35,	11.46,	11.58,	11.7]
          },
          {
            name: "Percentil 50",
            type: "line",
            data: [3.53,	4,	4.87,	5.67,	6.39,	7.04,	7.63,	8.16,	8.64,	9.08,	9.47,	9.83,	10.16,	10.45,	10.73,	10.97,	11.2,	11.42,	11.61]//,	11.8,	11.97,	12.14,	12.3,	12.45,	12.59,	12.74,	12.88,	13.01,	13.15,	13.28,	13.42,	13.56,	13.69,	13.83,	13.97,	14.11,	14.25]
          },
          {
            name: "Percentil 97",
            type: "line",
            data: [4.44,	5.03,	6.12,	7.1,	7.99,	8.79,	9.51,	10.16,	10.74,	11.27,	11.74,	12.17,	12.56,	12.91,	13.23,	13.53,	13.8,	14.06,	14.29]//,	14.51,	14.73,	14.93,	15.12,	15.31,	15.5,	15.68,	15.87,	16.05,	16.23,	16.42,	16.61,	16.8,	17,	17.2,	17.4,	17.61,	17.82]
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