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
import VaccineSelect from 'src/components/VaccineSelect';

// ----------------------------------------------------------------------

export default function NewVaccineForm({ onFinish }) {
  const [newDate, setNewDate] = useState(new Date())
  const [selectedVaccine, setSelectedVaccine] = useState({});
  const { currentChildId } = useContext(DataContext);

  const LoginSchema = Yup.object().shape({    
    address: Yup.string().required('Dirección Requerida'),
    doctor: Yup.string().required('Pediatra Requerido'),
  });

  const dateTimeCallback = (date) => {
    setNewDate(date);
  }

  const setNewVaccine = async function(newVaccine){
    await fetch(URLService.setNewVaccine, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVaccine),
      })
  }

  const vaccineValueHandler = function(vac) {
    setSelectedVaccine(vac);
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
      let description = selectedVaccine.vaccine;
      let dosis = selectedVaccine.dosis;
      let date = newDate;
      let child_id = currentChildId;

      setNewVaccine({address, doctor, date, child_id, description, dosis})

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

          <VaccineSelect valueChanged={(vac) => vaccineValueHandler(vac)}/>      

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
