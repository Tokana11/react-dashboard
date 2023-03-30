import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import AccountMenu from './AccountMenu';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1, margin: 0 }}>
            <AppBar position="static" color='info'>
                <Toolbar>
                    <LocalFireDepartmentIcon sx={{ display: { xs: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ПБЗН
                    </Typography>
                    <AccountMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
