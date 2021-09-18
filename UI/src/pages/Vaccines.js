import { Container, Grid, Button, Divider } from "@material-ui/core";
import NextAppointment from "src/components/NextAppointment";
import Page from "src/components/Page";

export default function Vaccines() {
    return (
        <Page title="Vacunas | Baby App">
            <Container maxWidth="lg">
                <Grid sx={{ flexGrow: 1 }} container spacing={6} justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <NextAppointment 
                            title="Próxima Vacuna" 
                            date="2 de Julio a las 10:00"
                            location="Vacunatorio San Miguel"
                            doctor="Dr. Luis Pedraza"
                            vaccine="Rubeola 1° dósis"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button variant="contained" size="large">
                            Programar Vacunación
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ marginTop:5, marginBottom:5 }} />
        </Page>
    )
} 