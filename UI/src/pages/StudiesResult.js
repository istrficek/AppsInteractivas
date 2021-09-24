import { Card, CardHeader, CardContent, Container, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router";
import StudyResultForm from "src/components/modals/forms/StudyResultForm";
import Page from "src/components/Page";

export default function StudiesResult (){
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate("/main/estudios/roberto", { replace: true } )
    }

    return(
        <Page title="Resultado Estudio | Baby App">
            <Container maxWidth="lg">                
                <Card>
                    <CardActions>
                        <Button size='medium' onClick={handleReturn}>Volver</Button>
                    </CardActions>
                    <CardHeader title="Subir Resultado de Estudio"></CardHeader>                
                    <CardContent>
                        <StudyResultForm></StudyResultForm>
                    </CardContent>
                </Card>
            </Container>
        </Page>
    )
}