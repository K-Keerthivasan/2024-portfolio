import { Box, Typography } from "@mui/material";
import image1 from "../../../assets/Svg_1.svg"; // Replace with your SVG file path

const IntroduceMyself = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
                alignItems: "center",
                justifyContent: "space-between",
                padding: { xs: "20px", md: "60px" }, // Add padding for better spacing
                color: "#c4d4e9",
                textAlign: "left",
                backgroundColor: "rgba(64,78,100,0.7)", // Semi-transparent background
                backdropFilter: "blur(10px)", // Add blur effect
                borderRadius: "12px", // Add rounded corners
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
                overflow: "hidden", // Prevent content overflow
                marginBottom: { xs: "80px", md: "0" }, // Extra space below for mobile
            }}
        >
            {/* Text Content */}
            <Box
                sx={{
                    flex: 1,
                    marginRight: { md: "40px" }, // Add margin between text and image on large screens
                    marginBottom: { xs: "20px", md: "0" }, // Margin for small screens
                    textAlign: { xs: "center", md: "left" }, // Center text for mobile
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        color: "#c4d4e9",
                        marginBottom: 4,
                        textTransform: "uppercase",
                        fontSize: { xs: "1.8rem", md: "2.4rem" }, // Adjust font size for mobile
                    }}
                >
                    Let me <span style={{ color: "#7ac7fb" }}>Introduce</span> Myself
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        marginBottom: 2,
                        lineHeight: 1.8,
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    I love working on <strong>creative projects</strong>, which has led me to explore various fields.
                    I am both a <strong>programmer</strong> and a <strong>designer</strong>. In web development,
                    I specialize in <strong>frontend development</strong>, and I am proficient in <strong>C++ programming</strong> as well.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        marginBottom: 2,
                        lineHeight: 1.8,
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    I have experience managing <strong>Git repositories</strong> and collaborating efficiently in development workflows.
                    My passion lies in <strong>creating innovative games and designs</strong> that allow me to blend both programming and artistic creativity.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        marginBottom: 2,
                        lineHeight: 1.8,
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    Over the years, I have gained expertise in{" "}
                    <span style={{ color: "#7ac7fb", fontWeight: "bold" }}>
                        React.js, C++, OpenGL, Unreal Engine, Firebase, Node.js, JavaScript, and Python
                    </span>,
                    using them to build and enhance my creative projects.
                </Typography>
            </Box>

            {/* SVG Image */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: { xs: "80%", md: "50%" }, // Adjust width for mobile and desktop
                    marginTop: { xs: "20px", md: "0" }, // Add spacing on mobile
                    marginBottom: { xs: "80px", md: "0" }, // Add extra bottom space for mobile
                }}
            >
                <img
                    src={image1}
                    alt="Introduce Myself Illustration"
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "50%", // Circular styling
                    }}
                />
            </Box>
        </Box>
    );
};

export default IntroduceMyself;
