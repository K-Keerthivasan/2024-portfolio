import {useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {TextField, Button, Box, Typography, Link, IconButton, Container, Paper} from "@mui/material";
import BackgroundImage from "../assets/background.svg";

const adminEmail = "kkvasan99@gmail.com";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            if (userCredential.user.email !== adminEmail) {
                alert("Unauthorized access");
                return;
            }
            alert("Login successful!");
        } catch (error) {
            alert("Invalid credentials");
        }
    };
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'rgba(34,34,50,0.2)',
                width: "100vw",
                minHeight: "100vh",
                "@media (max-width: 768px)": { // ✅ Mobile-specific styles
                    backgroundSize: "250%", // Scale up the image
                    backgroundPosition: "top center", // Adjust position for mobile
                },

            }}
        >
            <Container maxWidth="xs" sx={{
                backgroundColor: "transparent !important", // Ensure it's transparent
                boxShadow: "none", // Remove any unwanted shadows
                padding: '30px', // Remove extra padding if needed
            }}>
                <Box>
                    <Paper elevation={3} sx={{
                        padding: 4,
                        textAlign: "center",
                        borderRadius: 3,
                        backgroundColor: 'rgba(22,22,66,0.8)',

                        boxShadow: "none",
                    }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom
                        sx={{
                            color: "#ffffff"
                        }}
                        >
                            Login
                        </Typography>

                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{

                                "& .MuiInputBase-input": { color: "#ffffff" },  // Change input text color
                                "& .MuiInputLabel-root": { color: "#ffffff" },  // Change label color
                                "& .MuiOutlinedInput-root": {

                                    "& fieldset": { borderColor: "#ffffff" },  // Change border color
                                    "&:hover fieldset": { borderColor: "#00c6ff" },  // Border color on hover
                                    "&.Mui-focused fieldset": { borderColor: "#0072ff" },  // Border color on focus

                                },
                                marginBottom: "5px",

                            }}

                        />

                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{

                                "& .MuiInputBase-input": { color: "#ffffff" },  // Change input text color
                                "& .MuiInputLabel-root": { color: "#ffffff" },  // Change label color
                                "& .MuiOutlinedInput-root": {

                                    "& fieldset": { borderColor: "#ffffff" },  // Change border color
                                    "&:hover fieldset": { borderColor: "#00c6ff" },  // Border color on hover
                                    "&.Mui-focused fieldset": { borderColor: "#0072ff" },  // Border color on focus

                                },
                                marginBottom: "55px",
                            }}
                        />


                        {/* Login Button */}
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleLogin}
                            sx={{
                                background: "linear-gradient(to right, #00c6ff, #0072ff)",
                                color: "white",
                                fontWeight: "bold",
                                padding: "10px",
                                borderRadius: "20px",
                                "&:hover": {
                                    background: "linear-gradient(to right, #0072ff, #00c6ff)",
                                },
                            }}
                        >
                            LOGIN
                        </Button>

                    </Paper>
                </Box>


            </Container>

        </Box>

    );

}


export default Login;
