import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { useNavigate } from "react-router";
import Page from "src/components/Page";

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
        <Page title="Baby App">
          <AppBar position="static">
              <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                  Baby App
                  </Typography>
                  <Button color="inherit" onClick={RegisterClick}>Registrarse</Button>
                  <Button color="inherit" onClick={LoginClick}>Ingresar</Button>
              </Toolbar>
          </AppBar>
        </Page>        
    )
}