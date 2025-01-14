import React from "react";
import { Box, Typography } from "@mui/material";
import Typewriter from "./Typewriter.jsx";
import TiltedImage from "./TitledImage.jsx"; // Import the TiltedImage component
import image1 from "../../../assets/Svg_2.svg"; // Path to your SVG image
import IntroduceMyself from "./IntroduceMyself.jsx";

const Home = () => {
    const roles = ["Web Developer", "Game Developer", "Game Designer", "Programmer"];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh", // Full height of the viewport
                width:"100vw",
                overflowY: "auto", // Enable vertical scrolling for the page
                background:"transparent" // Background color for the whole page
            }}
        >
            {/* Top Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
                    height: "100vh", // Ensure it takes the full viewport height
                    flexShrink: 0, // Prevent this section from shrinking
                }}
            >
                {/* Left Section */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        padding: "10px 50px",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            color: "#D1C4E9",
                            marginBottom: 1,
                        }}
                    >
                        Hi There! 👋 I'm Keerthi
                    </Typography>
                    <Typewriter texts={roles} typingSpeed={100} pauseTime={2000} />
                </Box>

                {/* Right Section with Tilted Image */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        scale: "2",
                    }}
                >
                    <TiltedImage
                        imageSrc={image1}
                        altText="Developer Illustration"
                    />
                </Box>
            </Box>

            {/* Bottom Section */}
            <Box
                sx={{
                    flexGrow: 1,
                    padding: { xs: "40px 20px", md: "80px 100px" }, // Adjust padding for mobile
                    backgroundColor: "rgba(64,78,100,0.7)", // Semi-transparent background
                    backdropFilter: "blur(10px)", // Adds the blur effect
                    borderRadius: "12px", // Optional: Adds rounded corners
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Optional: Adds a subtle shadow

                }}
            >
                <IntroduceMyself />

            </Box>
        </Box>
    );
};

export default Home;