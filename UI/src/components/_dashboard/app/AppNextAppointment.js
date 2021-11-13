import { styled, alpha } from '@mui/material/styles';
import { Card, Grid, Typography, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const RootStyle = styled(Card)(({theme}) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(3,0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '10%',
  alignItems: 'center',
  width: theme.spacing(30),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  color: theme.palette.info.dark
}));

const DateWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '0%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    color: theme.palette.info.dark,
    backgroundColor: `${alpha(theme.palette.info.dark, 0.1)}` 
  }));

export default function AppNextAppointment({ text, date, icon, url }) {
  const navigate = useNavigate();

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={12}>
                <Icon icon={icon} width={40} height={40} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h4">
                    {text}
                </Typography>
            </Grid>
        </Grid>
      </IconWrapperStyle>
      <DateWrapperStyle>
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h3" sx={{ opacity: 0.72 }}> {date.day} </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h4" sx={{ opacity: 0.72 }}> {date.month} </Typography>
            </Grid>
        </Grid>
      </DateWrapperStyle>
      <Button variant="contained" color="primary" onClick={()=>{navigate(url, { replace: true });}}>
        Ver
      </Button>
    </RootStyle>
  );
}
