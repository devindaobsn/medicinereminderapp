import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic'; // Material-UI icon

const SetVoiceModal = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="reminder-voice-title"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    width: '90%',
                    maxWidth: 400,
                    bgcolor: 'white',
                    boxShadow: 24,
                    borderRadius: 2,
                    p: 4,
                    textAlign: 'center',
                }}
            >
                {/* Title */}
                <Typography
                    id="reminder-voice-title"
                    variant="h6"
                    sx={{ marginBottom: 2 }}
                >
                    Say to set up your reminder voice
                </Typography>

                {/* Icon */}
                <MicIcon sx={{ fontSize: 80, color: 'primary.main', marginBottom: 3 }} />

                {/* Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={onClose}
                        sx={{ flex: 1 }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onClose}
                        sx={{ flex: 1, color: 'white' }}
                    >
                        Set
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default SetVoiceModal;
