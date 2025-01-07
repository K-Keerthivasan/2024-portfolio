import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

const Typewriter = ({ texts, typingSpeed = 100, pauseTime = 2000 }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentFullText = texts[currentIndex];

        if (isDeleting) {
            if (charIndex > 0) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentFullText.substring(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);
                }, typingSpeed / 2);
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % texts.length);
            }
        } else {
            if (charIndex < currentFullText.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentFullText.substring(0, charIndex + 1));
                    setCharIndex((prev) => prev + 1);
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
                return () => clearTimeout(timeout);
            }
        }
    }, [texts, charIndex, isDeleting, typingSpeed, pauseTime, currentIndex]);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                height: "50px",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    color: "#7ac7fb",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    fontSize: { xs: "2.5rem" }, // Smaller font size for mobile
                }}
            >
                {currentText}
                <span
                    style={{
                        display: "inline-block",
                        width: "5px",
                        height: "1.5rem",
                        backgroundColor: "#7ac7fb",
                        marginLeft: "5px",
                        animation: "blink 1s step-end infinite",
                    }}
                ></span>
            </Typography>
        </Box>
    );
};

export default Typewriter;
