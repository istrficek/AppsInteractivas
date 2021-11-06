import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { phone } from 'faker';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [ isSubmitting, setIsSubmitting ] = useState(false); 

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Muy Corto!')
      .max(50, 'Muy Largo!')
      .required('Nombre Requerido'),
    lastName: Yup.string().min(2, 'Muy Corto!').max(50, 'Muy Largo!').required('Apellido Requerido'),
    dni: Yup.number().typeError('El DNI debe ser un número').min(1000000,'El DNI debe ser mayor a 1.000.000').max(99999999, 'El DNI debe ser menor a 99.999.999').required('DNI Requerido'),
    email: Yup.string().email('El email tiene que ser válido').required('Email Requerido'),
    phone: Yup.number().typeError('Ingrese el numero sin espacios ni signos').min(1100000000, 'El numero debe ser de la forma 11 + num').max(1199999999, 'El numero debe ser de la forma 11 + num').required('Telefono Requerido'),
    password: Yup.string().required('Contraseña Requerida')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dni: '',
      phone: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      setIsSubmitting(true);
      const newUser = {
        name: getFieldProps('firstName').value,
        last_name: getFieldProps('lastName').value,
        dni: getFieldProps('dni').value,
        phone: getFieldProps('phone').value,
        mail: getFieldProps('email').value,
        password: getFieldProps('password').value
      }
      fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsSubmitting(false);
          console.log("Success:", data);
        })
        .catch((error) => {
          setIsSubmitting(false);
          console.error("Error:", error);
        })
      //navigate('/main', { replace: true });
    }
  });

  var { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Nombre"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Apellido"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="dni"
            label="DNI"
            {...getFieldProps('dni')}
            error={Boolean(touched.dni && errors.dni)}
            helperText={touched.dni && errors.dni}
          />

          <TextField
            fullWidth
            autoComplete="phone"
            label="Telefono"
            {...getFieldProps('phone')}
            error={Boolean(touched.phone && errors.phone)}
            helperText={touched.phone && errors.phone}
          />

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Contraseña"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)} size="large">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Registrarse
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
