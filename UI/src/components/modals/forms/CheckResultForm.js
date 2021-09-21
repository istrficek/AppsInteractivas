import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Checkbox, Divider, FormControlLabel, Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import DateTimePickerWrapper from 'src/components/DateTimePickerWrapper';

// ----------------------------------------------------------------------

export default function CheckResultForm() {
    const [showMeds, setShowMeds] = useState(false);
    const [showStudy, setShowStudy] = useState(false);

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

  const handleChangeMeds = (event) => {
    setShowMeds(event.target.checked);
  }

  const handleChangeStudy = (event) => {
    setShowStudy(event.target.checked);
  }

  function Meds() {
    return(
        <>
            <Typography variant="subtitle1"> Medicamentos </Typography>
            <TextField
                fullWidth
                type="text"
                label="Medicamento"
            />
            <TextField
                fullWidth
                type="text"
                label="Dosis"
            />
            <TextField
                fullWidth
                type="text"
                label="Período"
            />
            <Divider />
        </>
    )
  }

  function Study() {
      return(
          <>
            <Typography variant="subtitle1"> Estudios </Typography>
            <TextField
                fullWidth
                type="text"
                label="Estudio"
            />
            <Divider />
          </>
      )
  }



  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
            <TextField
                fullWidth
                type="text"
                label="Peso"
                {...getFieldProps('weight')}
                error={Boolean(touched.weight && errors.weight)}
                helperText={touched.weight && errors.weight}
            />

            <TextField
                fullWidth
                type="text"
                label="Altura"
                {...getFieldProps('height')}          
                error={Boolean(touched.height && errors.height)}
                helperText={touched.height && errors.height}
            />

            <TextField
                fullWidth
                type="text"
                label="Diámetro Cabeza"
                {...getFieldProps('headSize')}          
                error={Boolean(touched.headSize && errors.headSize)}
                helperText={touched.headSize && errors.headSize}
            />
          <FormControlLabel
            control={ <Checkbox name="meds" onChange={handleChangeMeds} /> }
            label="Se Recetaron Medicamentos?"
          />

          { showMeds && <Meds/> }

          <FormControlLabel
            control={ <Checkbox name="study" onChange={handleChangeStudy} /> }
            label="Se Pidió Algún Estudio?"
          />

          { showStudy && <Study /> }

          <TextField
            fullWidth
            multiline
            type="text"
            label="Observaciones"
            {...getFieldProps('observations')}          
            error={Boolean(touched.observations && errors.observations)}
            helperText={touched.observations && errors.observations}
          />

          <LoadingButton            
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            >
            Subir Resultado
          </LoadingButton>
          
        </Stack>
        
      </Form>
    </FormikProvider>
  );
}
