import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import Menu from './Menu';

const drawerWidth = 200;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [ theme.breakpoints.up('sm') ]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const SyledIconButton = styled(IconButton)({
    color: '#027d8a',
});

export default function TestMiniDrawer() {

    const [ open, setOpen ] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const CloseDrawerComponent = () => (
        <React.Fragment>
            <SyledIconButton
                color="inherit"
                aria-label="close drawer"
                onClick={handleDrawerClose}
                sx={{
                    position: 'absolute',
                    right: '0',
                    ...(!open && { display: 'none' }),
                }}
            >
                <ChevronLeftIcon />
            </SyledIconButton>
        </React.Fragment>
    );

    const OpenDrawerComponent = () => (
        <SyledIconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
            }}
        >
            <MenuIcon />
        </SyledIconButton>
    );

    return (
        <>
            <Drawer
                variant="permanent"
                open={open}
                PaperProps={{
                    elevation: 4,
                    sx: {
                        background: '#FCFCFC',
                    }
                }}
            >
                <Toolbar>
                    {open ? <CloseDrawerComponent /> : <OpenDrawerComponent />}
                </Toolbar>
                <Divider />
                <Menu />
            </Drawer>
        </>

    );
}
