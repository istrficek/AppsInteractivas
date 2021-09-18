import { Container, Grid, Button, Divider } from "@material-ui/core";
import NextAppointment from "src/components/NextAppointment";
import Page from "src/components/Page";

export default function Studies() {
    return (
        <Page title="Controles | Baby App">
            <Container maxWidth="lg">
                <Grid sx={{ flexGrow: 1 }} container spacing={6} justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <NextAppointment 
                            title="Próximo Estudio" 
                            date="30 de Septiembre a las 12:00"
                            location="Jufre 135 '1 A'"
                            doctor="Dr. Luis Pedraza"
                            study="Radiografía de Cabeza"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button variant="contained" size="large">
                            Programar Nuevo Estudio
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ marginTop:5, marginBottom:5 }} />
        </Page>
    )
} 