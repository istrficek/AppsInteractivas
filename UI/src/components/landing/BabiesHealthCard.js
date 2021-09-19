import { Card, CardContent, CardMedia, Link, Typography } from '@material-ui/core';
import * as React from 'react';

export default function BabiesHealthCardCard() {
  return (
    <Card >
      <CardMedia
        component="img"
        alt="Estudios"
        image="/static/landing/mayo-clinic.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Salud de bebés y niños pequeños
        </Typography>
        <Link href="https://www.mayoclinic.org/es-es/healthy-lifestyle/infant-and-toddler-health/in-depth/healthy-baby/art-20044767" underline="always">
            Ver El sitio Web
        </Link>
      </CardContent>
    </Card>
  );
}