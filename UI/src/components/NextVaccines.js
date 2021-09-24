import { Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";

const link = <p>Vacunas recomendadas segun el calendario de vacunación nacional. Para verlo presioná <a target="_blank" href='https://www.stamboulian.com.ar/pacientes/calendario-nacional-de-vacunacion/'>Aquí</a></p>;

export default function NextVaccines(){
    return (
        <Card>
            <CardHeader title="Vacunas recomendadas para los 2 meses" subheader={link} />
            <CardContent>
                <Stack spacing={2}>
                    <Typography>Pentavalente</Typography>
                    <Typography>Rotavirus</Typography>
                    <Typography>SALK</Typography>
                    <Typography>Neumococo Conjugada</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}