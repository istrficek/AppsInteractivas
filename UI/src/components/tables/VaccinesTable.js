import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function VaccineTable({ history }) {
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Nombre de la Vacuna</TableCell>
                    <TableCell align="right">Dosis</TableCell>
                    <TableCell align="right">Fecha</TableCell>
                    <TableCell align="right">Vacunatorio</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {history.map((row) => (
                    <TableRow
                    key={row.description}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.description}
                    </TableCell>
                    <TableCell align="right">{row.dosis}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}