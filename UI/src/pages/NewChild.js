import { Card, CardHeader, CardContent, Container, CardActions, Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router";
import NewChildForm from "src/components/modals/forms/NewChildForm";
import Page from "src/components/Page";
import { DataContext } from "src/context";
import { URLService } from "src/services/URLService";

export default function NewChild (){
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(DataContext);

    const updateUser = async function() {
        await fetch(URLService.getUserByIdURL + currentUser.id)
            .then((response) => response.json())
            .then((user) => { 
                setCurrentUser(user);
                navigate("/main/perfil", { replace: true } )
            })
            .catch((error) => { console.log(error) })
    }

    const handleReturn = () => {
        updateUser();        
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