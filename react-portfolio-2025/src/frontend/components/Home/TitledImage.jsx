import React, { useState } from "react";
import { Box } from "@mui/material";

const TiltedImage = ({ imageSrc, altText }) => {
    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

    // Handle Mouse Movement
    const handleMouseMove = (event) => {
        const { clientX, clientY, currentTarget } = event;
        const rect = currentTarget.getBoundingClientRect();

        // Calculate rotation values based on mouse position
        // Calculate rotation values based on mouse position
        const rotateX = ((clientY - rect.top) / rect.height - 0.5) * -20; // Increased tilt intensity
        const rotateY = ((clientX - rect.left) / rect.width - 0.5) * 20;

        setRotation({ rotateX, rotateY });
    };

    return (
        <Box
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setRotation({ rotateX: 0, rotateY: 0 })} // Reset on mouse leave
            sx={{
                perspective: "1000px", // Adds depth effect
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                component="img"
                src={imageSrc}
                alt={altText}
                sx={{
                    width: "80%", // Increased the size from 70% to 80%
                    maxWidth: "600px", // Allow larger max width
                    height: "auto",
                    transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
                    transition: "transform 0.1s ease-out", // Smooth rotation
                }}
            />
        </Box>
    );
};

export default TiltedImage;
