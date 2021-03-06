import { Card, CardHeader } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";

export default function PercentileChart({ name, title, subtitle, babyData, percentile3, percentile50, percentile97, min, max }) {
    useEffect(() => {
      console.log(percentile50)
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
            categories: [0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36]
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
            data: [1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	73.42,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000,	1000]
          },
          {
            name: "Percentil 3",
            type: "line",
            data: {percentile3}
          },
          {
            name: "Percentil 50",
            type: "line",
            data: {percentile50}
          },
          {
            name: "Percentil 97",
            type: "line",
            data: {percentile97}
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