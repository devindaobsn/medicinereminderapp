import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                textAlign: 'center',
                mt: 'auto',
                backgroundColor: (theme) => theme.palette.background.paper,
            }}
        >
            <Typography variant="body2" color="textSecondary">
                © 2024 My React App. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
