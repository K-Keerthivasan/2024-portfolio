import React from "react";
import { Box } from "@mui/material";

const WavingHand = () => {
    return (
        <Box
            sx={{
                display: "inline-block",
                fontSize: "2rem",
                animation: "wave 2s infinite", // Add the animation here
                transformOrigin: "70% 70%", // Set the origin of the wave motion
            }}
        >
            👋
            <style>
                {`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            15% { transform: rotate(15deg); }
            30% { transform: rotate(-10deg); }
            40% { transform: rotate(12deg); }
            50% { transform: rotate(-7deg); }
            60% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }
        `}
            </style>
        </Box>
    );
};

export default WavingHand;
