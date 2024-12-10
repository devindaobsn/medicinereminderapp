import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Card, Avatar, IconButton, CardContent, Tooltip } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AddMedicinePopUp from './addmedicinepopup';
import MedicineDetailModal from './medicinedetailmodal';
import SchedulingModal from './schedulingmodal';
import AddMedicineManualModal from './addmedicinemanualmodal';
import SetVoiceModal from './setVoiceModal';
import AIModal from './aimodal';
import BarcodeModal from './barcodemodal';
import BotImage from './image.png'

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
        timesPerDay: 3,
        detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
        grainsPerTime: 1,
        choosingTag: 0

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
        timesPerDay: 3,
        detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
        grainsPerTime: 1,
        choosingTag: 0
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
        timesPerDay: 3,
        detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
        grainsPerTime: 1,
        choosingTag: 0
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
        timesPerDay: 3,
        detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
        grainsPerTime: 1,
        choosingTag: 0
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
        timesPerDay: 3,
        detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
        grainsPerTime: 1,
        choosingTag: 0
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
        timesPerDay: 3,
        detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
        grainsPerTime: 1,
        choosingTag: 0
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
        timesPerDay: 3,
        detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
        grainsPerTime: 1,
        choosingTag: 0
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
        timesPerDay: 3,
        detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
        grainsPerTime: 1,
        choosingTag: 0
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
        timesPerDay: 3,
        detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
        grainsPerTime: 1,
        choosingTag: 0
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
        timesPerDay: 3,
        detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
        grainsPerTime: 1,
        choosingTag: 0
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
        timesPerDay: 3,
        detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
        grainsPerTime: 1,
        choosingTag: 0
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
            timesPerDay: 3,
            detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
            grainsPerTime: 1,
            choosingTag: 0
        },
        {
            id: 1,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: '',
            adverseReactions: '',
            ingredient: '',
            storageCondition: '', timesPerDay: 3,
            detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
            grainsPerTime: 1,
            choosingTag: 0
        },
        {
            id: 2,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: '',
            adverseReactions: '',
            ingredient: '',
            storageCondition: '',
            timesPerDay: 3,
            detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
            grainsPerTime: 1,
            choosingTag: 0
        },
        {
            id: 3,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: '',
            adverseReactions: '',
            ingredient: '',
            storageCondition: '',
            timesPerDay: 3,
            detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
            grainsPerTime: 1,
            choosingTag: 0
        },
        {
            id: 4,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: '',
            adverseReactions: '',
            ingredient: '',
            storageCondition: '',
            timesPerDay: 3,
            detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
            grainsPerTime: 1,
            choosingTag: 0
        },
        {
            id: 5,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: '',
            adverseReactions: '',
            ingredient: '',
            storageCondition: '',
            timesPerDay: 3,
            detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
            grainsPerTime: 1,
            choosingTag: 0
        },
        {
            id: 6,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: '',
            adverseReactions: '',
            ingredient: '',
            storageCondition: '',
            timesPerDay: 3,
            detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
            grainsPerTime: 1,
            choosingTag: 0
        },
        {
            id: 7,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: '',
            adverseReactions: '',
            ingredient: '',
            storageCondition: '',
            timesPerDay: 3,
            detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
            grainsPerTime: 1,
            choosingTag: 0
        },
        {
            id: 8,
            name: '',
            functionalIndication: '',
            usageAndDosage: '',
            note: '',
            adverseReactions: '',
            ingredient: '',
            storageCondition: '',
            timesPerDay: 3,
            detailSchedule: [{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }],
            grainsPerTime: 1,
            choosingTag: 0
        },
    ]);

    useEffect(() => {
        const medicinesLocal = localStorage.getItem('medicines');
        if (medicinesLocal) {
            setMedicines(JSON.parse(medicinesLocal));
        } else {
            localStorage.setItem('medicines', JSON.stringify(medicines));
        }
        handleChangeRemindList();
    }, []);

    useEffect(() => {
        localStorage.setItem('medicines', JSON.stringify(medicines));
        handleChangeRemindList();
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
    const [openScanBarCode, setOpenScanBarCode] = useState(false);
    const [remindList, setRemindList] = useState([])

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
        setOpenScanBarCode(false)
    }

    const handleChangeRemindList = () => {
        const now = new Date();
        const currentTimeString = now.toTimeString().slice(0, 5);
        let result = [];
        let resultNoGroup = [];
        const medicines = JSON.parse(localStorage.getItem('medicines'));
        medicines.forEach(element => {
            if (element.name != '') {
                element.detailSchedule.forEach(e => {
                    if (e.time >= currentTimeString) {
                    // if (true) {
                        resultNoGroup = [...resultNoGroup, {
                            time: e.time,
                            name: element.name,
                            grainsPerTime: element.grainsPerTime,
                            id: element.id
                        }]
                    }
                })
            }
        });
        let resultRaw = resultNoGroup.reduce((time, detail) => {
            if (!time[detail.time]) {
                time[detail.time] = [];
            }
            time[detail.time].push(detail);
            return time;
        }, {});
        result = Object.entries(resultRaw)
            .sort((a, b) => a[0] - b[0])
            .map(([time, detail]) => ({
                time: time,
                detail: detail.sort((p1, p2) => p1.id - p2.id)
            }));
        setRemindList(result)
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
            <Box
                sx={{
                    position: "fixed",
                    top: "60px", // Adjust for vertical positioning
                    right: "10px", // Adjust for horizontal positioning
                    zIndex: 1000,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    gap: 1,
                }}
                onClick={() => setOpenAIModal(true)}
            >
                <Tooltip title="I can ask for more health advice" placement="left">
                    <Avatar
                        src={BotImage} // Replace with your bot icon URL
                        alt="Bot Icon"
                        sx={{
                            width: 70, // Adjust size
                            height: 70,
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </Tooltip>
            </Box>
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
            {remindList.map(
                (e, i) => {
                    return (<>
                        <Typography variant="h4" sx={{ color: 'red', textAlign: 'right', marginBottom: 2 }}>
                            {e.time}
                        </Typography>
                        <Box>
                            {e.detail.map(
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
                                            No.{medication.id + 1} Warehouse
                                        </Typography>
                                        <Box>
                                            <Typography variant="body2">{medication.name}</Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'end' }}>
                                                {`${medication.grainsPerTime} gains`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                )
                            )}
                        </Box>
                    </>
                    )
                }
            )}

            {popupOpen && <AddMedicinePopUp open={popupOpen} onClose={handleClosePopUp} onClickAddManual={handleOpenAddMedicineManual} onClickScan={() => { setOpenScanBarCode(true); setPopupOpen(false); }} />}
            {openDetailModal && <MedicineDetailModal open={openDetailModal} handleClose={handleCloseDetailModal} details={medicineDetails} handleOpenSchedulingModal={handleOpenSchedulingModal} setMedicines={setMedicines} />}
            {openSchedulingModal && <SchedulingModal open={openSchedulingModal} handleClose={handleCloseSchedulingModal} medicineIndexAdd={medicineIndexAdd} handleChangeRemindList={handleChangeRemindList} />}
            {openAddMedicineManual && <AddMedicineManualModal open={openAddMedicineManual} handleClose={handleCloseAddMedicineManual} step={step} setStep={setStep} medicines={medicines} medicineIndex={medicineIndexAdd} setMedicines={setMedicines} handleChangeRemindList={handleChangeRemindList} />}
            {openVoiceModal && <SetVoiceModal open={openVoiceModal} onClose={() => setOpenVoiceModal(false)} />}
            {openAIModal && <AIModal open={openAIModal} onClose={() => setOpenAIModal(false)} />}
            {openScanBarCode && <BarcodeModal open={openScanBarCode} onClose={() => setOpenScanBarCode(false)} handleSubmit={handleSubmitScan} />}
        </Box>
    );
};

export default HomePage;
