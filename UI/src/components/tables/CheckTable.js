import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CheckTable({ history }) {
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
                {history.map((row, id) => (
                    <TableRow
                    key={id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {new Date(row.date).toLocaleString()}
                    </TableCell>
                    <TableCell align="right">{row.result.height + ' Mts'}</TableCell>
                    <TableCell align="right">{row.result.weight + ' Kg'}</TableCell>
                    <TableCell align="right">{row.result.head_size + ' Cm'}</TableCell>
                    <TableCell align="right">{row.result.meds}</TableCell>
                    <TableCell align="right">{row.result.dose}</TableCell>
                    <TableCell align="right">{row.result.period}</TableCell>
                    <TableCell align="right">{row.result.study}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}