import { Card, CardContent, CardMedia, Link, Typography } from '@material-ui/core';
import * as React from 'react';

export default function PediatricControlCard() {
  return (
    <Card >
      <CardMedia
        component="img"
        alt="Estudios"
        image="/static/landing/controles-pediatricos.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Información sobre controles pediátricos
        </Typography>
        <Link href="https://www.clinicapueyrredon.com/control-pediatrico-del-nino-sano/" underline="always">
            Ver El sitio Web
        </Link>
      </CardContent>
    </Card>
  );
}