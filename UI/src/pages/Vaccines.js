import { Container, Grid, Button, Divider, Card, CardHeader, CardContent } from "@mui/material";
import { useState } from "react";
import ModalNewVaccine from "src/components/modals/ModalNewVaccine";
import NextAppointment from "src/components/NextAppointment";
import NextVaccines from "src/components/NextVaccines";
import Page from "src/components/Page";
import VaccineTable from "src/components/tables/VaccinesTable";

export default function Vaccines() {
    const [openNewVaccine, setOpenNewVaccine] = useState(false)

    const newVaccineClose = () => {
        setOpenNewVaccine(false)
    }

    const handleNewVaccineButtonPress = () => {
        setOpenNewVaccine(true);
    }

    const handleNextAppointmentButtonPress = () => {
        
    }

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
                            buttonText="Marcar Como Recibida"
                            buttonPress={handleNextAppointmentButtonPress}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button variant="contained" size="large" onClick={handleNewVaccineButtonPress}>
                            Programar Vacunación
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ marginTop:5, marginBottom:5 }} />
            <Container maxWidth="md">
                <Grid container>
                    <Grid item xs={12}>
                        <NextVaccines />
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ marginTop:5, marginBottom:5 }} />
            <Container maxWidth="false">
                <Grid container>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title="Vacunas Administradas" />
                            <CardContent>
                                <VaccineTable />
                            </CardContent>
                        </Card>  
                    </Grid>
                </Grid>
            </Container>
            <ModalNewVaccine open={openNewVaccine} close={()=>newVaccineClose()}></ModalNewVaccine>    
        </Page>
    )
} 