import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from 'emailjs-com';

const ContactOverlay = ({ isOpen, toggleOverlay }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();

        const serviceID = 'portfolio-emails'; // Replace with your EmailJS Service ID
        const templateID = 'portfolio-template2022'; // Replace with your EmailJS Template ID
        const userID = 'ok1J_wHS5uawo3dOb'; // Replace with your EmailJS User ID

        try {
            await emailjs.send(
                serviceID,
                templateID,
                { email, message },
                userID
            );
            setStatus('Email sent successfully!');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Failed to send email:', error);
            setStatus('Failed to send email.');
        }
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '300px',
                height: '100vh',
                backgroundColor: '#1c1c2e',
                boxShadow: '-5px 0 15px rgba(0,0,0,0.2)',
                zIndex: 1300,
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                gap: '20px',
                color: '#fff',
                backdropFilter: 'blur(5px)',
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)', // Controls slide-in/out animation
                transition: 'transform 0.3s ease-in-out, background-color 0.3s ease', // Smooth animations for transform and background color
                '&:hover': {
                    backgroundColor: 'rgb(28,28,46,0.9)', // Background color on hover
                },
            }}
        >
            <IconButton
                onClick={toggleOverlay}
                sx={{ alignSelf: 'flex-end', color: '#fff' }}
            >
                <CloseIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                Contact Us
            </Typography>
            <form onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                        style: { color: '#fff' },
                    }}
                    InputLabelProps={{
                        style: { color: '#ccc' },
                    }}
                    sx={{ backgroundColor: '#2a2a3d' }}
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    InputProps={{
                        style: { color: '#fff' },
                    }}
                    InputLabelProps={{
                        style: { color: '#ccc' },
                    }}
                    sx={{ backgroundColor: '#2a2a3d' }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: '#80ceff',
                        '&:hover': { backgroundColor: '#00c4ff' },
                    }}
                >
                    Send
                </Button>
            </form>
            {status && (
                <Typography
                    sx={{
                        color: status.includes('successfully') ? '#80ceff' : '#ff4d4f',
                        marginTop: '10px',
                    }}
                >
                    {status}
                </Typography>
            )}
        </Box>
    );
};

export default ContactOverlay;
