import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const reminders = [
    {
        name: "Nini",
        time: "8:00 AM",
        warehouse: "No. 1",
        drugName: "Dechloridation citrate tablet",
        dosage: "1 grain",
    },
    {
        name: "Nini",
        time: "1:00 PM",
        warehouse: "No. 2",
        drugName: "Vitamin",
        dosage: "2 grains",
    },
];

const RecordPage = () => {
    return (
        <Box
            sx={{
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            {/* Header Section */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2,
                }}
            >
                <Typography variant="body1" color="text.secondary">
                    09:52 AM
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" color="primary">
                        Grandpa, it’s time to take your medicine!
                    </Typography>
                </Box>
            </Box>

            {/* Reminder Cards */}
            {reminders.map((reminder, index) => (
                <Card key={index} variant="outlined">
                    <CardContent>
                        <Typography
                            variant="h6"
                            color="primary"
                            sx={{ mb: 1, fontWeight: 'bold' }}
                        >
                            Medication Reminder
                        </Typography>
                        <Typography variant="body1">
                            <strong>Name:</strong> {reminder.name}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Time:</strong> {reminder.time}
                        </Typography>
                        <Typography variant="body1">
                            <strong>No. of warehouse:</strong> {reminder.warehouse}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Drug Name:</strong> {reminder.drugName}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Dosage:</strong> {reminder.dosage}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default RecordPage;
