import { AppBar, Button, Container, Divider, Grid, Toolbar, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router";
import BabiesHealthCardCard from "src/components/landing/BabiesHealthCard";
import ControlsCard from "src/components/landing/ControlsCard";
import InfoForMothersCard from "src/components/landing/InfoForMothersCard";
import PediatricControlCard from "src/components/landing/PediatricControlsCard";
import PercentileCard from "src/components/landing/PercentileCard";
import StudyCard from "src/components/landing/StudyCard";
import VaccinationCalendarCard from "src/components/landing/VaccinationCalendarCard";
import VaccineCard from "src/components/landing/VaccineCard";
import Page from "src/components/Page";
import { alpha } from '@mui/material/styles';
import Logo from "src/components/Logo";
import { Box } from "@mui/system";
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container: {
      background: `url(/static/landing/family.jpg) no-repeat fixed center`,
      backgroundSize: 'cover',
    }
    }));

export default function Landing() {
    const navigate = useNavigate();
    const classes = useStyles();

    const LoginClick = () => {
        navigate('/login', { replace: true });
    }
    const RegisterClick = () => {
        navigate('/register', { replace: true });
    }

    return(
        <Page className={classes.container} title="Baby App">
          <AppBar position="static">
              <Toolbar>
                  <Box component="img" src="/static/Baby-App-Face.png" sx={{ mr:3, pb:0.5,  width: 50, height: 50 }} />
                  <Typography variant="h6" className={classes.title}>
                  Baby App
                  </Typography>
                  <Button color="inherit" onClick={RegisterClick}>Registrarse</Button>
                  <Button color="inherit" onClick={LoginClick}>Ingresar</Button>
              </Toolbar>
          </AppBar>
          <Container sx={{ mt: 5 }}  maxWidth="xl">
          <Typography variant="h3" > Que te ofrecemos </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={5} md={4} lg={3}>
                <ControlsCard />
              </Grid>
              <Grid item xs={12} sm={5} md={4} lg={3}>
                <StudyCard />
              </Grid>
              <Grid item xs={12} sm={5} md={4} lg={3}>
                <VaccineCard />
              </Grid>
              <Grid item xs={12} sm={5} md={4} lg={3}>
                <PercentileCard />
              </Grid>
            </Grid>
            <Divider sx={{ mt: 5, mb: 5 }} />
            <Typography variant="h3" > Artículos Útiles </Typography>
            {/* <Grid container spacing={1}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <VaccinationCalendarCard />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <PediatricControlCard />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <BabiesHealthCardCard />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <InfoForMothersCard />
              </Grid>          
            </Grid> */}
            <Masonry columns={2} spacing={2}>
              <MasonryItem key={1}>
                <VaccinationCalendarCard />
              </MasonryItem>
              <MasonryItem key={2}>
                <PediatricControlCard />
              </MasonryItem>
              <MasonryItem key={3}>
                <BabiesHealthCardCard />
              </MasonryItem>
              <MasonryItem key={4}>
                <InfoForMothersCard />
              </MasonryItem>
            </Masonry>
          </Container>
        </Page>        
    )
}