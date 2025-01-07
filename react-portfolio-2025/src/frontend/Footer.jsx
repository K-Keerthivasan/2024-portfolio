import { Box, Typography, IconButton, Link } from '@mui/material';
import { GitHub, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'rgba(28, 28, 46, 0.8)',
                color: '#ffffff',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 40px',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                backdropFilter: 'blur(5px)',
                transition: 'background-color 0.3s ease', // Smooth transition for hover effect
                '&:hover': {
                    backgroundColor: 'rgba(8,8,73,0.1)',
                },
            }}
        >
            {/* Left Section */}
            <Typography
                variant="body2"
                sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    marginBottom: { xs: '10px', md: '0' },
                }}
            >
                Designed and Developed by KK
            </Typography>

            {/* Center Section */}
            <Typography
                variant="body2"
                sx={{
                    textAlign: 'center',
                    marginBottom: { xs: '10px', md: '0' },
                }}
            >
                Copyright © 2025 KK
            </Typography>

            {/* Right Section */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <IconButton
                    component={Link}
                    href="https://github.com"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: '#ffffff', '&:hover': { color: '#80ceff' } }}
                >
                    <GitHub />
                </IconButton>
                <IconButton
                    component={Link}
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: '#ffffff', '&:hover': { color: '#80ceff' } }}
                >
                    <Twitter />
                </IconButton>
                <IconButton
                    component={Link}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: '#ffffff', '&:hover': { color: '#80ceff' } }}
                >
                    <LinkedIn />
                </IconButton>
                <IconButton
                    component={Link}
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: '#ffffff', '&:hover': { color: '#80ceff' } }}
                >
                    <Instagram />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;
