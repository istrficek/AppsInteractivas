import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Link } from '@mui/material';

export default function StudyTable({history}) {
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
                {history.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.description}
                    </TableCell>
                    <TableCell align="right">{new Date(row.date).toLocaleString()}</TableCell>
                    <TableCell align="right">{row.result.observations}</TableCell>
                    <TableCell align="right"><a target="_blank" download="estudio.jpg" href={row.result.files} >Ver</a></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}