import React, { useState } from 'react';
import BarcodeReader from 'react-barcode-reader';
import { Modal, Box, Button, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';

const BarcodeModal = ({ open, onClose, handleSubmit }) => {
    const [barcode, setBarcode] = useState('');
    const [imageSrc, setImageSrc] = useState('');

    // Handle the barcode scan
    const handleBarcodeScan = (data) => {
        if (data) {
            setBarcode(data); // Set the scanned barcode value to the state
        }
    };

    // Handle error in barcode scan
    const handleError = (err) => {
        console.error(err);
    };

    // Handle the image selection
    const onDrop = (acceptedFiles) => {
        // Create an image URL from the file
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageSrc(reader.result); // Set the selected image as the state
        };
        reader.readAsDataURL(file);
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop,
    });

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    maxWidth: 600,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h6" id="modal-title" gutterBottom>
                    Scan Barcode or Upload Image
                </Typography>

                {/* Barcode Scanner */}
                <div style={{ marginBottom: '20px' }}>
                    <BarcodeReader
                        onError={handleError}
                        onScan={handleBarcodeScan}
                        style={{ width: '100%', height: '300px', border: '2px solid #ccc', marginBottom: '20px' }}
                    />
                </div>

                {/* Scanned Barcode */}
                {barcode && (
                    <div>
                        <Typography variant="body1">Scanned Barcode: {barcode}</Typography>
                    </div>
                )}

                {/* Image Upload Section */}
                <div
                    {...getRootProps()}
                    style={{
                        padding: '20px',
                        border: '2px dashed #4caf50',
                        cursor: 'pointer',
                        marginBottom: '20px',
                    }}
                >
                    <input {...getInputProps()} />
                    <Typography variant="body2" align="center">
                        Click or Drag & Drop an Image to Scan a Barcode
                    </Typography>
                </div>

                {/* Display uploaded image */}
                {imageSrc && (
                    <div>
                        <Typography variant="body1">Uploaded Image:</Typography>
                        <img
                            src={imageSrc}
                            alt="Uploaded"
                            style={{ width: '100%', maxWidth: '300px', borderRadius: '8px', display: 'block', margin: '20px auto' }}
                        />
                    </div>
                )}

                {/* Buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Set Reminder
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default BarcodeModal;
