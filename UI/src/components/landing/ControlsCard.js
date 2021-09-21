import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';

export default function ControlsCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="Controles Médicos"
        height="300"
        image="/static/landing/controles.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Controles Médicos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Programá los controles médicos de tu hijo o hija para no olvidarte.          
        </Typography>
      </CardContent>
    </Card>
  );
}