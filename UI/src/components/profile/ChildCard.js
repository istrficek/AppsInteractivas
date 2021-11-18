import { Card, Button, CardActions, CardContent, CardHeader, CardMedia, Stack, TextField, Chip, Grid } from "@mui/material";
import { useState } from "react";
import ComboBox from "../ComboBox";
import DatePickerWrapper from "../DatePickerWrapper";
import TagsInput from "../TagsInput";

export default function ChildCard({ child }) {   
    const [allergies, setAllergies] = useState([]);
    const [cronicDisease, setCronicDisease] = useState([]);

    return (
        <>
            <Card>
                <CardHeader title={child.name + ' ' + child.last_name} />
                <CardMedia 
                    component="img"
                    height="140"
                    image= {child.picture}                    
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField 
                                fullWidth
                                autoComplete="dni"
                                disabled
                                value={child.dni}
                                type="text"
                                label="DNI"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <DatePickerWrapper
                                label="Fecha de Nacimiento"
                                valueCallBack = {(date) => { console.log(date) }}
                                startValue = { child.birthday }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <ComboBox value={child.blood_type_id} />  
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TagsInput
                                    selectedTags={(allergy) => { setAllergies(allergy) } }
                                    fullWidth
                                    variant="outlined"
                                    id="tags"
                                    name="tags"
                                    placeholder="agregar"
                                    label="Alergias"  
                                    tags={allergies}                              
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TagsInput
                                    selectedTags={(diseases) => { setCronicDisease(diseases) } }
                                    fullWidth
                                    variant="outlined"
                                    id="tags"
                                    name="tags"
                                    placeholder="agregar"
                                    label="Enfermedades Crónicas"  
                                    tags={cronicDisease}                              
                            />
                        </Grid>
                    </Grid>                   
                </CardContent>
                <CardActions disableSpacing >
                    <Button size="small">Guardar Cambios</Button>
                    <Button sx={{ marginLeft:"auto" }}  size="small" color="error">Borrar</Button>
                </CardActions>
            </Card>
        </>
    )
}