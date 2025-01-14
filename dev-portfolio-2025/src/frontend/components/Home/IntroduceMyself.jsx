import {Box, Typography} from "@mui/material";
import image1 from "../../../assets/Svg_1.svg"; // Replace with your SVG file path

const IntroduceMyself = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: {xs: "column", md: "row"}, // Stack vertically on small screens
                alignItems: "center",
                justifyContent: "space-between",
                padding: {xs: "20px", md: "60px"}, // Add padding for better spacing
                color: "#c4d4e9",
                textAlign: "left",
                backgroundColor: "rgba(64,78,100,0.7)", // Semi-transparent background
                backdropFilter: "blur(10px)", // Add blur effect
                borderRadius: "12px", // Add rounded corners
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
                overflow: "hidden", // Prevent content overflow
                marginBottom: {xs: "80px", md: "0"}, // Extra space below for mobile
            }}
        >
            {/* Text Content */}
            <Box
                sx={{
                    flex: 1,
                    marginRight: {md: "40px"}, // Add margin between text and image on large screens
                    marginBottom: {xs: "20px", md: "0"}, // Margin for small screens
                    textAlign: {xs: "center", md: "left"}, // Center text for mobile
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        color: "#c4d4e9",
                        marginBottom: 4,
                        textTransform: "uppercase",
                        fontSize: {xs: "1.8rem", md: "2.4rem"}, // Adjust font size for mobile
                    }}
                >
                    Let me <span style={{color: "#7ac7fb"}}>Introduce</span> Myself
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: {xs: "1rem", md: "1.2rem"}, // Smaller font size for mobile
                        marginBottom: 2,
                        lineHeight: 1.8,
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    I fell in love with programming and I have at least learnt something, I think... 🤷‍♂️
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: {xs: "1rem", md: "1.2rem"},
                        marginBottom: 2,
                        lineHeight: 1.8,
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    I am fluent in classics like{" "}
                    <span style={{color: "#7ac7fb"}}>C++, Javascript, and Go.</span>
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: {xs: "1rem", md: "1.2rem"},
                        marginBottom: 2,
                        lineHeight: 1.8,
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    My field of interest includes building new{" "}
                    <span style={{color: "#7ac7fb"}}>Web Technologies and Products</span> and exploring areas
                    related to <span style={{color: "#7ac7fb"}}>Blockchain.</span>
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: {xs: "1rem", md: "1.2rem"},
                        lineHeight: 1.8,
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    Whenever possible, I also apply my passion for developing products with{" "}
                    <span style={{color: "#7ac7fb"}}>Node.js</span> and modern JavaScript libraries and frameworks
                    like <span style={{color: "#7ac7fb"}}>React.js</span> and <span
                    style={{color: "#7ac7fb"}}>Next.js</span>.
                </Typography>
            </Box>

            {/* SVG Image */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: {xs: "80%", md: "50%"}, // Adjust width for mobile and desktop
                    marginTop: {xs: "20px", md: "0"}, // Add spacing on mobile
                    marginBottom: {xs: "80px", md: "0"}, // Add extra bottom space for mobile
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
