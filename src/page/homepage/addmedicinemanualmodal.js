import React, { useState } from 'react';
import { Modal, Box, Button, Typography, TextField, IconButton, MenuItem } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const AddMedicineManualModal = ({ open, handleClose, step, setStep, medicines, setMedicines, medicineIndex }) => {
    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    maxWidth: 400,
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: 4,
                    p: 4,
                    mx: 'auto',
                    mt: 5,
                    boxShadow: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                    overflowY: 'auto'
                }}
            >
                <StepDots currentStep={step} totalSteps={3} />
                {step === 1 && <StepOne onNext={handleNext} handleClose={handleClose} text={medicines[medicineIndex].functionalIndication} onChangeText={(type) => setMedicines(prev => prev.map((item, i) =>
                    i === medicineIndex ? { ...item, functionalIndication: type } : item
                ))} />}
                {step === 2 && <StepTwo onNext={handleNext} onBack={handleBack} text={medicines[medicineIndex].name} onChangeText={(type) => setMedicines(prev => prev.map((item, i) =>
                    i === medicineIndex ? { ...item, name: type } : item
                ))} />}
                {step === 3 && <StepThree onBack={handleBack} onClose={handleClose} />}
            </Box>
        </Modal>
    );
};

const StepOne = ({ onNext, text, onChangeText, handleClose }) => {
    const [choosingTag, setChoosingTag] = useState(-1);

    return (
        <>
            <Typography variant="h5" align="center" color="green" gutterBottom>
                Medicine Type
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary" mb='30px'>
                Please choose which medicine you want to add
            </Typography>
            <TextField
                value={text}
                onChange={e => onChangeText(e.target.value)}
                variant="outlined"
                width='90%'
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                <Button variant="contained" sx={{ bgcolor: choosingTag == 0 ? 'lightgreen' : 'green', color: 'white' }} onClick={() => { onChangeText('Chronic Disease Medicine'); setChoosingTag(0); }}>Chronic Disease Medicine</Button>
                <Button variant="contained" sx={{ bgcolor: choosingTag == 1 ? 'lightgreen' : 'green', color: 'white' }} onClick={() => { onChangeText('Normal Medicine'); setChoosingTag(1) }}>Normal Medicine</Button>
                <Button variant="contained" sx={{ bgcolor: choosingTag == 2 ? 'lightgreen' : 'green', color: 'white' }} onClick={() => { onChangeText('Health Care Medicine'); setChoosingTag(2) }}>Health Care Medicine</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 3 }}>
                <Button onClick={handleClose} variant="text">Cancel</Button>
                <Button onClick={onNext} variant="text">Next Step</Button>
            </Box>
        </>
    );
};

const StepTwo = ({ onNext, onBack, text, onChangeText }) => {
    const [choosingTag, setChoosingTag] = useState(-1);

    return (
        <>
            <Typography variant="h5" align="center" color="green" gutterBottom>
                Medicine Name
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary" mb='30px'>
                Choose or input your medicine name
            </Typography>
            <TextField
                value={text}
                onChange={e => onChangeText(e.target.value)}
                variant="outlined"
                width='90%'
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                <Button variant="contained" sx={{ bgcolor: choosingTag == 0 ? 'lightgreen' : 'green', color: 'white' }} onClick={() => { setChoosingTag(0); onChangeText('Cardiovascular') }}>Cardiovascular</Button>
                <Button variant="contained" sx={{ bgcolor: choosingTag == 1 ? 'lightgreen' : 'green', color: 'white' }} onClick={() => { setChoosingTag(1); onChangeText('High Blood Pressure') }}>High Blood Pressure</Button>
                <Button variant="contained" sx={{ bgcolor: choosingTag == 2 ? 'lightgreen' : 'green', color: 'white' }} onClick={() => { setChoosingTag(2); onChangeText('Diabetes') }}>Diabetes</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 3 }}>
                <Button onClick={onBack} variant="text">Back</Button>
                <Button onClick={onNext} variant="text">Next Step</Button>
            </Box>
        </>
    );
};

