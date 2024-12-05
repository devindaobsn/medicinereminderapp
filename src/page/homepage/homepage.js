import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Card, Avatar, IconButton, CardContent } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AddMedicinePopUp from './addmedicinepopup';
import MedicineDetailModal from './medicinedetailmodal';
import SchedulingModal from './schedulingmodal';
import AddMedicineManualModal from './addmedicinemanualmodal';
import SetVoiceModal from './setVoiceModal';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AIModal from './aimodal';
import BarcodeModal from './barcodemodal';

const randomMedicine = [
    {
        id: 1,
        name: 'Lisinopril',
        functionalIndication: 'Used for hypertension',
        usageAndDosage: 'Take 1 tablet once a day',
        note: 'Take with or without food, preferably at the same time each day',
        adverseReactions: 'Dizziness, headache, fatigue',
        ingredient: 'Lisinopril',
        storageCondition: 'Store in a cool, dry place away from light',
    },
    {
        id: 2,
        name: 'Metformin',
        functionalIndication: 'Used for diabetes management',
        usageAndDosage: 'Take 1 tablet with meals twice a day',
        note: 'Monitor blood sugar levels regularly',
        adverseReactions: 'Stomach upset, nausea, diarrhea',
        ingredient: 'Metformin',
        storageCondition: 'Store at room temperature, away from moisture',
    },
    {
        id: 3,
        name: 'Ibuprofen',
        functionalIndication: 'Used for pain relief and inflammation',
        usageAndDosage: 'Take 1 tablet every 4-6 hours as needed',
        note: 'Do not exceed 6 tablets in 24 hours',
        adverseReactions: 'Stomach upset, dizziness, headache',
        ingredient: 'Ibuprofen',
        storageCondition: 'Store in a dry place at room temperature',
    },
    {
        id: 4,
        name: 'Loratadine',
        functionalIndication: 'Used for treating allergies',
        usageAndDosage: 'Take 1 tablet once a day',
        note: 'May cause drowsiness in some individuals',
        adverseReactions: 'Drowsiness, dry mouth, headache',
        ingredient: 'Loratadine',
        storageCondition: 'Store in a cool, dry place',
    },
    {
        id: 5,
        name: 'Atorvastatin',
        functionalIndication: 'Used for lowering cholesterol levels',
        usageAndDosage: 'Take 1 tablet daily at bedtime',
        note: 'Regular blood tests are required to monitor cholesterol levels',
        adverseReactions: 'Muscle pain, nausea, headache',
        ingredient: 'Atorvastatin',
        storageCondition: 'Store in a cool, dry place, away from heat',
    },
    {
        id: 6,
        name: 'Diazepam',
        functionalIndication: 'Used for anxiety and seizure disorders',
        usageAndDosage: 'Take 1 tablet 1-2 times a day as prescribed',
        note: 'Avoid alcohol while taking this medication',
        adverseReactions: 'Drowsiness, dizziness, fatigue',
        ingredient: 'Diazepam',
        storageCondition: 'Store at room temperature, away from light',
    },
    {
        id: 7,
        name: 'Sertraline',
        functionalIndication: 'Used for depression and anxiety treatment',
        usageAndDosage: 'Take 1 tablet once a day in the morning',
        note: 'It may take several weeks to notice the full effects',
        adverseReactions: 'Nausea, insomnia, sexual dysfunction',
        ingredient: 'Sertraline',
        storageCondition: 'Store in a cool, dry place, away from sunlight',
    },
    {
        id: 8,
        name: 'Propranolol',
        functionalIndication: 'Used for treating high blood pressure and anxiety',
        usageAndDosage: 'Take 1 tablet 2-3 times a day',
        note: 'Do not suddenly stop taking this medication without consulting your doctor',
        adverseReactions: 'Fatigue, dizziness, slow heart rate',
        ingredient: 'Propranolol',
        storageCondition: 'Store at room temperature, away from moisture',
    },
    {
        id: 9,
        name: 'Salbutamol',
        functionalIndication: 'Used for asthma and bronchitis treatment',
        usageAndDosage: 'Inhale 1 dose every 4-6 hours as needed',
        note: 'Rinse mouth after use to avoid throat irritation',
        adverseReactions: 'Shaky hands, increased heart rate, headache',
        ingredient: 'Salbutamol',
        storageCondition: 'Store in a cool, dry place, away from heat',
    },
    {
        id: 10,
        name: 'Amoxicillin',
        functionalIndication: 'Used for bacterial infections',
        usageAndDosage: 'Take 1 capsule every 12 hours for 7 days',
        note: 'Complete the full course of treatment to avoid antibiotic resistance',
        adverseReactions: 'Diarrhea, rash, nausea',
        ingredient: 'Amoxicillin',
        storageCondition: 'Store in a cool, dry place, away from light',
    },
    {
        id: 11,
        name: 'Orlistat',
        functionalIndication: 'Used for weight loss',
        usageAndDosage: 'Take 1 capsule with each meal containing fat',
        note: 'Monitor fat intake while on this medication',
        adverseReactions: 'Stomach cramps, diarrhea, flatulence',
        ingredient: 'Orlistat',
        storageCondition: 'Store in a cool, dry place, away from children',
    },
];

