import { Container, Grid, Button, Divider, Card, CardHeader, CardContent } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ModalNewVaccine from "src/components/modals/ModalNewVaccine";
import NextAppointment from "src/components/NextAppointment";
import NextVaccines from "src/components/NextVaccines";
import Page from "src/components/Page";
import VaccineTable from "src/components/tables/VaccinesTable";
import { DataContext } from "src/context";
import { URLService } from "src/services/URLService";
import { fDateTimeToLongText } from "src/utils/formatTime";

export default function Vaccines() {
    const navigate = useNavigate();
    const [nextVaccine, setNextVaccine] = useState({})
    const [vaccineHistory, setVaccineHistory] = useState([])
    const [loading, setLoading] = useState(false)
    const [vaccineRecommentadion, setVaccineRecommentadion] = useState([])
    const { setCurrentChildId } = useContext(DataContext);
    let { id } = useParams();

    useEffect(() => {
        fetchNextVaccine(id);
        fetchVaccineHistory(id);
        fetchVaccineRecommendations(id)
        setCurrentChildId(id);
    }, [])

    const fetchNextVaccine = async function(id) {
        await fetch(URLService.getNextVaccineURL + id)
            .then((response) => response.json())
            .then((next) => {
                setNextVaccine(next);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const fetchVaccineRecommendations = async function(id) {
        await fetch(URLService.getVaccineRecommendationsURL + id)
            .then((response) => response.json())
            .then((vr) => {
                setVaccineRecommentadion(vr);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const updateStatus = async function() {
        await fetch(URLService.setVaccineResult + nextVaccine.id)
            .then((response) => response.json())
            .then((next) => {
                setLoading(false);
                fetchNextVaccine(id);
                fetchVaccineHistory(id);
            })
            .catch((error) => {
                console.log(error);                
                setLoading(false);
            })
    }

    const fetchVaccineHistory = async function(id) {
        await fetch(URLService.getVaccineHistoryURL + id)
            .then((response) => response.json())
            .then((history) => {
                setVaccineHistory(history);
            })
            .catch((error) => console.log(error))
    }

    const NewVaccineOpen = () => {
        navigate("/main/vacunas/nueva", { replace: true } );
    }

    const updateVaccineStatus = () => {
        setLoading(true);
        updateStatus();
    }

    return (
        <Page title="Vacunas | Baby App">
            <Container maxWidth="lg">
                <Grid sx={{ flexGrow: 1 }} container spacing={6} justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <NextAppointment 
                            title="Próxima Vacuna" 
                            date={ fDateTimeToLongText(nextVaccine?.date) }
                            location={nextVaccine?.address}
                            doctor={nextVaccine?.doctor}
                            vaccine={ nextVaccine?.description + ' ' + nextVaccine?.dosis }
                            buttonText="Marcar Como Recibida"
                            loading = {loading}
                            buttonPress={updateVaccineStatus}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button variant="contained" size="large" onClick={NewVaccineOpen}>
                            Programar Vacunación
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ marginTop:5, marginBottom:5 }} />
            <Container maxWidth="md">
                <Grid container>
                    <Grid item xs={12}>
                        <NextVaccines recommendations={vaccineRecommentadion} />
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
                                <VaccineTable history={vaccineHistory} />
                            </CardContent>
                        </Card>  
                    </Grid>
                </Grid>
            </Container>            
        </Page>
    )
} 