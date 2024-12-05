import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField, IconButton, Avatar } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; // Back icon

const AIModal = ({ open, onClose }) => {
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'I am healthy bot. How can I help you?' },
        { type: 'user', text: 'How can I set up my medicine schedule?' },
        { type: 'bot', text: `You can set up your medicine schedule by following these steps:\n1. Open your app\n2. Bla bla ...\n3. ...\nThese steps will help you set up your schedule.` },
        { type: 'bot', text: 'Anything else that I can help you?' },
    ]);

    const [currentMessage, setCurrentMessage] = useState('');

    const handleSend = () => {
        if (currentMessage.trim()) {
            setMessages([...messages, { type: 'user', text: currentMessage }]);
            setCurrentMessage('');
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="chat-modal-title"
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
                    height: '90%',
                    bgcolor: 'white',
                    boxShadow: 24,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        px: 2,
                        py: 1,
                        borderBottom: '1px solid #ddd',
                    }}
                >
                    <IconButton onClick={onClose}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography
                        id="chat-modal-title"
                        variant="h6"
                        sx={{ flexGrow: 1, textAlign: 'center' }}
                    >
                        Healthy Robot
                    </Typography>
                </Box>

                {/* Chat Messages */}
                <Box
                    sx={{
                        flexGrow: 1,
                        overflowY: 'auto',
                        px: 2,
                        py: 2,
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    {messages.map((message, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: message.type === 'user' ? 'row-reverse' : 'row',
                                mb: 2,
                            }}
                        >
                            {message.type === 'user' && <Avatar alt="User Avatar" sx={{
                                fontSize: 32,
                                marginRight: 0,
                                marginLeft: 1,
                                
                            }} />}

                            {message.type === 'bot' && <SupportAgentIcon
                                sx={{
                                    fontSize: 32,
                                    marginRight: 1 ,
                                    marginLeft:  0,
                                    color: 'primary.main' ,
                                }}
                            />}
                            <Typography
                                sx={{
                                    padding: 1,
                                    borderRadius: 2,
                                    backgroundColor: message.type === 'bot' ? '#e0f7fa' : '#c8e6c9',
                                    maxWidth: '70%',
                                    whiteSpace: 'pre-line',
                                }}
                            >
                                {message.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Input Area */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        px: 2,
                        py: 1,
                        borderTop: '1px solid #ddd',
                    }}
                >
                    <TextField
                        fullWidth
                        placeholder="Text your message"
                        variant="outlined"
                        size="small"
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        sx={{ marginRight: 2 }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSend}
                    >
                        Send
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default AIModal;
