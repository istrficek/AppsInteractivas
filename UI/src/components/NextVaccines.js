import { Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";

const link = <p>Vacunas recomendadas segun el calendario de vacunación nacional. Para verlo presioná <a target="_blank" href='https://www.stamboulian.com.ar/pacientes/calendario-nacional-de-vacunacion/'>Aquí</a></p>;

export default function NextVaccines({recommendations}){
    return (
        <Card>
            <CardHeader title="Vacunas recomendadas" subheader={link} />
            <CardContent>
                <Stack spacing={2}>
                    {  recommendations.map((item, id) => (
                        <Typography key={id}>{item.vaccine + ' ' + item.dosis}</Typography>
                    ))}                
                </Stack>
            </CardContent>
        </Card>
    )
}