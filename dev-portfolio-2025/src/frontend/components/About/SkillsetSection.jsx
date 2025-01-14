import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import {
    SiCplusplus,
    SiFirebase, SiGit, SiGithub,
    SiJavascript,
    SiNodedotjs,
    SiOpengl,
    SiPython,
    SiReact,
    SiRider,
    SiUnrealengine
} from 'react-icons/si';
import { FaApple, FaSlack } from 'react-icons/fa';
import { FaDiscord, FaWindows } from "react-icons/fa6";
import { DiVisualstudio } from "react-icons/di";
import {FiGithub} from "react-icons/fi";

const skills = [
    { icon: <SiCplusplus />, name: "C++", color: "#00599C" }, // Blue
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" }, // Yellow
    { icon: <SiReact />, name: "React", color: "#61DAFB" }, // Light Blue
    { icon: <SiNodedotjs />, name: "Node.js", color: "#68A063" }, // Green
    { icon: <SiGit />, name: "Git", color: "#db8e3f" }, // Green
    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" }, // Orange
    { icon: <SiPython />, name: "Python", color: "#3776AB" }, // Blue
    { icon: <SiOpengl />, name: "OpenGL", color: "#5586A4" }, // Teal
];

const tools = [
    { icon: <FaWindows />, name: "Windows", color: "#00ADEF" }, // Blue
    { icon: <FaDiscord />, name: "Discord", color: "#5865F2" }, // Purple
    { icon: <SiUnrealengine />, name: "Unreal", color: "#adadb6" }, // Black
    { icon: <SiRider />, name: "Rider", color: "#f80a85" }, // Purple
    { icon: <DiVisualstudio />, name: "Visual Studio", color: "#5C2D91" }, // Dark Purple
    { icon: <SiGithub />, name: "Github", color: "#e8e8e8" }, // Dark Purple
];

const SkillsetSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1200px",
                padding: "40px 20px",
                position: "relative",
                background: "rgba(0, 0, 0, 0.7)", // Darker background with opacity
                backdropFilter: "blur(10px)", // Blurred effect
                borderRadius: "16px",
                marginBottom: { xs: "180px", md: "200px" }, // Extra space below for mobile
                mb: 6,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",

            }}
        >
            {/* Professional Skillset Section */}
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    color: "#d4b1fb",
                    fontWeight: "bold",
                    marginBottom: 4,
                }}
            >
                Professional <span style={{ color: "#7ac7fb" }}>Technical Skillset</span>
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {skills.map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "120px",
                                border: "1px solid #7ac7fb",
                                borderRadius: "12px",
                                backgroundColor: "#161b22",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                    boxShadow: "0 4px 20px rgba(122, 199, 251, 0.5)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: "3rem",
                                    color: skill.color, // Use the dynamic color for the icon
                                    marginBottom: 1,
                                }}
                            >
                                {skill.icon}
                            </Box>
                            <Typography
                                sx={{
                                    color: "#ffffff",
                                    fontSize: "1.1rem",
                                    fontWeight: "bold",
                                }}
                            >
                                {skill.name}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Tools Section */}
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    color: "#d4b1fb",
                    fontWeight: "bold",
                    marginTop: 8,
                    marginBottom: 4,
                }}
            >
                Tools <span style={{ color: "#7ac7fb" }}>I use</span>
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {tools.map((tool, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "120px",
                                border: "1px solid #7ac7fb",
                                borderRadius: "12px",
                                backgroundColor: "#161b22",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                    boxShadow: "0 4px 20px rgba(122, 199, 251, 0.5)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: "3rem",
                                    color: tool.color, // Use the dynamic color for the icon
                                    marginBottom: 1,
                                }}
                            >
                                {tool.icon}
                            </Box>
                            <Typography
                                sx={{
                                    color: "#ffffff",
                                    fontSize: "1.1rem",
                                    fontWeight: "bold",
                                }}
                            >
                                {tool.name}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SkillsetSection;
