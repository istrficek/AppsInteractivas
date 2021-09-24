import { Card, Button, CardActions, CardContent, CardHeader, CardMedia, Stack, TextField } from "@mui/material";
import ComboBox from "../ComboBox";
import DateTimePickerWrapper from "../DateTimePickerWrapper";

export default function ChildCard({ name }) {
    return (
        <>
            <Card>
                <CardHeader title={name} />
                <CardMedia 
                    component="img"
                    height="140"
                    image="/static/mock-images/childs/baby.jpg"                    
                />
                <CardContent>
                    <Stack spacing={2}>
                        <TextField 
                            fullWidth
                            autoComplete="dni"
                            type="text"
                            label="Nombre"
                        />

                        <DateTimePickerWrapper 
                            label="Fecha de Nacimiento"
                        />
                        
                        <ComboBox />
                        
                        <TextField 
                            fullWidth
                            autoComplete="dni"
                            type="text"
                            label="Alergias"
                        />
                        
                        <TextField 
                            fullWidth
                            autoComplete="dni"
                            type="text"
                            label="Enfermedades Crónicas"
                        />
                    </Stack>
                </CardContent>
                <CardActions disableSpacing >
                    <Button size="small">Guardar Cambios</Button>
                    <Button sx={{ marginLeft:"auto" }}  size="small" color="error">Borrar</Button>
                </CardActions>
            </Card>
        </>
    )
}