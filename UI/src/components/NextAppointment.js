import { styled, alpha } from '@material-ui/core/styles';
import { Card, Grid, Typography, Button, Stack } from '@material-ui/core';
import { Icon } from '@iconify/react';
import clockOutline from '@iconify/icons-eva/clock-outline';
import mapOutline from '@iconify/icons-eva/map-outline';
import doctorIcon from '@iconify/icons-healthicons/doctor';

const RootStyle = styled(Card)(({theme}) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(3,0),
    color: theme.palette.info.darker,
    backgroundColor: theme.palette.info.lighter
  }));
  
  const TitleWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    //borderRadius: '10%',
    alignItems: 'center',
    //width: theme.spacing(50),
    height: theme.spacing(6),
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    color: theme.palette.info.dark,
    backgroundColor: `${alpha(theme.palette.info.dark, 0.1)}` 
  }));
  
  const DateWrapperStyle = styled('div')(({ theme }) => ({
      //margin: 'auto',
      paddingLeft: theme.spacing(5),
      display: 'flex',
      borderRadius: '0%',
      alignItems: 'left',
      justifyContent: 'left',
      marginBottom: theme.spacing(2),
      color: `${alpha(theme.palette.info.dark, 0.7)}`,
      
    }));

    const ResultsButtonStyle = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: theme.spacing(5),
        //color: `${alpha(theme.palette.info.dark, 0.7)}`,        
      }));

export default function NextAppointment() {
    return(
        <RootStyle>
            <TitleWrapperStyle>
                <Typography variant="h4">
                    Próximo Control Médico
                </Typography>
            </TitleWrapperStyle>
            <DateWrapperStyle>
                <Stack spacing={2}>
                    <Stack direction="row" spacing={2}>
                        <Icon icon={clockOutline} width={20} height={25} />
                        <Typography variant="h6">
                            24 de Agosto a las 15:30
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Icon icon={mapOutline} width={20} height={25} />
                        <Typography variant="h6">
                            Corrientes 2241 "2 B"
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Icon icon={doctorIcon} width={20} height={25} />
                        <Typography variant="h6">
                            Dra. Micaela Massa 
                        </Typography>
                    </Stack>                    
                </Stack>
            </DateWrapperStyle>
            <ResultsButtonStyle>
                <Button color="secondary" variant="contained">Agregar Resultados</Button>   
            </ResultsButtonStyle>                  
        </RootStyle>
    )
}