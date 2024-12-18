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
                                {['00:00',
                                    '00:05',
                                    '00:10',
                                    '00:15',
                                    '00:20',
                                    '00:25',
                                    '00:30',
                                    '00:35',
                                    '00:40',
                                    '00:45',
                                    '00:50',
                                    '00:55',
                                    '01:00',
                                    '01:05',
                                    '01:10',
                                    '01:15',
                                    '01:20',
                                    '01:25',
                                    '01:30',
                                    '01:35',
                                    '01:40',
                                    '01:45',
                                    '01:50',
                                    '01:55',
                                    '02:00',
                                    '02:05',
                                    '02:10',
                                    '02:15',
                                    '02:20',
                                    '02:25',
                                    '02:30',
                                    '02:35',
                                    '02:40',
                                    '02:45',
                                    '02:50',
                                    '02:55',
                                    '03:00',
                                    '03:05',
                                    '03:10',
                                    '03:15',
                                    '03:20',
                                    '03:25',
                                    '03:30',
                                    '03:35',
                                    '03:40',
                                    '03:45',
                                    '03:50',
                                    '03:55',
                                    '04:00',
                                    '04:05',
                                    '04:10',
                                    '04:15',
                                    '04:20',
                                    '04:25',
                                    '04:30',
                                    '04:35',
                                    '04:40',
                                    '04:45',
                                    '04:50',
                                    '04:55',
                                    '05:00',
                                    '05:05',
                                    '05:10',
                                    '05:15',
                                    '05:20',
                                    '05:25',
                                    '05:30',
                                    '05:35',
                                    '05:40',
                                    '05:45',
                                    '05:50',
                                    '05:55',
                                    '06:00',
                                    '06:05',
                                    '06:10',
                                    '06:15',
                                    '06:20',
                                    '06:25',
                                    '06:30',
                                    '06:35',
                                    '06:40',
                                    '06:45',
                                    '06:50',
                                    '06:55',
                                    '07:00',
                                    '07:05',
                                    '07:10',
                                    '07:15',
                                    '07:20',
                                    '07:25',
                                    '07:30',
                                    '07:35',
                                    '07:40',
                                    '07:45',
                                    '07:50',
                                    '07:55',
                                    '08:00',
                                    '08:05',
                                    '08:10',
                                    '08:15',
                                    '08:20',
                                    '08:25',
                                    '08:30',
                                    '08:35',
                                    '08:40',
                                    '08:45',
                                    '08:50',
                                    '08:55',
                                    '09:00',
                                    '09:05',
                                    '09:10',
                                    '09:15',
                                    '09:20',
                                    '09:25',
                                    '09:30',
                                    '09:35',
                                    '09:40',
                                    '09:45',
                                    '09:50',
                                    '09:55',
                                    '10:00',
                                    '10:05',
                                    '10:10',
                                    '10:15',
                                    '10:20',
                                    '10:25',
                                    '10:30',
                                    '10:35',
                                    '10:40',
                                    '10:45',
                                    '10:50',
                                    '10:55',
                                    '11:00',
                                    '11:05',
                                    '11:10',
                                    '11:15',
                                    '11:20',
                                    '11:25',
                                    '11:30',
                                    '11:35',
                                    '11:40',
                                    '11:45',
                                    '11:50',
                                    '11:55',
                                    '12:00',
                                    '12:05',
                                    '12:10',
                                    '12:15',
                                    '12:20',
                                    '12:25',
                                    '12:30',
                                    '12:35',
                                    '12:40',
                                    '12:45',
                                    '12:50',
                                    '12:55',
                                    '13:00',
                                    '13:05',
                                    '13:10',
                                    '13:15',
                                    '13:20',
                                    '13:25',
                                    '13:30',
                                    '13:35',
                                    '13:40',
                                    '13:45',
                                    '13:50',
                                    '13:55',
                                    '14:00',
                                    '14:05',
                                    '14:10',
                                    '14:15',
                                    '14:20',
                                    '14:25',
                                    '14:30',
                                    '14:35',
                                    '14:40',
                                    '14:45',
                                    '14:50',
                                    '14:55',
                                    '15:00',
                                    '15:05',
                                    '15:10',
                                    '15:15',
                                    '15:20',
                                    '15:25',
                                    '15:30',
                                    '15:35',
                                    '15:40',
                                    '15:45',
                                    '15:50',
                                    '15:55',
                                    '16:00',
                                    '16:05',
                                    '16:10',
                                    '16:15',
                                    '16:20',
                                    '16:25',
                                    '16:30',
                                    '16:35',
                                    '16:40',
                                    '16:45',
                                    '16:50',
                                    '16:55',
                                    '17:00',
                                    '17:05',
                                    '17:10',
                                    '17:15',
                                    '17:20',
                                    '17:25',
                                    '17:30',
                                    '17:35',
                                    '17:40',
                                    '17:45',
                                    '17:50',
                                    '17:55',
                                    '18:00',
                                    '18:05',
                                    '18:10',
                                    '18:15',
                                    '18:20',
                                    '18:25',
                                    '18:30',
                                    '18:35',
                                    '18:40',
                                    '18:45',
                                    '18:50',
                                    '18:55',
                                    '19:00',
                                    '19:05',
                                    '19:10',
                                    '19:15',
                                    '19:20',
                                    '19:25',
                                    '19:30',
                                    '19:35',
                                    '19:40',
                                    '19:45',
                                    '19:50',
                                    '19:55',
                                    '20:00',
                                    '20:05',
                                    '20:10',
                                    '20:15',
                                    '20:20',
                                    '20:25',
                                    '20:30',
                                    '20:35',
                                    '20:40',
                                    '20:45',
                                    '20:50',
                                    '20:55',
                                    '21:00',
                                    '21:05',
                                    '21:10',
                                    '21:15',
                                    '21:20',
                                    '21:25',
                                    '21:30',
                                    '21:35',
                                    '21:40',
                                    '21:45',
                                    '21:50',
                                    '21:55',
                                    '22:00',
                                    '22:05',
                                    '22:10',
                                    '22:15',
                                    '22:20',
                                    '22:25',
                                    '22:30',
                                    '22:35',
                                    '22:40',
                                    '22:45',
                                    '22:50',
                                    '22:55',
                                    '23:00',
                                    '23:05',
                                    '23:10',
                                    '23:15',
                                    '23:20',
                                    '23:25',
                                    '23:30',
                                    '23:35',
                                    '23:40',
                                    '23:45',
                                    '23:50',
                                    '23:55'].map((option) => (
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
