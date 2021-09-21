import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';
import AuthSocial from '../components/authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Registro | Baby App">

      {/* <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Manage the job more effectively with Minimal
          </Typography>
          <img alt="register" src="/static/illustrations/illustration_register.png" />
        </SectionStyle>
      </MHidden> */}

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Regístrarse es completamente gratis.
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              La aplicación continuará siendo gratuita.
            </Typography>
          </Box>

          {/* <AuthSocial /> */}

          <RegisterForm />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            Al registrarme acepto las&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Condiciones de Servicio
            </Link>
            &nbsp;y las&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Políticas de Privacidad
            </Link>
            .
          </Typography>

          {/* <MHidden width="smUp"> */}
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Ya tenés cuenta?&nbsp;
              <Link to="/login" component={RouterLink}>
                Ingresar
              </Link>
            </Typography>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              <Link variant="subtitle2" component={RouterLink} to="/">
                Volver
              </Link>
          </Typography>
          {/* </MHidden> */}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
