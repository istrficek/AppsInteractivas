import { Card, CardContent, CardMedia, Link, Typography } from '@material-ui/core';
import * as React from 'react';

export default function VaccinationCalendarCard() {
  return (
    <Card >
      <CardMedia
        component="img"
        alt="Estudios"
        image="/static/landing/calendario-vacunacion.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Calendario de Vacunación
        </Typography>
        <Link href="https://www.stamboulian.com.ar/pacientes/calendario-nacional-de-vacunacion/" underline="always">
            Ver El sitio Web
        </Link>
      </CardContent>
    </Card>
  );
}