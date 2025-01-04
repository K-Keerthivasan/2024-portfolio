import React, { useEffect, useState } from "react";
import "./Linker.css";
import Profile from "../assets/profile icon.svg";
import FloatingImage from "../assets/FloatingImage.svg";
import { Instagram, Facebook, Email, YouTube } from "@mui/icons-material";

function Linker() {
    // State for the looping subtitle
    const [subtitleIndex, setSubtitleIndex] = useState(0);
    const [isFading, setIsFading] = useState(false); // State to manage fading animation
    const subtitles = ["Programmer", "Designer", "Freelancer"]; // Subtitles array

    // Update subtitle every 2 seconds with transition
    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true); // Trigger fade-out
            setTimeout(() => {
                setSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length); // Update subtitle
                setIsFading(false); // Trigger fade-in
            }, 500); // Duration of fade-out
        }, 3000); // Change subtitle every 3 seconds
        return () => clearInterval(interval); // Clear interval on unmount
    }, [subtitles.length]);

    return (
        <div className="link-tree">
            {/* Profile Section */}
            <div className="profile-section">
                {/* Profile Avatar */}
                <img src={Profile} alt="Profile" className="profile-avatar" />

                {/* Icons and Floating Image */}
                <div className="icon-and-image">
                    <div className="icon-links">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon"
                        >
                            <Instagram />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon"
                        >
                            <Facebook />
                        </a>
                        <a href="mailto:example@example.com" className="icon">
                            <Email />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon"
                        >
                            <YouTube />
                        </a>
                    </div>

                    {/* Floating Image */}
                    <div className="floating-image-container">
                        <img
                            src={FloatingImage}
                            alt="Floating Content"
                            className="floating-image"
                        />
                    </div>
                </div>
            </div>

            {/* Name and Subtitle Section */}
            <div className="name-section">
                <h1 className="name">KEERTHIVASAN</h1>
                {/* Subtitle with animation */}
                <p className={`subtitle ${isFading ? "fade" : ""}`}>
                    {subtitles[subtitleIndex]}
                </p>
            </div>

            {/* Links Section */}
            <div className="links-section">
                <button className="link-button home">HOME PAGE</button>
                <button className="link-button video">DESIGNER PAGE</button>
            </div>
        </div>
    );
}

export default Linker;
