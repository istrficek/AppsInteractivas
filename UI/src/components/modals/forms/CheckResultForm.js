import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Checkbox, Divider, FormControlLabel, Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useContext, useState } from 'react';
import { DataContext } from 'src/context';
import { URLService } from 'src/services/URLService';

// ----------------------------------------------------------------------

export default function CheckResultForm({ id, onFinish }) {
    const [showMeds, setShowMeds] = useState(false);
    const [showStudy, setShowStudy] = useState(false);

  const LoginSchema = Yup.object().shape({
    weight: Yup.number().typeError('Ingrese el peso en kilogramos').min(1.0, 'El peso debe ser mayor a 1 Kg').required('Peso Requerido'),
    height: Yup.number().typeError('Ingrese la altura en centimetros').min(40, 'El la altura debe ser mayor a 40 Cm').required('Altura Requerido'),
    headSize: Yup.number().typeError('Ingrese el diametro de la cabeza en centímetros').min(5, 'El diámetro de la cabeza debe ser mayor a 5 cm').required('Diámetro de Cabeza Requerido')
  });

  const setCheckResult = async function(result){
    await fetch(URLService.setCheckResult, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      })
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      let weight = getFieldProps('weight').value
      let height = getFieldProps('height').value
      let head_size = getFieldProps('headSize').value
      let meds = getFieldProps('meds').value
      let dose = getFieldProps('dose').value
      let period = getFieldProps('period').value
      let study = getFieldProps('study').value
      let observations = getFieldProps('observations').value
      let check_id = id

      setCheckResult({weight, height, head_size, meds, dose, period, study, observations, check_id})

      onFinish();
    }
  });

  const handleChangeMeds = (event) => {
    setShowMeds(event.target.checked);
  }

  const handleChangeStudy = (event) => {
    setShowStudy(event.target.checked);
  }

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
            <TextField
                fullWidth
                type="text"
                label="Peso (Kgr)"
                {...getFieldProps('weight')}
                error={Boolean(touched.weight && errors.weight)}
                helperText={touched.weight && errors.weight}
            />

            <TextField
                fullWidth
                type="text"
                label="Altura (Cm)"
                {...getFieldProps('height')}          
                error={Boolean(touched.height && errors.height)}
                helperText={touched.height && errors.height}
            />

            <TextField
                fullWidth
                type="text"
                label="Diámetro Cabeza (Cms)"
                {...getFieldProps('headSize')}          
                error={Boolean(touched.headSize && errors.headSize)}
                helperText={touched.headSize && errors.headSize}
            />
          <FormControlLabel
            control={ <Checkbox name="meds" onChange={handleChangeMeds} /> }
            label="Se Recetaron Medicamentos?"
          />

          { showMeds && (
            <>
              <Typography variant="subtitle1"> Medicamentos </Typography>
              <TextField
                  fullWidth
                  type="text"
                  label="Medicamento"
                  {...getFieldProps('meds')}          
                  error={Boolean(touched.meds && errors.meds)}
                  helperText={touched.meds && errors.meds}
              />
              <TextField
                  fullWidth
                  type="text"
                  label="Dosis"
                  {...getFieldProps('dose')}          
                  error={Boolean(touched.dose && errors.dose)}
                  helperText={touched.dose && errors.dose}
              />
              <TextField
                  fullWidth
                  type="text"
                  label="Período"
                  {...getFieldProps('period')}          
                  error={Boolean(touched.period && errors.period)}
                  helperText={touched.period && errors.period}
              />
              <Divider />
            </>
          ) }

          <FormControlLabel
            control={ <Checkbox name="study" onChange={handleChangeStudy} /> }
            label="Se Pidió Algún Estudio?"
          />

          { showStudy && (
            <>
              <Typography variant="subtitle1"> Estudios </Typography>
              <TextField
                  fullWidth
                  type="text"
                  label="Estudio"
                  {...getFieldProps('study')}          
                  error={Boolean(touched.study && errors.study)}
                  helperText={touched.study && errors.study}
              />
              <Divider />
            </>
          ) }

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
