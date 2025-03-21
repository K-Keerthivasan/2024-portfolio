import React from "react";
import { Box, Typography } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";

const UnderConstruction = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100vw",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "#ffffff",
                backdropFilter: "blur(10px)",
            }}
        >
            {/* Lottie Animation */}
            <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json"
                style={{ height: "250px", width: "250px" }}
            />
            <Typography
                variant="h4"
                sx={{ mt: 3, fontWeight: "bold", textAlign: "center" }}
            >
                Page Under Construction
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, textAlign: "center" }}>
              Working on it 🤧🤧
            </Typography>
        </Box>
    );
};

export default UnderConstruction;
