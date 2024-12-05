import React, { useState } from 'react';
import { Box, Grid, Typography, Card, Avatar, IconButton, CardContent } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AddMedicinePopUp from './addmedicinepopup';
import MedicineDetailModal from './medicinedetailmodal';
import SchedulingModal from './schedulingmodal';
import AddMedicineManualModal from './addmedicinemanualmodal';
import SetVoiceModal from './setVoiceModal';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AIModal from './aimodal';

const HomePage = () => {
    const [medicines, setMedicines] = React.useState([
        {
            id: 0,
            name: 'afdsfaj fjpsafw fjoepaf afewpo afdsfaj fjpsafw fjoepaf afewpo afdsfaj fjpsafw fjoepaf afewpo afdsfaj fjpsafw fjoepaf afewpo afdsfaj fjpsafw fjoepaf afewpo afdsfaj fjpsafw fjoepaf afewpo afdsfaj fjpsafw fjoepaf afewpo afdsfaj fjpsafw fjoepaf afewpo afdsfaj fjpsafw fjoepaf afewpo afdsfaj fjpsafw fjoepaf afewpo afdsfaj fjpsafw fjoepaf afewpo afdsfaj fjpsafw fjoepaf afewpo afdsfaj fjpsafw fjoepaf afewpo ',
            functionalIndication: 'A2 fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew djiewaf',
            usageAndDosage: 'A2 fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew A2 fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew A2 fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew',
            note: 'A2 fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew A2 fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew A2 fdshafoiewo fjiosafoiew djiewaf fdshafoiewo fjiosafoiew',
            adverseReactions: 'A5',
            ingredient: 'A6',
            storageCondition: 'A7'
        },
        {
            id: 1,
            name: 'B1',
            functionalIndication: 'B2',
            usageAndDosage: 'B3',
            note: 'A4',
            adverseReactions: 'A5',
            ingredient: 'A6',
            storageCondition: 'A7'
        },
        {
            id: 2,
            name: 'C1',
            functionalIndication: 'C2',
            usageAndDosage: 'C3',
            note: 'A4',
            adverseReactions: 'A5',
            ingredient: 'A6',
            storageCondition: 'A7'
        },
        {
            id: 3,
            name: 'D1',
            functionalIndication: 'D2',
            usageAndDosage: 'D3',
            note: 'A4',
            adverseReactions: 'A5',
            ingredient: 'A6',
            storageCondition: 'A7'
        },
        {
            id: 4,
            name: 'E1',
            functionalIndication: 'E2',
            usageAndDosage: 'E3',
            note: 'A4',
            adverseReactions: 'A5',
            ingredient: 'A6',
            storageCondition: 'A7'
        },
        {
            id: 5,
            name: 'F1',
            functionalIndication: 'F2',
            usageAndDosage: 'F3',
            note: 'A4',
            adverseReactions: 'A5',
            ingredient: 'A6',
            storageCondition: 'A7'
        },
        {
            id: 6,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: 'A4',
            adverseReactions: 'A5',
            ingredient: 'A6',
            storageCondition: 'A7'
        },
        {
            id: 7,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: 'A4',
            adverseReactions: 'A5',
            ingredient: 'A6',
            storageCondition: 'A7'
        },
        {
            id: 8,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: 'A4',
            adverseReactions: 'A5',
            ingredient: 'A6',
            storageCondition: 'A7'
        },
    ]);
    const [popupOpen, setPopupOpen] = useState(false);

    const handleOpenPopUp = (index) => {
        setPopupOpen(true);
        setMedicineIndexAdd(index)
    };
    const handleClosePopUp = () => setPopupOpen(false);
    const [medicineDetails, setMedicineDetails] = useState(null);
    const [openDetailModal, setOpenDetailModal] = useState(false);
    const [openSchedulingModal, setOpenSchedulingModal] = useState(false);
    const [openAddMedicineManual, setOpenAddMedicineManual] = useState(false);
    const [step, setStep] = useState(1);
    const [medicineIndexAdd, setMedicineIndexAdd] = useState(0);
    const [openVoiceModal, setOpenVoiceModal] = useState(false);
    const [openAIModal, setOpenAIModal] = useState(false);

    const handleCloseDetailModal = () => {
        setOpenDetailModal(false);
        setMedicineDetails(null);
    }

    const handleOpenDetailModal = (item) => {
        setMedicineDetails(item);
        setOpenDetailModal(true);
    }

    const handleOpenSchedulingModal = () => {
        setOpenSchedulingModal(true);
        handleCloseDetailModal();
    }

    const handleCloseSchedulingModal = () => {
        setOpenSchedulingModal(false);
    }

    const handleOpenAddMedicineManual = () => {
        setOpenAddMedicineManual(true)
        setPopupOpen(false)
    }

    const handleCloseAddMedicineManual = () => {
        setOpenAddMedicineManual(false)
        setStep(1);
    }

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
                        Nini's Medicine Box
                    </Typography>
                    <IconButton onClick={() => setOpenVoiceModal(true)}>
                        <SettingsIcon />
                    </IconButton>
                    <IconButton onClick={() => setOpenAIModal(true)}>
                        <SupportAgentIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Medication Warehouse Grid */}
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Warehouse
            </Typography>
            <Grid container spacing={2}>
                {medicines.map((item, index) => (
                    <Grid item xs={4} key={index} onClick={
                        item.name == '' ? () => handleOpenPopUp(index) : () => handleOpenDetailModal(item)
                    }>
                        <Card
                            sx={{
                                padding: 1,
                                border: item.name != '' ? '1px solid green' : '1px dashed gray',
                                textAlign: 'center',
                            }}
                        >
                            <CardContent
                                sx={{ padding: '16px 0' }}
                            >
                                <Typography variant="body2" gutterBottom>
                                    No.{index + 1}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Warehouse
                                </Typography>
                                {item.name != '' ? (
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
                {[{ name: 'Dechloridation citrate tablet', quantity: '1 grain' }, { name: 'Vitamin', quantity: '2 grains' }].map(
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
                                <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'end' }}>
                                    {medication.quantity}
                                </Typography>
                            </Box>
                        </Box>
                    )
                )}
            </Box>
            {popupOpen && <AddMedicinePopUp open={popupOpen} onClose={handleClosePopUp} onClickAddManual={handleOpenAddMedicineManual} />}
            {openDetailModal && <MedicineDetailModal open={openDetailModal} handleClose={handleCloseDetailModal} details={medicineDetails} handleOpenSchedulingModal={handleOpenSchedulingModal} setMedicines={setMedicines} />}
            {openSchedulingModal && <SchedulingModal open={openSchedulingModal} handleClose={handleCloseSchedulingModal} />}
            {openAddMedicineManual && <AddMedicineManualModal open={openAddMedicineManual} handleClose={handleCloseAddMedicineManual} step={step} setStep={setStep} medicines={medicines} medicineIndex={medicineIndexAdd} setMedicines={setMedicines} />}
            {openVoiceModal && <SetVoiceModal open={openVoiceModal} onClose={() => setOpenVoiceModal(false)} />}
                {openAIModal && <AIModal open={openAIModal} onClose={() => setOpenAIModal(false)}/>}
        </Box>
    );
};

export default HomePage;
