import { useState } from "react";
import Sidebar from "./Sidebar";
import { getAuth, signOut } from "firebase/auth";
import { CssBaseline, Box, Button } from "@mui/material";
import Dashboard from "./Dashboard.jsx";
import ProjectManager from "./ProjectManager.jsx";
import Navbar from "../frontend/Navbar.jsx";




const AdminPanel = () => {
    const [page, setPage] = useState("dashboard");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const auth = getAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Logged out successfully!");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (


        <Box sx={{     display: "flex",
            width: "100vw",
            minHeight: "100vh",
            background: "transparent !important",
            overflowY: "auto", // Enable scrolling for overflow content


        }}>
            <CssBaseline />

            {/* Navbar (with Sidebar Toggle) */}
            <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setPage={setPage} />

            {/* Main Content */}
            <Box sx={{ padding: 5, flexGrow: 1 ,    }}>
                {page === "dashboard" && <Dashboard />}
                {page === "manage-project" && <ProjectManager />}
            </Box>

            {/* Logout Button */}
            <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
                sx={{ position: "absolute", top: 100, right: 10 }}
            >
                Logout
            </Button>
        </Box>

    );
};

export default AdminPanel;
