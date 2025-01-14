import React from "react";
import { Box, Typography } from "@mui/material";
import image1 from "../../../assets/Computer.svg";
import ExperienceSection from "./ExperienceSection.jsx";
import SkillsetSection from "./SkillsetSection.jsx";

const About = () => {
    return (
        <Box
            sx={{
                marginTop: "50px",
                width: "100vw", // Full width of the viewport
                height: "100vh", // Full height of the viewport
                overflowY: "auto", // Enable scrolling for overflow content
                backgroundColor: "transparent", // Transparent background
                color: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

            }}
        >
            {/* About Me Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px", // Limit the content width
                    padding: "40px 20px",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 6,
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        textAlign: { xs: "center", md: "left" },
                        pr: { md: 4 },
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3, color: "#7ac7fb" }}>
                        Know Who <span style={{ color: "#d4b1fb" }}>I'M</span>
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.2rem", mb: 2 }}>
                        Hi Everyone, I am <span style={{ color: "#d4b1fb" }}>Your Name</span> from{" "}
                        <span style={{ color: "#7ac7fb" }}>Your Location</span>.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.2rem", mb: 2 }}>
                        I am currently employed as a <span style={{ color: "#7ac7fb" }}>Your Role</span> at{" "}
                        <span style={{ color: "#d4b1fb" }}>Your Company</span>.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.2rem", mb: 4 }}>
                        Apart from coding, some other activities that I love to do include:
                    </Typography>
                    <ul>
                        <li>🎮 Playing Games</li>
                        <li>✍️ Writing Tech Blogs</li>
                        <li>🌍 Travelling</li>
                    </ul>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        mt: { xs: 4, md: 0 },
                    }}
                >
                    <img
                        src={image1}
                        style={{ maxWidth: "100%", height: "auto" }}
                        alt="About Me"
                    />
                </Box>
            </Box>

<ExperienceSection/>
            <SkillsetSection/>
         </Box>
    );
};

export default About;
