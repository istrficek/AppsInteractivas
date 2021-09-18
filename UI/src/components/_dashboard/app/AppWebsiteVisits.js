import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Percentil 3',
    type: 'line',
    data: [{ x: 0, y: 44.92 },	{ x: 1, y: 47.97 },	{ x: 2, y: 52.19 },	{ x: 3, y: 55.26 },	{ x: 4, y: 57.73 },	{ x: 5, y: 59.82 },	{ x: 6, y: 61.66 },	{ x: 7, y: 63.31 },	{ x: 8, y: 64.81 },	{ x: 9, y: 66.19 },	{ x: 10, y: 67.48 },	{ x: 11, y: 68.69 },	{ x: 12, y: 69.83 },	{ x: 13, y: 70.91 },	{ x: 14, y: 71.93 },	{ x: 15, y: 72.91 },	{ x: 16, y: 73.85 },	{ x: 17, y: 74.76 },	{ x: 18, y: 75.63 },	{ x: 19, y: 76.47 },	{ x: 20, y: 77.28 },	{ x: 21, y: 78.06 },	{ x: 22, y: 78.83 },	{ x: 23, y: 79.57 },	{ x: 24, y: 80.29 },	{ x: 25, y: 80.99 },	{ x: 26, y: 81.74 },	{ x: 27, y: 82.47 },	{ x: 28, y: 83.18 },	{ x: 29, y: 83.88 },	{ x: 30, y: 84.57 },	{ x: 31, y: 85.25 },	{ x: 32, y: 85.92 },	{ x: 33, y: 86.58 },	{ x: 34, y: 87.22 },	{ x: 35, y: 87.86 },	{ x: 36, y: 88.49 }]
  },
  {
    name: 'Percentil 50',
    type: 'line',
    data: [{ x: 0, y: 49.98 },	{ x: 1, y: 52.69 },	{ x: 2, y: 56.62 },	{ x: 3, y: 59.60 },	{ x: 4, y: 62.07 },	{ x: 5, y: 64.21 },	{ x: 6, y: 66.12 },	{ x: 7, y: 67.86 },	{ x: 8, y: 69.45 },	{ x: 9, y: 70.94 },	{ x: 10, y: 72.34 },	{ x: 11, y: 73.66 },	{ x: 12, y: 74.92 },	{ x: 13, y: 76.11 },	{ x: 14, y: 77.26 },	{ x: 15, y: 78.36 },	{ x: 16, y: 79.42 },	{ x: 17, y: 80.45 },	{ x: 18, y: 81.44 },	{ x: 19, y: 82.40 },	{ x: 20, y: 83.33 },	{ x: 21, y: 84.24 },	{ x: 22, y: 85.13 },	{ x: 23, y: 85.99 },	{ x: 24, y: 86.83 },	{ x: 25, y: 87.66 },	{ x: 26, y: 88.45 },	{ x: 27, y: 89.22 },	{ x: 28, y: 89.97 },	{ x: 29, y: 90.71 },	{ x: 30, y: 91.42 },	{ x: 31, y: 92.13 },	{ x: 32, y: 92.82 },	{ x: 33, y: 93.49 },	{ x: 34, y: 94.15 },	{ x: 35, y: 94.80 },	{ x: 36, y: 95.44 }]
  },
  {
    name: 'Percentil 97',
    type: 'line',
    data: [{ x: 0, y: 54.91 },	{ x: 1, y: 57.62 },	{ x: 2, y: 61.62 },	{ x: 3, y: 64.69 },	{ x: 4, y: 67.25 },	{ x: 5, y: 69.48 },	{ x: 6, y: 71.48 },	{ x: 7, y: 73.30 },	{ x: 8, y: 74.98 },	{ x: 9, y: 76.56 },	{ x: 10, y: 78.03 },	{ x: 11, y: 79.43 },	{ x: 12, y: 80.76 },	{ x: 13, y: 82.03 },	{ x: 14, y: 83.25 },	{ x: 15, y: 84.42 },	{ x: 16, y: 85.55 },	{ x: 17, y: 86.64 },	{ x: 18, y: 87.69 },	{ x: 19, y: 88.71 },	{ x: 20, y: 89.71 },	{ x: 21, y: 90.68 },	{ x: 22, y: 91.62 },	{ x: 23, y: 92.54 },	{ x: 24, y: 93.44 },	{ x: 25, y: 94.31 },	{ x: 26, y: 95.24 },	{ x: 27, y: 96.13 },	{ x: 28, y: 97.00 },	{ x: 29, y: 97.84 },	{ x: 30, y: 98.66 },	{ x: 31, y: 99.46 },	{ x: 32, y: 100.23 },	{ x: 33, y: 100.98 },	{ x: 34, y: 101.71 },	{ x: 35, y: 102.42 },	{ x: 36, y: 103.12 }]
  }//,
  // {
  //   name: 'Roberto',
  //   type: 'scatter',
  //   data: [{ x: 10, y: 73 }]
  // }
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    
    xaxis: { type: 'number' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} cm`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Percentil Altura" subheader="Altura: 73,00 cm Percentil: 25" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
