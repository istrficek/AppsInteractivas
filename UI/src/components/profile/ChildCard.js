import { Card, Button, CardActions, CardContent, CardHeader, CardMedia, Stack, TextField } from "@mui/material";
import { useState } from "react";
import ComboBox from "../ComboBox";
import DateTimePickerWrapper from "../DateTimePickerWrapper";

export default function ChildCard({ child }) {   
    const [allergies, setAllergies] = useState(child.allergies);
    const [cronicDisease, setCronicDisease] = useState(child.cronic_diseases);
    return (
        <>
            <Card>
                <CardHeader title={child.name} />
                <CardMedia 
                    component="img"
                    height="140"
                    image= {child.picture}                    
                />
                <CardContent>
                    <Stack spacing={2}>

                        <TextField 
                            fullWidth
                            autoComplete="dni"
                            disabled
                            value={child.dni}
                            type="text"
                            label="DNI"
                        />

                        <DateTimePickerWrapper 
                            label="Fecha de Nacimiento"

                        />
                        
                        <ComboBox value={child.blood_type_id} />
                        
                        <TextField 
                            fullWidth
                            autoComplete="alergies"
                            type="text"      
                            value = {allergies}
                            onChange={(event) => { setAllergies(event.target.value) } }                      
                            label="Alergias"
                        />
                        
                        <TextField 
                            fullWidth
                            autoComplete="cronic disease"
                            type="text"
                            value = {cronicDisease}
                            onChange={(event) => { setCronicDisease(event.target.value) } }  
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