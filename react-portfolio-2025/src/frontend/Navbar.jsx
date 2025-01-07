import React from 'react';
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
import Box from '@mui/material/Box';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import FastForwardIcon from '@mui/icons-material/FastForward';


import '@fontsource/dancing-script'; // For logo
import '@fontsource/poppins';
import {Link} from "@mui/material"; // For menu items

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        { name: 'Home', icon: <HomeIcon />, link: "/" },
        { name: 'About', icon: <Person2Icon />, link: "/about" },
        { name: 'Projects', icon: <WorkHistoryIcon />,  link: "/projects" },
        { name: 'Resume', icon: <SummarizeIcon />, link: "/resume"},
        { name: 'Blogs', icon: <TopicIcon />, link: "/" },
    ];

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'rgba(28, 28, 46, 0.8)',
                backdropFilter: 'blur(5px)',
                transition: 'background-color 0.3s ease',
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
                    href="https://github.com"
                    variant="h5"
                    sx={{
                        fontFamily: 'Dancing Script, cursive',
                        fontSize: '2.5rem',
                        fontWeight: 600,
                        color: '#80ceff', // Default text color (light blue)
                        cursor: 'pointer',
                        display: 'inline-block', // Allows proper hover effects on text
                        transition: 'all 0.3s ease', // Smooth transition for hover effects
                        '&:hover': {
                            textShadow: '0 0 10px #80ceff, 0 0 10px #80ceff', // Glow effect directly on the text
                        },
                    }}
                >
                    KK
                </Typography>




                {/* Menu and Star Icon Group */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: '20px',
                        marginLeft: 'auto', // Align the whole group to the right
                        alignItems: 'center',
                    }}
                >
                    {/* Desktop Menu */}

                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: '20px',
                        }}
                    >
                        {menuItems.map((item) => (
                            <Box
                                key={item.name}
                                sx={{
                                    position: 'relative', // For pseudo-element positioning
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: '-5px', // Adjust position below the text
                                        left: 0,
                                        width: 0, // Initially hidden
                                        height: '3px', // Thickness of the line
                                        backgroundColor: '#80ceff', // Line color
                                        transition: 'width 0.3s ease', // Smooth transition
                                    },
                                    '&:hover::after': {
                                        width: '100%', // Expand line on hover
                                    },
                                }}
                            >
                                <IconButton
                                    component={Link}
                                    href={item.link}
                                    sx={{
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        transition: 'color 0.3s ease',
                                        '&:hover': { color: '#80ceff' },
                                    }}
                                >
                                    {item.icon}
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: 'bold',
                                            fontSize: '1rem',
                                            textTransform: 'none',
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </IconButton>
                            </Box>
                        ))}
                    </Box>

                    {/* Star Icon */}
                    <IconButton
                        sx={{
                            color: '#b2e1ff',
                            transition: 'color 0.3s ease',
                            '&:hover': {
                                color: '#00c4ff',
                            },
                        }}
                    >
                        <ContactMailIcon />
                    </IconButton>

                    {/* CodeOffIcon Icon */}
                    <IconButton
                        sx={{
                            color: '#b2e1ff',
                            transition: 'color 0.3s ease',
                            '&:hover': {
                                color: '#00c4ff',
                            },
                        }}
                    >
                        <CodeOffIcon />
                    </IconButton>

                    <IconButton
                        component={Link}
                        href="https://www.youtube.com/"
                        sx={{
                            color: '#ff0000',
                            transition: 'color 0.3s ease', // Smooth color transition
                            '&:hover': {
                                color: '#ff0000', // Light red color on hover
                                svg: {
                                    stroke: '#ffb2b2', // Add red stroke on hover
                                    strokeWidth: 2, // Stroke thickness,
                                    textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000', // Glow effect for the icon

                                },
                            },
                            svg: {
                                stroke: 'none', // Default: No stroke
                            },
                        }}
                    >
                        <FastForwardIcon />
                    </IconButton>


                </Box>

                {/* Mobile Menu */}
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                    }}
                >
                    <IconButton
                        onClick={handleMenuClick}
                        sx={{
                            color: '#80ceff',
                            transition: 'color 0.3s ease',
                            '&:hover': { color: '#80ceff' },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {menuItems.map((item) => (
                            <MenuItem
                                key={item.name}
                                onClick={handleMenuClose}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: '#1c1c2e',
                                    fontFamily: 'Poppins, sans-serif',
                                }}
                            >
                                {item.icon}
                                {item.name}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
