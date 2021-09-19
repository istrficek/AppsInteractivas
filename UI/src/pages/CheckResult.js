import { Card, CardHeader, CardContent, Container } from "@material-ui/core";
import CheckResultForm from "src/components/modals/forms/CheckResultForm";
import Page from "src/components/Page";

export default function CheckResult (){

    return(
        <Page title="Resultado Control | Baby App">
            <Container maxWidth="lg">
                <Card>
                    <CardHeader title="Subir Resultado de Control"></CardHeader>                
                    <CardContent>
                        <CheckResultForm></CheckResultForm>
                    </CardContent>
                </Card>
            </Container>
        </Page>
    )
}