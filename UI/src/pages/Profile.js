import Page from "src/components/Page";
import { Container, Grid, Avatar, Typography, Card, CardContent, CardHeader, Stack, TextField, Divider, Button, Link } from "@mui/material";
import account from '../_mocks_/account';
import ChildCard from "src/components/profile/ChildCard";
import { useContext, useState } from "react";
import { DataContext } from '../context'
import FileUploadModal from "src/components/FileUploadModal";
import { uploadImage } from '../services/FileService'; 
import { useNavigate } from "react-router";
import { URLService } from "src/services/URLService";


export default function Profile() {
    const { currentUser, setCurrentUser } = useContext(DataContext);
    const [ openModal, setOpenModal ] = useState(false);
    const [ name, setName ] = useState(currentUser.name);
    const [ lastName, setLastname ] = useState(currentUser.last_name);
    const [ dni, setDNI ] = useState(currentUser.dni);
    const [ mail, setMail ] = useState(currentUser.mail);
    const [ phone, setPhone ] = useState(currentUser.phone);
    const [ address, setAddress ] = useState(currentUser.address);
    const [ picture, setPicture ] = useState(currentUser.picture);
    const navigate = useNavigate();

    const updateUser = async function() {
        await fetch(URLService.getUserByIdURL + currentUser.id)
            .then((response) => response.json())
            .then((user) => { 
                setCurrentUser(user);
                setOpenModal(false);
            })
            .catch((error) => { console.log(error) })
    }

    const updateUserImage = async function(url) {
        await fetch(URLService.updateUserPictureURL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({pic: url, id: currentUser.id}),
          })
          .then((success) => {
            updateUser();            
          })
    }

    const handleSelectedImage = async function(img) {
        let archivoOrig = img.name;
        let posExt = archivoOrig.indexOf('.');
        let extension = archivoOrig.substring(posExt,archivoOrig.length);
        let random = Math.random().toString().substring(2,15);
        let fileName = "img" + "_" + currentUser.id + "_" + random + extension;

        let imageURL = await uploadImage(img, fileName, currentUser.id);
    
        updateUserImage(imageURL.files)

        setPicture(imageURL.files);            
    }

    return (
        <Page title="Perfil | Baby App">
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <Grid container spacing={4} alignItems="center" >
                        <Grid item>
                            <Stack>
                                <Avatar sx={{ width: 150, height: 150 }} src={picture} alt="photoURL" />
                                <div onClick={ () => { setOpenModal(true) } } >
                                    <Link sx={{ pl:4.5 }} href="#" underline="always" variant="caption">
                                        {"Cambiar Foto"}
                                    </Link>
                                </div>
                            </Stack>                            
                        </Grid>
                        <Grid item>
                            <Typography variant="h3">{currentUser.name + ' ' + currentUser.last_name}</Typography>
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
                                            value={name}
                                        />
                                        
                                        <TextField 
                                            fullWidth
                                            autoComplete="lastName"
                                            type="text"
                                            label="Apellido"
                                            value={lastName}
                                        />
                                        
                                        <TextField 
                                            fullWidth
                                            autoComplete="dni"
                                            type="text"
                                            label="DNI"
                                            value={dni}
                                            disabled
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
                                            value={mail}
                                            disabled
                                        />

                                        <TextField 
                                            fullWidth
                                            autoComplete="phone"
                                            type="text"
                                            label="Celular"
                                            value={phone}
                                        />
                                        
                                        <TextField 
                                            fullWidth
                                            autoComplete="address"
                                            type="text"
                                            label="Dirección"
                                            value={address}
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
                        { currentUser.children.map((c, id) => {
                            return (
                                <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={4}>
                                    <ChildCard child={c.child} />
                                </Grid>
                            )
                        }) }
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Button size="large" variant="contained" onClick={ () => { navigate("/main/agregarHijo", { replace: true } ) } } >+ Agregar Hijo</Button>                            
                        </Grid>
                    </Grid> 
                </Stack>
            </Container>
            <FileUploadModal open={ openModal } handleClose={ () => {setOpenModal(false)}} selectedImage = {(img) => { handleSelectedImage(img) }} />
        </Page>
    )
}