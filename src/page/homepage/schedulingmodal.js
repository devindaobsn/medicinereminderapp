import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton, MenuItem } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const SchedulingModal = ({ open, handleClose, medicineIndexAdd, handleChangeRemindList }) => {
    const [timesPerDay, setTimesPerDay] = useState(3);
    const [detailSchedule, setDetailSchedule] = useState([{ time: '08:00' }, { time: '13:00' }, { time: '21:00' }]);
    const [grainsPerTime, setGrainsPerTime] = useState(1);
    const [choosingTag, setChoosingTag] = useState(0);

    useEffect(() => {
        const medicines = JSON.parse(localStorage.getItem('medicines'));
        setTimesPerDay(medicines[medicineIndexAdd].timesPerDay);
        setDetailSchedule(medicines[medicineIndexAdd].detailSchedule);
        setGrainsPerTime(medicines[medicineIndexAdd].grainsPerTime);
        setChoosingTag(medicines[medicineIndexAdd].choosingTag);
    }, []);

    useEffect(() => {
        const medicines = JSON.parse(localStorage.getItem('medicines'));
        const newMedicines = medicines.map((item, i) => {
            return (
                i == medicineIndexAdd ? { ...item, timesPerDay: timesPerDay, detailSchedule: detailSchedule, grainsPerTime: grainsPerTime, choosingTag: choosingTag } : item)
        });
        localStorage.setItem('medicines', JSON.stringify(newMedicines));
        handleChangeRemindList();
    }, [timesPerDay, detailSchedule, grainsPerTime, choosingTag]);

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="scheduling-modal">
            <Box
                sx={{
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
                }}
            >
                <Typography variant="h5" sx={{ color: 'green', fontWeight: 'bold', mb: 2 }}>
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
                                value={slot.time}
                                select
                                size="small"
                                sx={{
                                    bgcolor: 'white',
                                    borderRadius: 1,
                                }}
                            >
                                {['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'].map((option) => (
                                    <MenuItem key={option} value={option} onClick={() => {
                                        setDetailSchedule(pre => pre.map((e, i) => i == index ? { ...e, time: option } : e))
                                    }}>
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

                {/* Finish Button */}
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ bgcolor: 'green', color: 'white', fontWeight: 'bold' }}
                    onClick={handleClose}
                >
                    Finish
                </Button>
            </Box>
        </Modal>
    );
};

export default SchedulingModal;