const HomePage = () => {
    const [medicines, setMedicines] = React.useState([
        {
            id: 0,
            name: 'Aspirin',
            functionalIndication: 'Used for hypertension',
            usageAndDosage: 'Take 1 tablet twice a day with food',
            note: 'Take with caution if allergic to aspirin',
            adverseReactions: 'Nausea, dizziness, headaches',
            ingredient: 'Aspirin, Hydrochlorothiazide',
            storageCondition: 'Store in a cool, dry place away from light',
        },
        {
            id: 1,
            name: 'Ibuprofen',
            functionalIndication: 'Pain relief',
            usageAndDosage: 'Take 1 tablet every 4-6 hours as needed',
            note: 'Do not exceed 4 doses in 24 hours',
            adverseReactions: 'Drowsiness, constipation',
            ingredient: 'Acetaminophen',
            storageCondition: 'Keep in a tightly closed container at room temperature',
        },
        {
            id: 2,
            name: 'Amoxicillin',
            functionalIndication: 'Antibiotic for bacterial infections',
            usageAndDosage: 'Take 1 capsule three times a day with food',
            note: 'Finish the full course even if you feel better',
            adverseReactions: 'Diarrhea, allergic reaction',
            ingredient: 'Amoxicillin',
            storageCondition: 'Store in a cool, dry place, away from moisture',
        },
        {
            id: 3,
            name: 'Atorvastatin',
            functionalIndication: 'Cholesterol management',
            usageAndDosage: 'Take 1 tablet once daily, preferably at night',
            note: 'Avoid consuming grapefruit juice while taking this medicine',
            adverseReactions: 'Muscle pain, liver dysfunction',
            ingredient: 'Atorvastatin',
            storageCondition: 'Store at room temperature, away from light and moisture',
        },
        {
            id: 4,
            name: 'Cetirizine',
            functionalIndication: 'Relieves allergy symptoms',
            usageAndDosage: 'Take 1 tablet once a day',
            note: 'Can cause drowsiness in some people',
            adverseReactions: 'Dry mouth, dizziness, drowsiness',
            ingredient: 'Cetirizine',
            storageCondition: 'Store in a cool, dry place away from heat',
        },
        {
            id: 5,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: '',
            adverseReactions: '',
            ingredient: '',
            storageCondition: ''
        },
        {
            id: 6,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: '',
            adverseReactions: '',
            ingredient: '',
            storageCondition: ''
        },
        {
            id: 7,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: '',
            adverseReactions: '',
            ingredient: '',
            storageCondition: ''
        },
        {
            id: 8,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: '',
            adverseReactions: '',
            ingredient: '',
            storageCondition: ''
        },
    ]);

    useEffect(() => {
        const medicines = localStorage.getItem('medicines');
        if (medicines) {
            setMedicines(JSON.parse(medicines));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('medicines', JSON.stringify(medicines));
    }, [medicines]);

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
    const [openScanBarCode, setopenScanBarCode] = useState(false);

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

    const handleSubmitScan = () => {
        let medicineAdd = randomMedicine[Math.floor(Math.random() * 11)];
        medicineAdd.id = medicineIndexAdd;
        setMedicines(prev => prev.map((item, i) =>
            i === medicineIndexAdd ? medicineAdd : item
        ))
        setOpenDetailModal(true);
        setMedicineDetails(medicineAdd);
        setopenScanBarCode(false)
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
            {popupOpen && <AddMedicinePopUp open={popupOpen} onClose={handleClosePopUp} onClickAddManual={handleOpenAddMedicineManual} onClickScan={() => { setopenScanBarCode(true); setPopupOpen(false); }} />}
            {openDetailModal && <MedicineDetailModal open={openDetailModal} handleClose={handleCloseDetailModal} details={medicineDetails} handleOpenSchedulingModal={handleOpenSchedulingModal} setMedicines={setMedicines} />}
            {openSchedulingModal && <SchedulingModal open={openSchedulingModal} handleClose={handleCloseSchedulingModal} />}
            {openAddMedicineManual && <AddMedicineManualModal open={openAddMedicineManual} handleClose={handleCloseAddMedicineManual} step={step} setStep={setStep} medicines={medicines} medicineIndex={medicineIndexAdd} setMedicines={setMedicines} />}
            {openVoiceModal && <SetVoiceModal open={openVoiceModal} onClose={() => setOpenVoiceModal(false)} />}
            {openAIModal && <AIModal open={openAIModal} onClose={() => setOpenAIModal(false)} />}
            {openScanBarCode && <BarcodeModal open={openScanBarCode} onClose={() => setopenScanBarCode(false)} handleSubmit={handleSubmitScan}/>}
        </Box>
    );
};

export default HomePage;
