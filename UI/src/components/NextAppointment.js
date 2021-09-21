import { styled, alpha } from '@mui/material/styles';
import { Card, Typography, Button, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
import clockOutline from '@iconify/icons-eva/clock-outline';
import mapOutline from '@iconify/icons-eva/map-outline';
import doctorIcon from '@iconify/icons-healthicons/doctor';
import vaccineIcon from '@iconify/icons-ic/outline-vaccines';
import fileTextFill from '@iconify/icons-eva/file-text-fill';

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

export default function NextAppointment({ title, date, location, doctor, study, vaccine, buttonPress }) {
    return(
        <RootStyle>
            <TitleWrapperStyle>
                <Typography variant="h4">
                    {title}
                </Typography>
            </TitleWrapperStyle>
            <DateWrapperStyle>
                <Stack spacing={2}>
                    <Stack direction="row" spacing={2}>
                        <Icon icon={clockOutline} width={20} height={25} />
                        <Typography variant="h6">
                            {date}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Icon icon={mapOutline} width={20} height={25} />
                        <Typography variant="h6">
                            {location}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Icon icon={doctorIcon} width={20} height={25} />
                        <Typography variant="h6">
                            {doctor} 
                        </Typography>
                    </Stack>
                    {study && <Stack direction="row" spacing={2}> <Icon icon={fileTextFill} width={20} height={25} /> <Typography variant="h6"> {study}  </Typography> </Stack> }
                    {vaccine && <Stack direction="row" spacing={2}> <Icon icon={vaccineIcon} width={20} height={25} /> <Typography variant="h6"> {vaccine}  </Typography> </Stack> }               
                </Stack>
            </DateWrapperStyle>
            <ResultsButtonStyle>
                <Button color="secondary" variant="contained" onClick={()=>buttonPress()}>Subir Resultados</Button>   
            </ResultsButtonStyle>                  
        </RootStyle>
    )
}