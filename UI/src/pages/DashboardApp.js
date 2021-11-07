import React, { useEffect } from 'react';
// icons
import vaccine from '@iconify/icons-ic/outline-vaccines';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import doctorIcon from '@iconify/icons-healthicons/doctor';
// material
import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';
import { AppNextAppointment } from '../components/_dashboard/app';
import { withSnackbar } from '../components/snack/CustomSnack';
import { useLocation } from 'react-router';


// ----------------------------------------------------------------------

function DashboardApp({ snackbarShowMessage }) {
  const location = useLocation();
  
  useEffect(() => {
    console.log(location);
    if(location.pathname.includes('login')){
      snackbarShowMessage('Bienvenide!')
    }
  }, []);

  return (
    <Page title="Dashboard | Baby App">
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={4}>
            <AppNextAppointment text={'Próximo Control'} date={ {day:24, month:'Agosto'}} icon={doctorIcon} url="/main/controles/roberto" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppNextAppointment text={'Próximo Estudio'} date={ {day:30, month:'Septiembre'} } icon={fileTextFill} url="/main/estudios/roberto" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppNextAppointment text={'Próxima Vacuna'} date={ {day:10, month:'Noviembre'} } icon={vaccine} url="/main/vacunas/roberto" />
          </Grid>         
        </Grid>
      </Container>
      {/* <CustomSnack open={open} type='success' text='Login exitoso. Bienvenido!' close={()=>{ setOpen(false) }} /> */}
    </Page>
  );
}

export default withSnackbar(DashboardApp);
