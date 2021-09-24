import { Container, Grid, Button, Divider, CardHeader, CardContent, Card } from "@mui/material";
import { useNavigate } from "react-router";
import NextAppointment from "src/components/NextAppointment";
import Page from "src/components/Page";
import StudyTable from "src/components/tables/StudyTable";

export default function Studies() {
    const navigate = useNavigate();

    const studyResultOpen = () => {
        navigate("/main/estudios/resultado/roberto", { replace: true } )
    }

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
                            buttonText="Subir Resultados"
                            buttonPress={studyResultOpen}
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
            <Container maxWidth="false">
                <Grid container>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title="Estudios Realizados" />
                            <CardContent>
                                <StudyTable />
                            </CardContent>
                        </Card>                        
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
} 