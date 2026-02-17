import {useState, useEffect} from "react";
import {getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";
import {
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    MenuItem,
    Select,
    FormControl,
    InputLabel
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const ProjectManager = () => {
    const db = getFirestore();
    const [projects, setProjects] = useState([]);
    const [successMessage, setSuccessMessage] = useState(false);
    const [newProject, setNewProject] = useState({
        name: "",
        category: "",
        description: "",
        githubUrl: "",
        demoUrl: "",
        image: ""
    });

    const [editingProject, setEditingProject] = useState(null); // Stores the project being edited
    const [isEditing, setIsEditing] = useState(false); // Controls the edit modal

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectArray = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        setProjects(projectArray);
    };

    const addProject = async () => {

        console.log("New Project Data:", newProject); // Debugging Log
        // Ensure all fields are filled

        if (!newProject.name.trim() || !newProject.category.trim() || !newProject.description.trim() ||
            !newProject.image.trim() || !newProject.demoUrl.trim()) {
            console.error("❌ Missing required fields!");
            alert("Please fill in all fields before adding a project."); // Show an alert to the user
            return;
        }

        try {
            await addDoc(collection(db, "projects"), newProject);
            setNewProject({name: "", category: "", description: "", githubUrl: "", demoUrl: "", image: ""});
            setSuccessMessage(true); // Show success message
            fetchProjects(); // Refresh the list
        } catch (error) {
            console.error("🔥 Error adding project:", error);
        }
    };


    const deleteProject = async (id) => {
        await deleteDoc(doc(db, "projects", id));
        fetchProjects();
    };

    const startEditing = (project) => {
        setEditingProject(project);
        setIsEditing(true);
    };

    const saveEdits = async () => {
        if (!editingProject.name.trim() || !editingProject.description.trim() || !editingProject.category.trim()) return;

        const projectRef = doc(db, "projects", editingProject.id);
        await updateDoc(projectRef, editingProject);

        setIsEditing(false);
        setEditingProject(null);
        fetchProjects();
    };

    return (
        <Box
            sx={{
                backgroundColor: 'rgba(28, 28, 46, 0.0)',
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 3,
            }}
        >
            <Typography variant="h4"
                        sx={{
                            marginBottom: 2,
                            fontWeight: 'bold',
                            color: 'white',
                            padding: '20px'
                        }}>
                Manage Projects
            </Typography>

            {/* Input Fields for Adding New Projects */}
            {/* Input Fields for Adding New Projects */}
            <Box sx={{width: "100%", maxWidth: "600px"}}>
                <TextField
                    label="Project Name"
                    value={newProject.name || ""}
                    onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                    fullWidth
                    sx={{marginBottom: 1, input: {color: "white"}, label: {color: "white"}}}
                />

                <FormControl fullWidth sx={{marginBottom: 1}}>
                    <InputLabel sx={{color: "white"}}>Category</InputLabel>
                    <Select
                        value={newProject.category || ""}
                        onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                        sx={{color: "white", "& .MuiSelect-icon": {color: "white"}}}
                    >
                        <MenuItem value="Web Development">Web Development</MenuItem>
                        <MenuItem value="Game Development">Game Development</MenuItem>
                        <MenuItem value="Other Projects">Other Projects</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label="Description"
                    value={newProject.description || ""}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    fullWidth
                    multiline
                    sx={{marginBottom: 1, input: {color: "white"}, label: {color: "white"}}}
                />

                <TextField
                    label="GitHub URL"
                    value={newProject.githubUrl || ""}
                    onChange={(e) => setNewProject({...newProject, githubUrl: e.target.value})}
                    fullWidth
                    sx={{marginBottom: 1, input: {color: "white"}, label: {color: "white"}}}
                />

                <TextField
                    label="Demo URL"
                    value={newProject.demoUrl || ""}
                    onChange={(e) => setNewProject({...newProject, demoUrl: e.target.value})}
                    fullWidth
                    sx={{marginBottom: 1, input: {color: "white"}, label: {color: "white"}}}
                />


                <TextField
                    label="Image URL"
                    value={newProject.image || ""}
                    onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                    fullWidth
                    sx={{marginBottom: 1, input: {color: "white"}, label: {color: "white"}}}
                />

                <Button variant="contained" color="primary" onClick={addProject}
                        sx={{marginTop: 2, width: "100%", padding: "10px"}}>
                    Add Project
                </Button>
            </Box>

            <Box sx={{}}>
                <List sx={{paddingBottom: "150px"}}>
                    {projects.map((project) => (
                        <ListItem key={project.id} sx={{display: "flex", color: 'white', alignItems: "center", gap: 2}}>
                            <img src={project.image} alt={project.name} width="50" height="50"
                                 style={{borderRadius: "5px"}}/>
                            <ListItemText
                                primary={<Typography variant="h6" sx={{color: 'white'}}>{project.name}</Typography>}
                                secondary={<Typography
                                    sx={{color: "white"}}>{`${project.category} - ${project.description}`}</Typography>}/>
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                                   style={{textDecoration: "none", color: "#c6ff00"}}>
                                    Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                   style={{textDecoration: "none", color: "#80ceff", marginLeft: "10px"}}>
                                    GitHub
                                </a>
                            )}

                            <IconButton onClick={() => startEditing(project)} sx={{color: "orange"}}>
                                <EditIcon/>
                            </IconButton>
                            <IconButton onClick={() => deleteProject(project.id)} sx={{color: "red"}}>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItem>
                    ))}
                </List>

            </Box>


            {/* Edit Dialog */}
            <Dialog open={isEditing} onClose={() => setIsEditing(false)}
                    sx={{
                        "& .MuiDialog-paper": {
                            backgroundColor: "rgba(28, 28, 46, 0.9)", // Dark background
                            color: "white", // Default text color
                        }
                    }}
            >
                <DialogTitle sx={{color: "white"}}>Edit Project</DialogTitle>

                <DialogContent sx={{color: "white"}}> <TextField label="Project Name" value={editingProject?.name || ""}
                                                                 onChange={(e) => setEditingProject({
                                                                     ...editingProject,
                                                                     name: e.target.value
                                                                 })} fullWidth
                                                                 sx={{
                                                                     marginBottom: 1,
                                                                     input: {color: "white"},
                                                                     label: {color: "white"},
                                                                     "& .MuiOutlinedInput-root": {
                                                                         "& fieldset": {borderColor: "white"}, // Border color
                                                                         "&:hover fieldset": {borderColor: "#80ceff"}, // Hover effect
                                                                     }
                                                                 }}
                />

                    <FormControl fullWidth sx={{marginBottom: 1}}>
                        <InputLabel sx={{color: "white"}}>Category</InputLabel>
                        <Select
                            value={editingProject?.category || ""}
                            onChange={(e) => setEditingProject({...editingProject, category: e.target.value})}
                            sx={{
                                color: "white",
                                "& .MuiSelect-icon": {color: "white"},
                                "& fieldset": {borderColor: "white"}
                            }}
                        >
                            <MenuItem value="Web Development">Web Development</MenuItem>
                            <MenuItem value="Game Development">Game Development</MenuItem>
                            <MenuItem value="Other Projects">Other Projects</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField label="Description"
                               value={editingProject?.description || ""}
                               onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                               fullWidth multiline
                               sx={{
                                   marginBottom: 1,
                                   input: {color: "white"}, // 🔥 Ensures input text is white
                                   label: {color: "white"}, // 🔥 Ensures label text is white
                                   "& .MuiOutlinedInput-root": {
                                       "& fieldset": {borderColor: "white"}, // Border color white
                                       "&:hover fieldset": {borderColor: "#80ceff"}, // Hover effect
                                   },
                                   "& .MuiInputBase-root": {color: "white"}, // 🔥 Ensures multi-line text is white
                                   "& textarea": {color: "white"} // 🔥 Ensures multi-line input text is white
                               }}
                    />
                    <TextField label="Demo URL"
                               value={editingProject?.demoUrl || ""}
                               onChange={(e) => setEditingProject({...editingProject, demoUrl: e.target.value})}
                               fullWidth
                               sx={{
                                   marginBottom: 1,
                                   input: {color: "white"},
                                   label: {color: "white"},
                                   "& .MuiOutlinedInput-root": {
                                       "& fieldset": {borderColor: "white"},
                                       "&:hover fieldset": {borderColor: "#80ceff"},
                                   },
                                   "& .MuiInputBase-root": {color: "white"},
                                   "& textarea": {color: "white"}
                               }}
                    />

                    <TextField label="GitHub URL"
                               value={editingProject?.githubUrl || ""}
                               onChange={(e) => setEditingProject({...editingProject, githubUrl: e.target.value})}
                               fullWidth
                               sx={{
                                   marginBottom: 1,
                                   input: {color: "white"}, // 🔥 Ensures input text is white
                                   label: {color: "white"}, // 🔥 Ensures label text is white
                                   "& .MuiOutlinedInput-root": {
                                       "& fieldset": {borderColor: "white"}, // Border color white
                                       "&:hover fieldset": {borderColor: "#80ceff"}, // Hover effect
                                   },
                                   "& .MuiInputBase-root": {color: "white"}, // 🔥 Ensures multi-line text is white
                                   "& textarea": {color: "white"} // 🔥 Ensures multi-line input text is white
                               }}
                    />
                    <TextField label="Image URL" value={editingProject?.image || ""}
                               onChange={(e) => setEditingProject({...editingProject, image: e.target.value})}
                               fullWidth
                               sx={{
                                   marginBottom: 1,
                                   input: {color: "white"}, // 🔥 Ensures input text is white
                                   label: {color: "white"}, // 🔥 Ensures label text is white
                                   "& .MuiOutlinedInput-root": {
                                       "& fieldset": {borderColor: "white"}, // Border color white
                                       "&:hover fieldset": {borderColor: "#80ceff"}, // Hover effect
                                   },
                                   "& .MuiInputBase-root": {color: "white"}, // 🔥 Ensures multi-line text is white
                                   "& textarea": {color: "white"} // 🔥 Ensures multi-line input text is white
                               }}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsEditing(false)} sx={{color: '#35b2dc'}}>Cancel</Button>
                    <Button
                        onClick={() => {
                            if (editingProject) {
                                saveEdits(); // Call save function only if `editingProject` exists
                            }
                        }}
                        variant="contained"
                        sx={{backgroundColor: "#1976D2", color: "white"}}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={successMessage}
                autoHideDuration={3000}
                onClose={() => setSuccessMessage(false)}
                anchorOrigin={{vertical: "top", horizontal: "right"}}
            >
                <MuiAlert onClose={() => setSuccessMessage(false)} severity="success" variant="filled">
                    Project added successfully!
                </MuiAlert>
            </Snackbar>

        </Box>
    );
};

export default ProjectManager;
