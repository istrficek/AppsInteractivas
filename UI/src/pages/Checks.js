import { Button, Card, CardContent, CardHeader, Container, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import ModalNewCheck from "src/components/modals/modalNewCheck";
import NextAppointment from "src/components/NextAppointment";
import Page from "src/components/Page";
import CheckTable from "src/components/tables/CheckTable";

export default function Checks () {
    const [openNewCheck, setOpenNewCheck] = useState(false)
    const navigate = useNavigate();

    const newCheckClose = () => {
        setOpenNewCheck(false)
    }

    const newCheckOpen = () => {
        setOpenNewCheck(true);
    }

    const checkResultOpen = () => {
        navigate("/main/controles/resultado/roberto", { replace: true } )
    }

    let { id } = useParams();
    return(
        <Page title="Controles | Baby App">
            <Container maxWidth="lg">
                <Grid sx={{ flexGrow: 1 }} container spacing={6} justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <NextAppointment 
                            title="Próximo Control Médico" 
                            date="24 de Agosto a las 15:30"
                            location="Corrientes 2241 '2 B'"
                            doctor="Dra. Micaela Massa"
                            buttonText="Subir Resultado"
                            buttonPress={checkResultOpen}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button variant="contained" size="large" onClick={newCheckOpen}>
                            Programar Nuevo Control
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
                                <CheckTable />
                            </CardContent>
                        </Card>                        
                    </Grid>
                </Grid>
            </Container>         
            <ModalNewCheck open={openNewCheck} close={()=>newCheckClose()}></ModalNewCheck>            
        </Page>
    )
}