import { Button, Card, CardContent, CardHeader, Container, Divider, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NextAppointment from "src/components/NextAppointment";
import Page from "src/components/Page";
import CheckTable from "src/components/tables/CheckTable";
import { DataContext } from "src/context";
import { fDateTimeToLongText } from "src/utils/formatTime";
import { URLService } from "../services/URLService";

export default function Checks () {    
    const [nextCheck, setNextCheck] = useState({})
    const [checkHistory, setCheckHistory] = useState([])
    const { setCurrentChildId } = useContext(DataContext); 
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchNextCheck(id);
        fetchCheckHistory(id);
        setCurrentChildId(id);
    }, [])

    const fetchNextCheck = async function(id) {
        await fetch(URLService.getNextCheckURL + id)
            .then((response) => response.json())
            .then((next) => {
                setNextCheck(next);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const fetchCheckHistory = async function(id) {
        await fetch(URLService.getCheckHistoryURL + id)
            .then((response) => response.json())
            .then((history) => {
                setCheckHistory(history);
            })
            .catch((error) => console.log(error))
    }

    const checkResultOpen = (checkId) => {
        navigate("/main/controles/resultado/" + checkId, { replace: true } )
    }

    const NewCheckOpen = () => {
        navigate("/main/controles/nuevo", { replace: true } );
    }

    
    return(
        <Page title="Controles | Baby App">
            <Container maxWidth="lg">
                <Grid sx={{ flexGrow: 1 }} container spacing={6} justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <NextAppointment 
                            title="Próximo Control Médico" 
                            date={ fDateTimeToLongText(nextCheck?.date) }
                            location={ nextCheck?.address }
                            doctor= { nextCheck?.doctor }
                            buttonText="Subir Resultado"
                            buttonPress={() => checkResultOpen(nextCheck?.id)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button variant="contained" size="large" onClick={NewCheckOpen}>
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
                            <CardHeader title="Controles Realizados" />
                            <CardContent>
                                <CheckTable history={checkHistory} />
                            </CardContent>
                        </Card>                        
                    </Grid>
                </Grid>
            </Container>                               
        </Page>
    )
}