import { Button, Container, Divider, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import { useParams } from "react-router";
import { BaseOptionChart } from "src/components/charts";
import ColorManyPicker from "src/components/ColorManyPicker";
import ModalNewCheck from "src/components/modals/modalNewCheck";
import NextAppointment from "src/components/NextAppointment";
import Page from "src/components/Page";
import { AppWebsiteVisits } from "src/components/_dashboard/app";
import PercentileChart from "src/components/_dashboard/app/PercentileChart";

export default function Checks () {
    const [openNewCheck, setOpenNewCheck] = useState(false)

    const newCheckClose = () => {
        setOpenNewCheck(false)
    }

    const newCheckOpen = () => {
        setOpenNewCheck(true);
    }

    let { id } = useParams();
    return(
        <Page title="Controles | Baby App">
            <Container maxWidth="lg">
                <Grid sx={{ flexGrow: 1 }} container spacing={6} justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <NextAppointment></NextAppointment>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button variant="contained" size="large" onClick={newCheckOpen}>
                            Agregar Control
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ marginTop:5, marginBottom:5 }} />
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
            <ModalNewCheck open={openNewCheck} close={()=>newCheckClose()}></ModalNewCheck>
        </Page>
    )
}