import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';

export default function VaccineCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="Estudios"
        height="300"
        image="/static/landing/vacunas.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vacunas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Programá las vacunas y revisa el calendario de vacunación.           
        </Typography>
      </CardContent>
    </Card>
  );
}