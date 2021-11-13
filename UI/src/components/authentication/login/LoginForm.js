import * as Yup from 'yup';
import React from 'react';
import { useState, useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { DataContext } from '../../../context'
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { withSnackbar } from 'src/components/snack/CustomSnack';

// ----------------------------------------------------------------------

function LoginForm({ snackbarShowMessage }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const { setCurrentUser, url, setToken } = useContext(DataContext);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('El email tiene que ser válido').required('Email requerido'),
    password: Yup.string().required('Contraseña requerida')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      const userLogin = {
        mail: getFieldProps('email').value,
        password: getFieldProps('password').value
      }
      fetch( url + "/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //'x-access-token': WebToken.webToken
        },
        body: JSON.stringify(userLogin),
      })
      .then((response) => response.json())
      .then((data) => {
        setIsSubmitting(false);
        if(data.error){
          snackbarShowMessage('Usuario o contraseña incorrectos', 'error')
          formik.setFieldValue("email", '')
          formik.setFieldValue("password", '')
          console.log(data.error);          
        } else {
          setCurrentUser(data.user); 
          setToken(data.token); 
          navigate('/main', { replace: true });
          //console.log("Success:", data);
        }
        
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("Error:", error);
      })      
    }
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
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
                    <IconButton onClick={handleShowPassword} edge="end" size="large">
                      <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <FormControlLabel
              control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
              label="Recordar"
            />

            <Link component={RouterLink} variant="subtitle2" to="#">
              Te olvidaste la contraseña?
            </Link>
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Ingresar
          </LoadingButton>
        </Form>
      </FormikProvider>
      </>
  );
}

export default withSnackbar(LoginForm);
