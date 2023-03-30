import FireTruckTwoToneIcon from '@mui/icons-material/FireTruckTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import PropaneTankTwoToneIcon from '@mui/icons-material/PropaneTankTwoTone';
import SecurityTwoToneIcon from '@mui/icons-material/SecurityTwoTone';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';

const SyledMenuItem = styled(MenuItem)({
    height: '84px',
    color: '#027d8a',
    ':hover': {
        background: '#ebf2fa'
    }
});

const StyledMenuIcon = styled(ListItemIcon)({
    width: '50px',
    color: '#027d8a',
});

const menuData = [
    { text: 'Служители', page: '/employees', icon: <PeopleAltTwoToneIcon />, },
    { text: 'Автомобили', page: '/trucks', icon: <FireTruckTwoToneIcon />, },
    { text: 'ВДА', page: '/breathing-apparatus', icon: <PropaneTankTwoToneIcon />, },
    { text: 'ПТВ', page: '/equipment', icon: <SecurityTwoToneIcon />, }
];

export default function Menu() {
    return (
        <MenuList >
            {menuData.map((item) => (
                <SyledMenuItem component={Link} to={item.page} key={item.text}>
                    <StyledMenuIcon>{item.icon}</StyledMenuIcon>
                    <ListItemText>{item.text}</ListItemText>
                </SyledMenuItem>
            ))}
            <Divider />
        </MenuList>
    );
}