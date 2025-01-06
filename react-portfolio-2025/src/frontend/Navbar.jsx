import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleIcon from '@mui/icons-material/Article';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

import '@fontsource/dancing-script'; // For logo
import '@fontsource/poppins'; // For menu items

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        { name: 'Home', icon: <HomeIcon /> },
        { name: 'About', icon: <PersonIcon /> },
        { name: 'Projects', icon: <WorkIcon /> },
        { name: 'Resume', icon: <DescriptionIcon /> },
        { name: 'Blogs', icon: <ArticleIcon /> },
    ];

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'rgba(28, 28, 46, 0.8)',
                backdropFilter: 'blur(5px)',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 139, 0.1)',
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
                    variant="h5"
                    sx={{
                        fontFamily: 'Dancing Script, cursive',
                        fontSize: '2.5rem',
                        fontWeight: 600,
                        color: '#ff99ff',
                        cursor: 'pointer',
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
                                        backgroundColor: '#f3a6ff', // Line color
                                        transition: 'width 0.3s ease', // Smooth transition
                                    },
                                    '&:hover::after': {
                                        width: '100%', // Expand line on hover
                                    },
                                }}
                            >
                                <IconButton
                                    sx={{
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        transition: 'color 0.3s ease',
                                        '&:hover': { color: '#f3a6ff' },
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
                            color: '#0066ff',
                            transition: 'color 0.3s ease',
                            '&:hover': { color: '#f3a6ff' },
                        }}
                    >
                        <StarIcon />
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
                            color: '#ff99ff',
                            transition: 'color 0.3s ease',
                            '&:hover': { color: '#f3a6ff' },
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
