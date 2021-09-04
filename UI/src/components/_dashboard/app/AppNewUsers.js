import { Icon } from '@iconify/react';
import appleFilled from '@iconify/icons-ant-design/apple-filled';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(3,0,5,0),
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

// ----------------------------------------------------------------------

const TOTAL = 1352831;

export default function AppNewUsers() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        {/* <Icon icon={appleFilled} width={24} height={24} /> */}
        <Typography variant="h4">
          Próximo Control
        </Typography>
      </IconWrapperStyle>
      <Typography variant="h3">
        31  
      </Typography>
      <Typography variant="h4" sx={{ opacity: 0.72 }}>
        Marzo
      </Typography>
    </RootStyle>
  );
}
