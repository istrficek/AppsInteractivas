import { Card, CardHeader, CardContent, Container, CardActions, Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router";
import NewVaccineForm from "src/components/modals/forms/NewVaccineForm";
import Page from "src/components/Page";
import { DataContext } from "src/context";

export default function NewVaccine (){
    const navigate = useNavigate();
    const { currentChildId } = useContext(DataContext);

    const handleReturn = () => {
        navigate("/main/vacunas/" + currentChildId, { replace: true } )
    }

    return(
        <Page title="Nueva Vacuna | Baby App">
            <Container maxWidth="lg">                
                <Card>
                    <CardActions>
                        <Button size='medium' onClick={handleReturn}>Volver</Button>
                    </CardActions>
                    <CardHeader title="Nuevo Turno Para Vacunación"></CardHeader>                
                    <CardContent>
                        <NewVaccineForm onFinish={handleReturn} ></NewVaccineForm>
                    </CardContent>
                </Card>
            </Container>
        </Page>
    )
}