// icons
import vaccine from '@iconify/icons-ic/outline-vaccines';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import doctorIcon from '@iconify/icons-healthicons/doctor';
// material
import { Box, Grid, Container, Typography, Divider } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewsUpdate,
  AppNextAppointment,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Baby App">
      <Container maxWidth="xl">
        {/* <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box> */}
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={4}>
            <AppNextAppointment text={'Próximo Control'} date={ {day:24, month:'Agosto'}} icon={doctorIcon} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppNextAppointment text={'Próximo Estudio'} date={ {day:30, month:'Septiembre'} } icon={fileTextFill} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppNextAppointment text={'Próxima Vacuna'} date={ {day:10, month:'Noviembre'} } icon={vaccine} />
          </Grid>         

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
