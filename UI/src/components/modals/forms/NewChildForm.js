import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
    Avatar,
  Grid,
  Stack,
  TextField
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useContext, useState } from 'react';
import { URLService } from 'src/services/URLService';
import { DataContext } from 'src/context';
import DatePickerWrapper from 'src/components/DatePickerWrapper';
import ComboBox from 'src/components/ComboBox';
import TagsInput from 'src/components/TagsInput';
import FileUploadModal from 'src/components/FileUploadModal';
import { uploadImage } from 'src/services/UserService';

// ----------------------------------------------------------------------

export default function NewChildForm({ onFinish }) {
  const [newDate, setNewDate] = useState(new Date())
  const [allergies, setAllergies] = useState([])
  const [cronicDisease, setCronicDisease] = useState([])
  const [bloodType, setBloodType] = useState(-1)
  const [picture, setPicture] = useState('/static/mock-images/childs/baby.jpg')
  const [openFileUpload, setOpenFileUpload] = useState(false);
  const { currentUser } = useContext(DataContext);

  const LoginSchema = Yup.object().shape({    
    name: Yup.string().min(2, 'Muy Corto!').max(50, 'Muy Largo!').required('Nombre Requerido'),
    last_name: Yup.string().min(2, 'Muy Corto!').max(50, 'Muy Largo!').required('Apellido Requerido'),
    dni: Yup.number().typeError('El DNI debe ser un número').min(1000000,'El DNI debe ser mayor a 1.000.000').max(99999999, 'El DNI debe ser menor a 99.999.999').required('DNI Requerido'),
  });

  const dateTimeCallback = (date) => {
    setNewDate(date);
  }

  const handleSelectedImage = async function(img){
    let archivoOrig = img.name;
    let posExt = archivoOrig.indexOf('.');
    let extension = archivoOrig.substring(posExt,archivoOrig.length);
    let random = Math.random().toString().substring(2,15);
    let fileName = "img" + "_" + currentUser.id + "_" + random + extension;

    let response = await uploadImage(img, fileName, currentUser.id);

    setPicture(response.files);

    setOpenFileUpload(false)

  }

  const setNewCheck = async function(newCheck){
    await fetch(URLService.setNewCheck, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCheck),
      })
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      let name = getFieldProps('name').value
      let last_name = getFieldProps('last_name').value
      let dni = getFieldProps('dni').value
      let birthday = newDate
      let blood_type_id = bloodType
      let aller = allergies
      let cronic_diseases = cronicDisease
      let picture = ''
      let user_id = currentUser.id

      console.log({name, last_name, dni, birthday, blood_type_id, aller, cronic_diseases, picture, user_id})

    //   setNewCheck({address, doctor, date, child_id})

    //   onFinish();
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
        
        <Grid container justifyContent='center'>
            <Grid item >
            <div style={{cursor: 'pointer'}} onClick={() => setOpenFileUpload(true)}>
                <Avatar sx={{ height:200, width: 200, pl:'10%' }} src={picture} alt="babyAvatar" />
            </div>
            </Grid>
        </Grid>  
         
        <TextField
            fullWidth
            type="text"
            label="Nombre"
            {...getFieldProps('name')}          
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}
          />

        <TextField
            fullWidth
            type="text"
            label="Apellido"
            {...getFieldProps('last_name')}          
            error={Boolean(touched.last_name && errors.last_name)}
            helperText={touched.last_name && errors.last_name}
          />

        <DatePickerWrapper label='Fecha de Nacimiento' errorMsg='La fecha debe ser posterior a la actual' valueCallBack={dateTimeCallback} />

        <TextField
            fullWidth
            type="text"
            label="DNI"
            {...getFieldProps('dni')}          
            error={Boolean(touched.dni && errors.dni)}
            helperText={touched.dni && errors.dni}
        />

        <ComboBox value={bloodType} /> 

        <TagsInput
            selectedTags={(allergy) => { setAllergies(allergy) } }
            fullWidth
            variant="outlined"
            id="tags"
            name="tags"
            placeholder="agregar con enter"
            label="Alergias"  
            tags={allergies}                              
        />

        <TagsInput
            selectedTags={(diseases) => { setCronicDisease(diseases) } }
            fullWidth
            variant="outlined"
            id="tags"
            name="tags"
            placeholder="agregar con enter"
            label="Enfermedades Crónicas"  
            tags={cronicDisease}                              
        />        

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            >
            Agregar Hijo
          </LoadingButton>
        </Stack>
      </Form>
    <FileUploadModal open={ openFileUpload } handleClose={ () => {setOpenFileUpload(false)}} selectedImage = {(img) => { handleSelectedImage(img) }} />
    </FormikProvider>
  );
}
