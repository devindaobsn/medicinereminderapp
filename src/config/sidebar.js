import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const Sidebar = ({ open, toggleSidebar }) => {
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            onClose={toggleSidebar}
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
        >
            <List>
                <ListItem button>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
