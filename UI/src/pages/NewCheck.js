import { Card, CardHeader, CardContent, Container, Box, Icon, CardActions, Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import CheckResultForm from "src/components/modals/forms/CheckResultForm";
import NewCheckForm from "src/components/modals/forms/NewCheckForm";
import Page from "src/components/Page";
import { DataContext } from "src/context";

export default function NewCheck (){
    const navigate = useNavigate();
    const { currentChildId } = useContext(DataContext);

    const handleReturn = () => {
        navigate("/main/controles/" + currentChildId, { replace: true } )
    }

    return(
        <Page title="Nuevo Control | Baby App">
            <Container maxWidth="lg">                
                <Card>
                    <CardActions>
                        <Button size='medium' onClick={handleReturn}>Volver</Button>
                    </CardActions>
                    <CardHeader title="Nuevo Turno Para Control"></CardHeader>                
                    <CardContent>
                        <NewCheckForm onFinish={handleReturn} ></NewCheckForm>
                    </CardContent>
                </Card>
            </Container>
        </Page>
    )
}