import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Button, Checkbox, Divider, FormControlLabel, Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useContext, useState } from 'react';
import { DataContext } from 'src/context';
import { URLService } from 'src/services/URLService';
import FileUploadModal from 'src/components/FileUploadModal';

// ----------------------------------------------------------------------

export default function CheckResultForm({ id, onFinish }) {
    const { currentUser } = useContext(DataContext);
    const [image, setImage] = useState(undefined);
    const [observations, setObservations] = useState(undefined);
    const [openFileUpload, setOpenFileUpload] = useState(false);

  const setStudyResult = async function(result){
    await fetch(URLService.setStudyResult, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      })
  }

  const handleButtonPress = () => {
    setOpenFileUpload(true);
  }

  const uploadImage = async function(file, name){
    try{
        let url = URLService.uploadImageURL;
        const formData = new FormData;
        formData.append('files', file, name);

        let response = await fetch(url, {
            method: 'POST',
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'x-access-token': localStorage.getItem('token'),
                'Origin':'http://localhost:3000',
            },
            body:formData
        });

        let files = await response.json()
        console.log('uploadResponse', files);
        return files;

    } catch {
        alert('Error uploading the files')
        console.log('Error uploading the files')
    }
}

  
  const handleSelectedImage = async function(img){
    let archivoOrig = img.name;
    let posExt = archivoOrig.indexOf('.');
    let extension = archivoOrig.substring(posExt,archivoOrig.length);
    let random = Math.random().toString().substring(2,15);
    let fileName = "img" + "_" + currentUser.id + "_" + random + extension;

    let files = await uploadImage(img, fileName);

    setImage(files.files);

    setOpenFileUpload(false)

  }

  const handleSubmit = () => {
    if(observations !== '' && observations !== undefined) {
        let obs = observations
        let files = image
        let study_id = id

        setStudyResult({obs, study_id, files})

        onFinish();
    }
  }

  const formik = useFormik({
    onSubmit: () => {
        
    }
  });

  const observationsChanged = function(e) {
      setObservations(e.target.value)
  }

//   const { isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>

            <TextField
                fullWidth
                type="text"
                label="Observaciones"
                value={observations}
                onChange={observationsChanged}
                error = { observations === '' }
                helperText = { observations === '' ? 'El Campo de Resultado es Requerido' : '' }
            />

            <Button sx={{ width: '25%' }} variant='outlined' onClick={handleButtonPress}>Subir Imágen</Button>

            <Typography>{ image === undefined ? 'Ninguna imagen seleccionada' : image.name }</Typography>

            {/* <LoadingButton            
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                >
                Subir Resultado
            </LoadingButton> */}
            <Button
                size="large"
                variant="contained"
                onClick={handleSubmit}>
                Subir Resultado
            </Button>
          
        </Stack>
        
      </Form>
      <FileUploadModal open={ openFileUpload } handleClose={ () => {setOpenFileUpload(false)}} selectedImage = {(img) => { handleSelectedImage(img) }} />
    </FormikProvider>
  );
}