const StepThree = ({ onBack, onClose }) => {
    const [timesPerDay, setTimesPerDay] = useState(3);
    const [detailSchedule, setDetailSchedule] = useState([{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }]);
    const [grainsPerTime, setGrainsPerTime] = useState(1);
    const [choosingTag, setChoosingTag] = useState(0);

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
        >
            <Typography variant="h5" sx={{ color: 'green', fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
                Scheduling
            </Typography>
            <Typography variant="body2" sx={{ color: 'red', mb: 2 }}>
                Please follow your doctor's instructions for setting
            </Typography>

            {/* Dosage Section */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, textAlign: 'left' }}>
                    Dosage
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="body2">Per day/times</Typography>
                        <TextField
                            type="number"
                            value={timesPerDay}
                            onChange={(e) => setTimesPerDay(e.target.value)}
                            onBlur={(e) => {
                                if (Number(e.target.value) <= detailSchedule.length) {
                                    setDetailSchedule((pretimesPerDay) => pretimesPerDay.slice(0, timesPerDay))
                                } else {
                                    let newElements = Array(timesPerDay - detailSchedule.length).fill({ time: '08:00' });
                                    setDetailSchedule([...detailSchedule, ...newElements])
                                }
                            }}
                            size="small"
                            sx={{ width: 80 }}
                        />
                    </Box>
                    <Box>
                        <Typography variant="body2">Each time/grain</Typography>
                        <TextField
                            type="number"
                            value={grainsPerTime}
                            onChange={(e) => setGrainsPerTime(e.target.value)}
                            size="small"
                            sx={{ width: 80 }}
                        />
                    </Box>
                </Box>
            </Box>

            {/* Time Slots */}
            {detailSchedule.map(
                (slot, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 2,
                            p: 1,
                            bgcolor: 'green',
                            borderRadius: 1,
                        }}
                    >
                        <IconButton sx={{ color: 'white' }}><AccessTimeIcon /></IconButton>
                        <TextField
                            defaultValue={slot.time}
                            select
                            size="small"
                            sx={{
                                bgcolor: 'white',
                                borderRadius: 1,
                            }}
                        >
                            {['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'].map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            value={`${grainsPerTime} gain`}
                            size="small"
                            sx={{
                                bgcolor: 'white',
                                borderRadius: 1,
                                textAlign: 'center',
                                width: 80,
                            }}
                        />
                    </Box>
                )
            )}

            {/* Before/During/After Meals */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, textAlign: 'left' }}>
                    Choose Before and After Meals
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="contained" sx={{ bgcolor: choosingTag == 0 ? 'lightgreen' : 'green', color: 'white', width: 100 }} onClick={() => setChoosingTag(0)}>
                        Before meals
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: choosingTag == 1 ? 'lightgreen' : 'green', color: 'white', width: 100 }} onClick={() => setChoosingTag(1)}>
                        During meals
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: choosingTag == 2 ? 'lightgreen' : 'green', color: 'white', width: 100 }} onClick={() => setChoosingTag(2)}>
                        After meals
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 3 }}>
                <Button
                    onClick={onBack}
                    variant="text"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Back
                </Button>
                <Button onClick={onClose} variant="contained" color="primary">
                    Finish
                </Button>
            </Box>
        </Box>
    );
};

const StepDots = ({ currentStep, totalSteps }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // Ensures dots are evenly spaced
                width: '60%', // Adjust the width to control spacing
                margin: '0 auto', // Center the step dots container
                position: 'relative',
                mb: '20px'
            }}
        >
            {Array.from({ length: totalSteps }).map((_, index) => (
                <React.Fragment key={index}>
                    {/* Step Dot */}
                    <Box
                        sx={{
                            width: 16,
                            height: 16,
                            borderRadius: '50%',
                            backgroundColor: currentStep >= index + 1 ? 'green' : 'lightgray',
                            zIndex: 1,
                            border: currentStep >= index + 1 ? '2px solid green' : 'none',
                            transition: 'background-color 0.3s, border 0.3s',
                        }}
                    />
                    {/* Connecting Line */}
                    {index < totalSteps - 1 && (
                        <Box
                            sx={{
                                flex: 1,
                                height: 2,
                                backgroundColor: currentStep > index + 1 ? 'green' : 'lightgray',
                                zIndex: 0,
                                position: 'relative',
                                // Align with the center of the dot
                            }}
                        />
                    )}
                </React.Fragment>
            ))}
        </Box>
    );
};


export default AddMedicineManualModal;
