import { Card, CardActions, CardContent, CardHeader, Container, Grid, Stack, Typography } from "@mui/material";
import PercentileChart from "src/components/_dashboard/app/PercentileChart";


export default function Percentiles(){
    const explanation= "Se define percentil como un valor que divide a un conjunto ordenado de datos estadísticos recogidos de una población grande de niños, de forma que un porcentaje de tales datos sea inferior a dicho valor."
    const explanation2= "En una gráfica de percentiles figuran varias líneas, cada una con un número: 3, 10, 25, 50, 75, 90 y 97. Para conocer en qué percentil se encuentra un niño —por ejemplo de peso—, se debe buscar primero la edad en el eje horizontal. Se traza una línea vertical desde ese punto. A continuación se busca el peso en el eje vertical, y se traza una línea horizontal por ese punto. Las dos rectas se cruzarán sobre alguna de las líneas de percentiles del gráfico. Ese será el percentil de peso del niño"

    return(
        <Container maxWidth="false">                               
            <Grid container spacing={6}>
                <Grid item justifyItems="center" xs={12} sm={12} md={12}>
                    <Stack>
                        <Typography variant="h3">Percentiles Actuales</Typography>
                        <Typography variant="subtitle2">{explanation}</Typography>
                        <Typography variant="subtitle2">{explanation2}</Typography>
                    </Stack>                    
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <PercentileChart name="Roberto" title="Percentil Altura" subtitle="Altura: 73,00 cm Percentil: 25" ></PercentileChart>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <PercentileChart name="Roberto" title="Percentil Peso" subtitle="Peso: 6110 gr Percentil: 25" ></PercentileChart>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <PercentileChart name="Roberto" title="Percentil Diámetro Cabeza" subtitle="Diametro: 50 cm Percentil: 25" ></PercentileChart>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <PercentileChart name="Roberto" title="Percentil IMC" subtitle="IMC: 18 Percentil: 25" ></PercentileChart>
                </Grid>               
            </Grid>
        </Container>
    )
}