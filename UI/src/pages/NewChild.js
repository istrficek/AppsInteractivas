import { Card, CardHeader, CardContent, Container, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router";
import NewChildForm from "src/components/modals/forms/NewChildForm";
import Page from "src/components/Page";

export default function NewChild (){
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate("/main/perfil", { replace: true } )
    }

    return(
        <Page title="Agregar Hijo | Baby App">
            <Container maxWidth="lg">                
                <Card>
                    <CardActions>
                        <Button size='medium' onClick={handleReturn}>Volver</Button>
                    </CardActions>
                    <CardHeader title="Nuevo Hijo"></CardHeader>                
                    <CardContent>
                        <NewChildForm onFinish={handleReturn} ></NewChildForm>
                    </CardContent>
                </Card>
            </Container>
        </Page>
    )
}