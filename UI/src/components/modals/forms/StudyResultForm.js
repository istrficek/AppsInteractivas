import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Button, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
    input: {
      display: 'none'
    }
}));

export default function StudyResultForm() {
    const classes = useStyles();

    const [state, setState] = useState({
                                    mainState: "initial", // initial, search, gallery, uploaded
                                    imageUploaded: 0,
                                    selectedFile: null
                                });
                            
    const LoginSchema = Yup.object().shape({
        date: Yup.date('Formato de fecha incorrecto').required('Fecha Requerida'),
        time: Yup.string().required('Hora Requerida'),
        doctor: Yup.string().required('Doctor Requerido')
    });

    const formik = useFormik({
        initialValues: {
        email: '',
        password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: () => {
        console.log("Perfectirijillo")
        }
    });

    const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

    const handleUploadClick = event => {
        //var file = event.target.files[0];
        const reader = new FileReader();
        //var url = reader.readAsDataURL(file);

        reader.onloadend = function(e) {
            setState({
            selectedFile: [reader.result] // Esta es la imagen en BASE64
            });
        }.bind(this);
        console.log(event.target.files); // Would see a path?

        setState({
            mainState: "uploaded",
            selectedFile: event.target.files[0],
            imageUploaded: 1
        });
    };    

    return (
        <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <TextField
                    fullWidth
                    type="text"
                    label="Nombre del Estudio"
                    {...getFieldProps('weight')}
                    error={Boolean(touched.weight && errors.weight)}
                    helperText={touched.weight && errors.weight}
                />

                <TextField
                    fullWidth
                    type="text"
                    label="Observaciones"
                    {...getFieldProps('height')}          
                    error={Boolean(touched.height && errors.height)}
                    helperText={touched.height && errors.height}
                />

                <input 
                    id="contained-button-file"  
                    className={classes.input}
                    accept="image/*" 
                    type="file" 
                    multiple
                    onChange={handleUploadClick}>                        
                </input>
                <label htmlFor="contained-button-file"> 
                    <Button variant="contained" component="span"> 
                        Subir Estudio 
                    </Button> 
                </label>                

                <LoadingButton            
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    >
                    Guardar
                </LoadingButton>
            
            </Stack>
            
        </Form>
        </FormikProvider>
    );
}
