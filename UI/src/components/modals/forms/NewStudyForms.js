import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Stack,
  TextField
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import DateTimePickerWrapper from 'src/components/DateTimePickerWrapper';
import { useContext, useState } from 'react';
import { URLService } from 'src/services/URLService';
import { DataContext } from 'src/context';

// ----------------------------------------------------------------------

export default function NewStudyForm({ onFinish }) {
  const [newDate, setNewDate] = useState(new Date())
  const { currentChildId } = useContext(DataContext);

  const LoginSchema = Yup.object().shape({    
    address: Yup.string().required('Dirección Requerida'),
    doctor: Yup.string().required('Pediatra Requerido'),
    description: Yup.string().required('Descripción del Estudio Requerido'),
  });

  const dateTimeCallback = (date) => {
    setNewDate(date);
  }

  const setNewCheck = async function(newCheck){
    await fetch(URLService.setNewStudy, {
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
      let address = getFieldProps('address').value
      let doctor = getFieldProps('doctor').value
      let description = getFieldProps('description').value
      let date = newDate
      let child_id = currentChildId

      setNewCheck({address, doctor, date, child_id, description})

      onFinish();
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <DateTimePickerWrapper label='Fecha y Hora' errorMsg='La fecha debe ser posterior a la actual' valueCallBack={dateTimeCallback} />

          <TextField
            fullWidth
            type="text"
            label="Direccion"
            {...getFieldProps('address')}          
            error={Boolean(touched.address && errors.address)}
            helperText={touched.address && errors.address}
          />

          <TextField
            fullWidth
            type="text"
            label="Pediatra"
            {...getFieldProps('doctor')}          
            error={Boolean(touched.doctor && errors.doctor)}
            helperText={touched.doctor && errors.doctor}
          />

          <TextField
            fullWidth
            type="text"
            label="Descripción"
            {...getFieldProps('description')}          
            error={Boolean(touched.description && errors.description)}
            helperText={touched.description && errors.description}
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
