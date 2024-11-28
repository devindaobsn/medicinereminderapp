import React from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    Button,
    Box,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddMedicinePopUp = ({ open, onClose }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
            keepMounted
            fullWidth
            PaperProps={{
                sx: {
                    position: "absolute", bottom: 0, margin: 0, borderRadius: "16px", width: "100%", left: "50%", transform: "translateX(-50%)", maxWidth: 400
                },
            }}
        >
            <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
                Add Medication
            </DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2}>
                    <Button variant="outlined">Scan to add</Button>
                    <Button variant="outlined">Manually add</Button>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddMedicinePopUp;
