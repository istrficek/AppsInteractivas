import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(name, date, observations) {
  return { name, date, observations};
}

const rows = [
  createData('Ecografía Abdominal', '12 Agosto 2021', 'Ninguna'),
  createData('Radiografía de Cabeza', '03 Enero 2021', 'Ninguna'),
];

export default function StudyTable() {
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Nombre del Estudio</TableCell>
                    <TableCell align="right">Fecha</TableCell>
                    <TableCell align="right">Observaciones</TableCell>
                    <TableCell align="right">Ver Archivos</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.observations}</TableCell>
                    <TableCell align="right"><Button>Ver</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}