import { AppBar, Toolbar, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

function TruckHeader() {
    return (
        <React.Fragment>
            <AppBar color='error' position="static" >
                <Toolbar>
                    <Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Автомобили
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

const SyledTableRow = styled(TableRow)({
    '&:last-child td, &:last-child th': { border: 0, }
});

export default function TruckDutyTable({ trucksData }) {

    var temp = 1;

    function getRowNum() {
        return temp++;
    }

    return (
        <TableContainer component={Paper} elevation={3}>
            <TruckHeader/>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell >№</TableCell>
                        <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>Структура</TableCell>
                        <TableCell >Автомобил</TableCell>
                        <TableCell>Рег. №</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {trucksData.map((truck, index) => (
                        truck.onDuty ?
                            <SyledTableRow key={truck.id}>
                                <TableCell >{getRowNum()}</TableCell>
                                <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>{truck.structure}</TableCell>
                                <TableCell>{`${truck.brand}  ${truck.model}`}</TableCell>
                                <TableCell>{truck.regNum}</TableCell>
                            </SyledTableRow>
                            :
                            ''
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
