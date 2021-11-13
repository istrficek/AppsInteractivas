import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';

export default function PercentileCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="Estudios"
        height="300"
        image="/static/landing/percentiles.gif"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Percentiles
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Compará tus resultados con los percentiles que brinda la OMS.          
        </Typography>
      </CardContent>
    </Card>
  );
}