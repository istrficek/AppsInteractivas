import { Container, Grid, Button, Divider, CardHeader, CardContent, Card } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NextAppointment from "src/components/NextAppointment";
import Page from "src/components/Page";
import StudyTable from "src/components/tables/StudyTable";
import { DataContext } from "src/context";
import { URLService } from "src/services/URLService";
import { fDateTimeToLongText } from "src/utils/formatTime";

export default function Studies() {
    const navigate = useNavigate();
    const [nextStudy, setNextStudy] = useState({})
    const [studyHistory, setStudyHistory] = useState([])
    const { setCurrentChildId } = useContext(DataContext);
    let { id } = useParams();

    useEffect(() => {
        fetchNextStudy(id);
        fetchStudyHistory(id);
        setCurrentChildId(id);
    }, [])

    const fetchNextStudy = async function(id) {
        await fetch(URLService.getNextStudyURL + id)
            .then((response) => response.json())
            .then((next) => {
                setNextStudy(next);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const fetchStudyHistory = async function(id) {
        await fetch(URLService.getStudyHistoryURL + id)
            .then((response) => response.json())
            .then((history) => {
                setStudyHistory(history);
            })
            .catch((error) => console.log(error))
    }

    const studyResultOpen = (studyId) => {
        navigate("/main/estudios/resultado/" + studyId, { replace: true } )
    }

    const NewStudyOpen = () => {
        navigate("/main/estudios/nuevo", { replace: true } );
    }

    return (
        <Page title="Controles | Baby App">
            <Container maxWidth="lg">
                <Grid sx={{ flexGrow: 1 }} container spacing={6} justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <NextAppointment 
                            title="Próximo Estudio" 
                            date={ fDateTimeToLongText(nextStudy?.date) }
                            location={nextStudy?.address}
                            doctor={nextStudy?.doctor}
                            study={nextStudy?.description}
                            buttonText="Subir Resultados"
                            buttonPress={() => {studyResultOpen(nextStudy?.id)}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button variant="contained" size="large" onClick={NewStudyOpen}>
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
                                <StudyTable history={studyHistory} />
                            </CardContent>
                        </Card>                        
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
} 