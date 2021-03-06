import { Card, CardHeader, CardContent, Container, Box, Icon, CardActions, Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import CheckResultForm from "src/components/modals/forms/CheckResultForm";
import Page from "src/components/Page";
import { DataContext } from "src/context";

export default function CheckResult (){
    const navigate = useNavigate();
    let { id } = useParams();
    const { currentChildId } = useContext(DataContext);

    const handleReturn = () => {
        navigate("/main/controles/" + currentChildId, { replace: true } )
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
                        <CheckResultForm id={id} onFinish={handleReturn} ></CheckResultForm>
                    </CardContent>
                </Card>
            </Container>
        </Page>
    )
}