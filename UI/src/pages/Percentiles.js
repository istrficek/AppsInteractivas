import { Container, Grid, Typography } from "@mui/material";
import PercentileChart from "src/components/_dashboard/app/PercentileChart";


export default function Percentiles(){
    return(
        <Container maxWidth="false">                                
            <Grid container spacing={6}>
                <Grid item justifyItems="center" xs={12} sm={12} md={12}>
                    <Typography variant="h3">Percentiles Actuales</Typography>
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