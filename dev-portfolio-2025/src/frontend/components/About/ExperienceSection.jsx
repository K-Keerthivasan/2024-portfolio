import {Box, Typography} from "@mui/material";
import React from "react";



// Data for the experiences
const experiences = [
    {
        title: "Freelance VFX Artist & Video Editor",
        period: "Jan 2020 - Dec 2022",
        description: "Worked on a variety of freelance projects, delivering high-quality visual effects, video editing, and compositing services for clients in different industries.",
        bulletPoints: [
            "Designed and composited cinematic VFX shots using After Effects and Nuke",
            "Edited promotional videos, short films, and YouTube content with Adobe Premiere Pro",
            "Collaborated with clients to transform creative visions into compelling visuals",
        ],

    },

    {
        title: "Youtuber / Content Creator",
        period: " Jan 2020 - Dec 2022",
        description: "Worked on a variety of creative videos and recorded and edited my own videos with friends for fun.",
        bulletPoints: [
            "Shot and edited projects using Adobe Premier Pro.",
            "Use After effects for motion graphics.",
            "Created original video concepts to engage my audience.",
            "Stayed updated on video editing software and equipment.",
        ],

    },

];


const ExperienceSection= ()=> {
    return(
        <div>
            {/* Experience Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    padding: "40px 20px",
                    position: "relative",
                    mb: 6,
                }}
            >

                {/* Blurred Background */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.5)", // Dark background with opacity
                        backdropFilter: "blur(10px)", // Blurred effect
                        borderRadius: "12px",
                        zIndex: -1, // Push the background behind the content

                    }}
                />




                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#7ac7fb",
                        mb: 4,
                        textTransform: "uppercase",
                    }}
                >
                    Work Experience
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >

                    {experiences.map((experience, index) => (
                        <Box
                            key={index}
                            sx={{
                                padding: "20px",
                                backgroundColor: "rgba(64,78,100,0.2)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "12px",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#ff8080",
                                    mb: 1,
                                }}
                            >
                                {experience.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: "1rem",
                                    color: "#ffb980",
                                    mb: 1,
                                }}
                            >
                                {experience.period}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.8,
                                    fontSize: "1rem",
                                }}
                            >
                                {experience.description}
                            </Typography>

                            {/* Bullet Points */}
                            <Box component="ul" sx={{ paddingLeft: 2, marginTop: 1 }}>
                                {experience.bulletPoints.map((point, idx) => (
                                    <Typography
                                        component="li"
                                        key={idx}
                                        sx={{
                                            fontSize: "1rem",
                                            lineHeight: 1.5,
                                            "&::marker": {
                                                color: "#ffffff",
                                            },
                                        }}
                                    >
                                        {point}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    ))}






                </Box>
            </Box>
        </div>
    )

}

export default ExperienceSection;