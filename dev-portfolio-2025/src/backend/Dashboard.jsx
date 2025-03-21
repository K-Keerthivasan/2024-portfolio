import {Box} from "@mui/material";


const Dashboard=()=>{


    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh", // Ensures full height
            backgroundColor: 'rgba(28, 28, 46, 0.2)',
            background: 'transparent',
            fontSize: "2rem",        }}>
This is the dashboard
        </Box>
    );
}

export default Dashboard;
