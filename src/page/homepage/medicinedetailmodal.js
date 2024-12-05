import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

// Basic styling for the modal content
const fullScreenStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto', // Enable scrolling if content overflows
    maxWidth: '400px'
};

const closeButtonStyle = {
    position: 'relative',
    bottom: 20, // Distance from the bottom of the modal
    left: '35%',   // Distance from the left of the modal
};

const MedicineDetailModal = ({ open, handleClose, details, handleOpenSchedulingModal, setMedicines }) => {
    if (!details) return null;

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="medicine-detail-modal"
            aria-describedby="modal-to-show-medicine-detail"
        >
            <Box sx={fullScreenStyle}>

                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Medicine Name: <span style={{ fontWeight: 'normal' }}>{details.name}</span>
                    </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Functional Indication: <span style={{ fontWeight: 'normal' }}>{details.functionalIndication}</span>
                    </Typography>
                </Box>

                {/* Usage and Dosage Section */}
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Usage and Dosage: <span style={{ fontWeight: 'normal' }}>{details.usageAndDosage}</span>
                    </Typography>
                </Box>

                {/* Note Section */}
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Note: <span style={{ fontWeight: 'normal' }}>{details.note}</span>
                    </Typography>
                </Box>

                {/* Adverse Reactions Section */}
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Adverse Reactions: <span style={{ fontWeight: 'normal' }}>{details.adverseReactions}</span>
                    </Typography>
                </Box>

                {/* Ingredient Section */}
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Ingredient: <span style={{ fontWeight: 'normal' }}>{details.ingredient}</span>
                    </Typography>
                </Box>

                {/* Storage Condition Section */}
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Storage Condition: <span style={{ fontWeight: 'normal' }}>{details.storageCondition}</span>
                    </Typography>
                </Box>

                {/* Set Reminder Button */}
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button variant="contained" color="primary" onClick={() => handleOpenSchedulingModal()}>
                        Set a reminder for this drug
                    </Button>
                </Box>
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button variant="contained" backgroundColor='red' sx={{ width: 260 }} onClick={() => {
                        handleClose();
                        setMedicines(prev => prev.map((item, i) =>
                            i === details.id ? { ...item, name: '', functionalIndication: '' } : item
                        ))
                    }}>
                        Remove this drug
                    </Button>
                </Box>
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button onClick={handleClose} color="error" sx={closeButtonStyle}>
                        Close
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default MedicineDetailModal;