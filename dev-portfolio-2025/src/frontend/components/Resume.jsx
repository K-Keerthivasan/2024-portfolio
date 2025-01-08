import React from "react";
import { Box, Typography, Button } from "@mui/material";
import resumePdf from "../../assets/resume.pdf"; // Adjust the path to your assets folder

const Resume = () => {
    return (
        <Box
            id="resume"
            sx={{
                marginTop: "80px",
                width: "100vw", // Full width of the viewport
                height: "100vh", // Full height of the viewport
                padding: "40px",
                textAlign: "center",
                overflowY: "auto", // Enable scrolling for overflow content

            }}
        >
            <Typography variant="h4"
                        sx={{
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "#7ac7fb",
                            mb: 4,
                            textTransform: "uppercase",
                        }}
                       >
                Resume
            </Typography>
            <Box
                sx={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    height: "800px", // Adjust height as needed
                    margin: "20px auto",
                    maxWidth: "90%",
                }}
            >
                <iframe
                    src={resumePdf}
                    title="Resume"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                    }}
                ></iframe>
            </Box>
            <Button
                variant="contained"
                color="primary"
                href={resumePdf}
                download="My_Resume.pdf" // Customize file name
                sx={{ marginTop: "20px",
                    marginBottom: "180px",

                }}


            >
                Download Resume
            </Button>
        </Box>
    );
};

export default Resume;
