import  { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SummarizeIcon from '@mui/icons-material/Summarize';
import TopicIcon from '@mui/icons-material/Topic';
import CloseIcon from '@mui/icons-material/Close'; // Sidebar close button
import Box from '@mui/material/Box';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FastForwardIcon from '@mui/icons-material/FastForward';
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import ContactOverlay from './components/Contact/ContactOverlay.jsx'; // Import the ContactOverlay component

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const [anchorEl, setAnchorEl] = useState(null); // For the mobile menu
    const [isContactOpen, setIsContactOpen] = useState(false); // For contact overlay visibility

    const location = useLocation(); // Get the current route

    // Check if the current route is "/admin"
    const isAdminPanel = location.pathname === "/admin";



    // Mobile menu toggle handlers
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Contact overlay toggle handlers
    const toggleContactOverlay = () => {
        setIsContactOpen((prev) => !prev);
    };

    const menuItems = [
        { name: 'Home', icon: <HomeIcon />, link: '/' },
        { name: 'About', icon: <Person2Icon />, link: '/about' },
        { name: 'Projects', icon: <WorkHistoryIcon />, link: '/projects' },
        { name: 'Resume', icon: <SummarizeIcon />, link: '/resume' },
        { name: 'Blogs', icon: <TopicIcon />, link: '/blogs' },
    ];

    return (
        <>
            <AppBar
                position="fixed"
                sx={{

                    backgroundColor: 'rgba(28, 28, 46, 0.8)',
                    backdropFilter: 'blur(5px)',
                    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
                    '&:hover': {
                        backgroundColor: 'rgba(8,8,73,0.1)',
                    },
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 20px',
                    }}
                >

                    {/* Logo */}
                    <Typography
                        component={Link}
                        href="/"
                        variant="h5"
                        sx={{
                            fontFamily: 'Dancing Script, cursive',
                            fontSize: '2.5rem',
                            fontWeight: 600,
                            color: '#80ceff',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                textShadow: '0 0 10px #80ceff, 0 0 20px #80ceff',
                            },
                        }}
                    >
                        KK
                    </Typography>

                    {/* Menu and Action Icons */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '20px',
                            alignItems: 'center',
                        }}
                    >
                        {/* Desktop Menu */}
                        <Box sx={{display: {xs: 'none', md: 'flex'}, gap: '20px'}}>
                            {menuItems.map((item) => (
                                <Link to={item.link} key={item.name} style={{textDecoration: 'none', color: 'inherit'}}>
                                    <IconButton
                                        sx={{
                                            color: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            '&:hover': {color: '#80ceff'},
                                        }}
                                    >
                                        {item.icon}
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 'bold',
                                                fontSize: '1rem',
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </IconButton>
                                </Link>
                            ))}
                        </Box>


                        {/* ContactMailIcon */}
                        <IconButton
                            onClick={() => {
                                console.log('Contact icon clicked');
                                toggleContactOverlay();
                            }}
                            sx={{
                                color: '#b2e1ff',
                                transition: 'color 0.3s ease',
                                '&:hover': {
                                    color: '#00c4ff',
                                },
                            }}
                        >
                            <ContactMailIcon/>
                        </IconButton>


                        {/* FastForwardIcon for YouTube */}
                        <a href="https://kk-film-portfolio.web.app/" target="_blank" rel="noopener noreferrer"
                           style={{textDecoration: 'none', color: 'inherit'}}>
                            <IconButton
                                sx={{
                                    color: '#ff0000',
                                    transition: 'color 0.3s ease',
                                    '&:hover': {
                                        color: '#ff0000',
                                        svg: {
                                            stroke: '#ffb2b2',
                                            strokeWidth: 2,
                                            textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000',
                                        },
                                    },
                                    svg: {
                                        stroke: 'none',
                                    },
                                }}
                            >
                                <FastForwardIcon/>
                            </IconButton>
                        </a>


                    </Box>

                    {/* Mobile Menu */}
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            onClick={handleMenuClick}
                            sx={{color: '#80ceff', transition: 'color 0.3s ease'}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            {menuItems.map((item) => (
                                <MenuItem key={item.name} onClick={handleMenuClose}>
                                    <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* Sidebar Toggle Button (Only Visible in Admin Panel) */}
                    {isAdminPanel && (
                        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)} sx={{ color: "#80ceff" }}>
                            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    )}

                </Toolbar>
            </AppBar>

            {/* ContactOverlay Component */}
            <ContactOverlay isOpen={isContactOpen} toggleOverlay={toggleContactOverlay} />
        </>
    );
};

export default Navbar;
