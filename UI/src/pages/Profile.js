import Page from "src/components/Page";
import { Container, Grid, Avatar, Typography, Card, CardContent, CardHeader, Stack, TextField, Divider, Button, Link } from "@mui/material";
import account from '../_mocks_/account';
import ChildCard from "src/components/profile/ChildCard";
import { useContext } from "react";
import { DataContext } from '../context'


export default function Profile() {
    const { currentUser, url } = useContext(DataContext);
    const { user } = currentUser

    return (
        <Page title="Perfil | Baby App">
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <Grid container spacing={4} alignItems="center" >
                        <Grid item>
                            <Stack>
                                <Avatar sx={{ width: 150, height: 150 }} src={user.picture} alt="photoURL" />
                                <Link sx={{ pl:4.5 }} href="#" underline="always" variant="caption">
                                    {"Cambiar Foto"}
                                </Link>
                            </Stack>                            
                        </Grid>
                        <Grid item>
                            <Typography variant="h3">{user.name + ' ' + user.last_name}</Typography>
                        </Grid>
                        <Grid item xs={12}> 
                        
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} >
                        <Grid item item xs={12} sm={12} md={6}>
                            <Card>
                                <CardHeader title="Datos Personales" />
                                <CardContent>
                                    <Stack spacing={4}>
                                        <TextField 
                                            fullWidth
                                            autoComplete="name"
                                            type="text"
                                            label="Nombre"
                                        />
                                        
                                        <TextField 
                                            fullWidth
                                            autoComplete="lastName"
                                            type="text"
                                            label="Apellido"
                                        />

                                        <TextField 
                                            fullWidth
                                            autoComplete="gender"
                                            type="text"
                                            label="Sexo"
                                        />
                                        
                                        <TextField 
                                            fullWidth
                                            autoComplete="dni"
                                            type="text"
                                            label="DNI"
                                        />                                                                                
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item item xs={12} sm={12} md={6}>
                            <Card>
                                <CardHeader title="Datos de Contacto" />
                                <CardContent>
                                    <Stack spacing={4}>
                                        <TextField 
                                            fullWidth
                                            autoComplete="mail"
                                            type="text"
                                            label="Mail"
                                        />

                                        <TextField 
                                            fullWidth
                                            autoComplete="phone"
                                            type="text"
                                            label="Celular"
                                        />
                                        
                                        <TextField 
                                            fullWidth
                                            autoComplete="address"
                                            type="text"
                                            label="Dirección"
                                        />                                    
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>                        
                    </Grid>
                    <Divider sx={{ mt:3, mb:3 }} />
                    <Grid container spacing={2} alignItems="center" >
                        <Grid item xs={12}>
                            <Typography variant="h4">Hijos</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <ChildCard name={"Camelia"} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <ChildCard name={"Roberto"} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Button size="large" variant="contained">+ Agregar Hijo</Button>
                        </Grid>
                    </Grid> 
                </Stack>
            </Container>
        </Page>
    )
}