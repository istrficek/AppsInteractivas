import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import * as React from 'react';

export default function StudyCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="Estudios"
        height="300"
        image="/static/landing/estudios.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Estudios
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Programá los estudios y subí los resultados a la app para tenerlos siempre a mano!.          
        </Typography>
      </CardContent>
    </Card>
  );
}