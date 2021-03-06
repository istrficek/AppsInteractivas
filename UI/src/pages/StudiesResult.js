import { Card, CardHeader, CardContent, Container, Box, Icon, CardActions, Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import StudyResultForm from "src/components/modals/forms/StudyResultForm";
import Page from "src/components/Page";
import { DataContext } from "src/context";

export default function StudyResult (){
    const navigate = useNavigate();
    let { id } = useParams();
    const { currentChildId } = useContext(DataContext);

    const handleReturn = () => {
        navigate("/main/estudios/" + currentChildId, { replace: true } )
    }

    return(
        <Page title="Resultado Estudio | Baby App">
            <Container maxWidth="lg">                
                <Card>
                    <CardActions>
                        <Button size='medium' onClick={handleReturn}>Volver</Button>
                    </CardActions>
                    <CardHeader title="Subir Resultado de Control"></CardHeader>                
                    <CardContent>
                        <StudyResultForm id={id} onFinish={handleReturn} ></StudyResultForm>
                    </CardContent>
                </Card>
            </Container>
        </Page>
    )
}