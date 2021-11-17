import React, { useContext, useEffect, useState } from 'react';
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
import { DataContext } from '../context'
import { getDashboard } from '../services/DashboardService';
import { URLService } from "../services/URLService";
import { fDateTimeDayMonth } from 'src/utils/formatTime';


// ----------------------------------------------------------------------

function DashboardApp({ snackbarShowMessage }) {
  const { currentUser } = useContext(DataContext); 
  const [ nextCheckDate, setNextCheckDate ] = useState(undefined);
  const [ nextStudyDate, setNextStudyDate ] = useState(undefined);
  const [ nextVaccineDate, setNextVaccineDate ] = useState(undefined);
  const [ nextCheckName, setNextCheckName ] = useState(undefined)
  const [ nextStudyName, setNextStudyName ] = useState(undefined)
  const [ nextVaccineName, setNextVaccineName ] = useState(undefined)
  const [ nextCheckId, setNextCheckId ] = useState(undefined)
  const [ nextStudyId, setNextStudyId ] = useState(undefined)
  const [ nextVaccineId, setNextVaccineId ] = useState(undefined)
  
  useEffect(() => {
    fetchAppointments(currentUser.id);
  }, []);

  const fetchAppointments = async function(userId) {
    await fetch(URLService.getDashboardURL + userId)
      .then((response) => response.json())
      .then((appointments) => {   
          if ( appointments.check !== '' ){
            setNextCheckDate(fDateTimeDayMonth(new Date(appointments.check.date)))
            setNextCheckId(appointments.check.id)
            setNextCheckName(appointments.check.name)
          }
          if ( appointments.study !== '' ){
            setNextStudyDate(fDateTimeDayMonth(new Date(appointments.study.date)))
            setNextStudyId(appointments.study.id)
            setNextStudyName(appointments.study.name)
          }
          if ( appointments.vaccine !== '' ){
            setNextVaccineDate(fDateTimeDayMonth(new Date(appointments.vaccine.date)))
            setNextVaccineId(appointments.vaccine.id)
            setNextVaccineName(appointments.vaccine.name)
          }
      })   
      .catch((error) => { console.log(error) })   
  }

  return (
    <Page title="Dashboard | Baby App">
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={4}>
            <AppNextAppointment text={'Próximo Control'} date={ nextCheckDate } name={ nextCheckName } icon={doctorIcon} url={"/main/controles/" + nextCheckId} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppNextAppointment text={'Próximo Estudio'} date={ nextStudyDate } name={ nextStudyName } icon={fileTextFill} url={"/main/estudios/" + nextStudyId} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppNextAppointment text={'Próxima Vacuna'} date={ nextVaccineDate } name={ nextVaccineName } icon={vaccine} url={"/main/vacunas/" + nextVaccineId} />
          </Grid>         
        </Grid>
      </Container>
      {/* <CustomSnack open={open} type='success' text='Login exitoso. Bienvenido!' close={()=>{ setOpen(false) }} /> */}
    </Page>
  );
}

export default withSnackbar(DashboardApp);
