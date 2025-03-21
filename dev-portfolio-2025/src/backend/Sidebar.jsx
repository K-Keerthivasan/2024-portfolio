import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";

const drawerWidth = 240;

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, setPage }) => {
    return (
        <Drawer
            variant="temporary"
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
            }}
        >
            <Toolbar />
            <List>
                <ListItem component="button" onClick={() => { setPage("dashboard"); setIsSidebarOpen(false); }}>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem component="button" onClick={() => { setPage("manage-content"); setIsSidebarOpen(false); }}>
                    <ListItemText primary="Content Manager" />
                </ListItem>
                <ListItem component="button" onClick={() => { setPage("manage-project"); setIsSidebarOpen(false); }}>
                    <ListItemText primary="Project Manager" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
