import { Card, CardContent, CardMedia, Link, Typography } from '@material-ui/core';
import * as React from 'react';

export default function InfoForMothersCard() {
  return (
    <Card >
      <CardMedia
        component="img"
        alt="Estudios"
        image="/static/landing/mother.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Información para madres
        </Typography>
        <Link href="http://www.materna.com.ar/" underline="always">
            Ver El sitio Web
        </Link>
      </CardContent>
    </Card>
  );
}