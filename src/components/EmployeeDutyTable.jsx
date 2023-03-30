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

function EmployeeDutyHeader() {
    return (
        <React.Fragment>
            <AppBar color='info' position="static" >
                <Toolbar>
                    <Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Служители
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

const SyledTableRow = styled(TableRow)({
    '&:last-child td, &:last-child th': { border: 0, }
});

export default function EmployeeDutyTable({ employeesData }) {

    var temp = 1;

    function getRowNum() {
        return temp++;
    }

    return (
        <TableContainer component={Paper} elevation={3}>
            <EmployeeDutyHeader />
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell >№</TableCell>
                        <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>Структура</TableCell>
                        <TableCell >Длъжност</TableCell>
                        <TableCell>Име Фамилия</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {employeesData.map((employee) => (
                        employee.onDuty
                            ? < SyledTableRow key={employee.id} >
                                <TableCell >{getRowNum()}</TableCell>
                                <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>{employee.structure}</TableCell>
                                <TableCell >{employee.position}</TableCell>
                                <TableCell>{`${employee.firstName}  ${employee.lastName}`}</TableCell>
                            </SyledTableRow>
                            : ''
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
