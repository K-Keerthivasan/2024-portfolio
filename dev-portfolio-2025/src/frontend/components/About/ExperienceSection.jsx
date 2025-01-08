import {Box, Typography} from "@mui/material";
import React from "react";

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
                    {/* Single Experience */}
                    <Box
                        sx={{
                            padding: "20px",
                            backgroundColor: "rgba(64,78,100,0.2)", // Semi-transparent background
                            backdropFilter: "blur(10px)", // Add blur effect
                            borderRadius: "12px", // Add rounded corners
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth

                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                color: "#d4b1fb",
                                mb: 1,
                            }}
                        >
                            Software Developer
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "1rem",
                                color: "#7ac7fb",
                                mb: 1,
                            }}
                        >
                            XYZ Company | Jan 2020 - Dec 2022
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                lineHeight: 1.8,
                                fontSize: "1rem",
                            }}
                        >
                            Worked on building modern web applications using React.js, Node.js, and other cutting-edge technologies.
                        </Typography>

                        {/* Bullet Points */}
                        <Box component="ul" sx={{ paddingLeft: 2, marginTop: 1 }}>
                            <Typography
                                component="li"
                                sx={{
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                    "&::marker": {
                                        color: "#7ac7fb", // Set bullet color here
                                    },
                                }}
                            >
                                Designed and implemented responsive UI components using React.js
                            </Typography>
                            <Typography
                                component="li"
                                sx={{
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                    "&::marker": {
                                        color: "#7ac7fb", // Set bullet color here
                                    },
                                }}
                            >
                                Optimized performance by reducing load times by 25%
                            </Typography>
                            <Typography
                                component="li"
                                sx={{
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                    "&::marker": {
                                        color: "#7ac7fb", // Set bullet color here
                                    },
                                }}
                            >
                                Collaborated with cross-functional teams to meet project goals
                            </Typography>
                        </Box>


                    </Box>


                    {/* Single Experience */}
                    <Box
                        sx={{
                            padding: "20px",
                            backgroundColor: "rgba(64,78,100,0.2)", // Semi-transparent background
                            backdropFilter: "blur(10px)", // Add blur effect
                            borderRadius: "12px", // Add rounded corners
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth

                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                color: "#d4b1fb",
                                mb: 1,
                            }}
                        >
                            Software Developer
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "1rem",
                                color: "#7ac7fb",
                                mb: 1,
                            }}
                        >
                            XYZ Company | Jan 2020 - Dec 2022
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                lineHeight: 1.8,
                                fontSize: "1rem",
                            }}
                        >
                            Worked on building modern web applications using React.js, Node.js, and other cutting-edge technologies.
                        </Typography>

                        {/* Bullet Points */}
                        <Box component="ul" sx={{ paddingLeft: 2, marginTop: 1 }}>
                            <Typography
                                component="li"
                                sx={{
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                    "&::marker": {
                                        color: "#7ac7fb", // Set bullet color here
                                    },
                                }}
                            >
                                Designed and implemented responsive UI components using React.js
                            </Typography>
                            <Typography
                                component="li"
                                sx={{
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                    "&::marker": {
                                        color: "#7ac7fb", // Set bullet color here
                                    },
                                }}
                            >
                                Optimized performance by reducing load times by 25%
                            </Typography>
                            <Typography
                                component="li"
                                sx={{
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                    "&::marker": {
                                        color: "#7ac7fb", // Set bullet color here
                                    },
                                }}
                            >
                                Collaborated with cross-functional teams to meet project goals
                            </Typography>
                        </Box>


                    </Box>





                </Box>
            </Box>
        </div>
    )

}

export default ExperienceSection;