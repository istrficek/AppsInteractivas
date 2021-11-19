import { Card, CardHeader } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function HeightPercentileChart({ name, title, subtitle, month, value }) {
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
            min: 40,
            max: 110
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
            data: [44.92,	47.97,	52.19,	55.26,	57.73,	59.82,	61.66,	63.31,	64.81,	66.19,	67.48,	68.69,	69.83,	70.91,	71.93,	72.91,	73.85,	74.76,	75.63]//,	76.47,	77.28,	78.06,	78.83,	79.57,	80.29,	80.99,	81.74,	82.47,	83.18,	83.88,	84.57,	85.25,	85.92,	86.58,	87.22,	87.86,	88.49]
          },
          {
            name: "Percentil 50",
            type: "line",
            data: [49.98, 52.69,	56.62,	59.60,	62.07,	64.21,	66.12,	67.86,	69.45,	70.94,	72.34,	73.66,	74.92,	76.11,	77.26,	78.36,	79.42,	80.45,	81.44]//,	82.40,	83.33,	84.24,	85.13,	85.99,	86.83,	87.66,	88.45,	89.22,	89.97,	90.71,	91.42,	92.13,	92.82,	93.49,	94.15,	94.80,	95.44]
          },
          {
            name: "Percentil 97",
            type: "line",
            data: [54.91, 57.62,	61.62,	64.69,	67.25,	69.48,	71.48,	73.30,	74.98,	76.56,	78.03,	79.43,	80.76,	82.03,	83.25,	84.42,	85.55,	86.64,	87.69]//,	88.71,	89.71,	90.68,	91.62,	92.54,	93.44,	94.31,	95.24,	96.13,	97.00,	97.84,	98.66,	99.46,	100.23,	100.98,	101.71,	102.42,	103.12]
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