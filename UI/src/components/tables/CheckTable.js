import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, height, weight, head, med, dosis, periodo, study) {
  return { date, height, weight, head, med, dosis, periodo, study};
}

const rows = [
  createData('04 Marzo 2021', '76 Cm', '5 Kg', '19 cm', 'Ibuprofeno', '1 ml', '2 Días', 'No'),
  createData('20 Junio 2021', '95 Cm', '8 Kg', '21 cm', 'No', '-', '-', 'Sangre Completo'),  
];

export default function CheckTable() {
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Fecha</TableCell>
                    <TableCell align="right">Altura</TableCell>
                    <TableCell align="right">Peso</TableCell>
                    <TableCell align="right">Diámetro de Cabeza</TableCell>
                    <TableCell align="right">Medicamento</TableCell>
                    <TableCell align="right">Dósis</TableCell>
                    <TableCell align="right">Período</TableCell>
                    <TableCell align="right">Estudio</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.date}
                    </TableCell>
                    <TableCell align="right">{row.height}</TableCell>
                    <TableCell align="right">{row.weight}</TableCell>
                    <TableCell align="right">{row.head}</TableCell>
                    <TableCell align="right">{row.med}</TableCell>
                    <TableCell align="right">{row.dosis}</TableCell>
                    <TableCell align="right">{row.periodo}</TableCell>
                    <TableCell align="right">{row.study}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}