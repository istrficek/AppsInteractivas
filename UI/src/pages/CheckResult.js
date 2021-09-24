import { Card, CardHeader, CardContent, Container, Box, Icon, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router";
import CheckResultForm from "src/components/modals/forms/CheckResultForm";
import Page from "src/components/Page";

export default function CheckResult (){
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate("/main/controles/roberto", { replace: true } )
    }

    return(
        <Page title="Resultado Control | Baby App">
            <Container maxWidth="lg">                
                <Card>
                    <CardActions>
                        <Button size='medium' onClick={handleReturn}>Volver</Button>
                    </CardActions>
                    <CardHeader title="Subir Resultado de Control"></CardHeader>                
                    <CardContent>
                        <CheckResultForm></CheckResultForm>
                    </CardContent>
                </Card>
            </Container>
        </Page>
    )
}