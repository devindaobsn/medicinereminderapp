import React from 'react';
import { Box, Grid, Typography, Card, Avatar, IconButton, CardContent } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const HomePage = () => {
    return (
        <Box
            sx={{
                padding: 2,
                pb: 8, // Add padding to the bottom to avoid overlap with Bottom Navigation
                maxWidth: 400,
                margin: '0 auto', // Center content
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    textAlign: 'center',
                    backgroundColor: '#e0f7fa',
                    padding: '8px',
                    borderRadius: 2,
                    marginBottom: 2,
                    color: '#004d40',
                }}
            >
                The medication box is connected
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center', // Aligns items vertically
                    marginBottom: 2,
                    gap: 1, // Adds spacing between elements
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar alt="User Avatar" />
                    <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>
                        Jack's Medicine Box
                    </Typography>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Medication Warehouse Grid */}
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Warehouse
            </Typography>
            <Grid container spacing={2}>
                {[...Array(9)].map((_, index) => (
                    <Grid item xs={4} key={index}>
                        <Card
                            sx={{
                                padding: 1,
                                border: index < 6 ? '1px solid green' : '1px dashed gray',
                                textAlign: 'center',
                            }}
                        >
                            <CardContent>
                                <Typography variant="body2" gutterBottom>
                                    No.{index + 1} Warehouse
                                </Typography>
                                {index < 6 ? (
                                    <Typography variant="body2" sx={{ color: 'green', fontWeight: 'bold' }}>
                                        Filled
                                    </Typography>
                                ) : (
                                    <Typography variant="body2" sx={{ color: 'gray', fontStyle: 'italic' }}>
                                        Empty
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Today's Reminder Section */}
            <Typography
                variant="h6"
                sx={{
                    marginTop: 2,
                    color: 'red',
                }}
            >
                Today Will Be
            </Typography>
            <Typography variant="h4" sx={{ color: 'red', textAlign: 'right', marginBottom: 2 }}>
                8:00 AM
            </Typography>
            <Box>
                {[{ name: 'Dechloridation citrate tablet', quantity: '1 grain' }, { name: 'XXXXXX', quantity: '2 grains' }].map(
                    (medication, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: 1,
                                backgroundColor: '#f9fbe7',
                                borderRadius: 1,
                                marginBottom: 1,
                                border: '1px solid #cddc39',
                            }}
                        >
                            <Typography variant="body1">
                                No.{index + 1} Warehouse
                            </Typography>
                            <Box>
                                <Typography variant="body2">{medication.name}</Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    {medication.quantity}
                                </Typography>
                            </Box>
                        </Box>
                    )
                )}
            </Box>
        </Box>
    );
};

export default HomePage;
