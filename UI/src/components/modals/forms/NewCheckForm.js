import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

export default function NewCheckForm() {
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

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            type="text"
            label="Fecha"
            {...getFieldProps('date')}
            error={Boolean(touched.date && errors.date)}
            helperText={touched.date && errors.date}
          />

          <TextField
            fullWidth
            type="text"
            label="Hora"
            {...getFieldProps('time')}          
            error={Boolean(touched.time && errors.time)}
            helperText={touched.time && errors.time}
          />

          <TextField
            fullWidth
            type="text"
            label="Pediatra"
            {...getFieldProps('doctor')}          
            error={Boolean(touched.doctor && errors.doctor)}
            helperText={touched.doctor && errors.doctor}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            >
            Programar
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
