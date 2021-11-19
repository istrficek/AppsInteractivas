import { Card, CardHeader, CardContent, Container, CardActions, Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router";
import NewStudyForm from "src/components/modals/forms/NewStudyForms";
import Page from "src/components/Page";
import { DataContext } from "src/context";

export default function NewStudy (){
    const navigate = useNavigate();
    const { currentChildId } = useContext(DataContext);

    const handleReturn = () => {
        navigate("/main/estudios/" + currentChildId, { replace: true } )
    }

    return(
        <Page title="Nuevo Estudio | Baby App">
            <Container maxWidth="lg">                
                <Card>
                    <CardActions>
                        <Button size='medium' onClick={handleReturn}>Volver</Button>
                    </CardActions>
                    <CardHeader title="Nuevo Turno Para Estudio"></CardHeader>                
                    <CardContent>
                        <NewStudyForm onFinish={handleReturn} ></NewStudyForm>
                    </CardContent>
                </Card>
            </Container>
        </Page>
    )
}