import  { useState, useEffect } from 'react';
import { db } from '../../../backend/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { Grid, Card, CardContent, CardActions, CardMedia, Typography, Button, Box } from '@mui/material';

const ProjectsSection = () => {
    const [webDevProjects, setWebDevProjects] = useState([]);
    const [gameDevProjects, setGameDevProjects] = useState([]);
    const [otherProjects, setOtherProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'projects'));
                const projectsList = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                // Categorize projects
                const webDev = projectsList.filter(project => project.category === 'Web Development');
                const gameDev = projectsList.filter(project => project.category === 'Game Development');
                const other = projectsList.filter(project => project.category !== 'Web Development' && project.category !== 'Game Development');

                setWebDevProjects(webDev);
                setGameDevProjects(gameDev);
                setOtherProjects(other);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError('Failed to fetch projects. ' + err.message);
            }
        };

        fetchProjects();
    }, []);

    if (error) {
        return <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>Error loading projects: {error}</Typography>;
    }

    const renderProjectCards = (projects) => (
        <Grid container spacing={4} justifyContent="center">
            {projects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                    <Card sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                        background: "rgba(0, 0, 0, 0.7)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "15px",
                        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.3)",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0 4px 20px rgba(122, 199, 251, 0.5)",
                        },
                    }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={project.image}
                            alt={project.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#7ac7fb" }}>
                                {project.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#c1e4ff" }}>
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'space-around', p: 2 }}>
                            <Button size="small" color="primary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </Button>
                            <Button size="small" color="primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );

    return (
        <Box sx={{
            flexGrow: 1,
            py: 5,
            marginTop: "50px",
            padding: "80px",
            paddingBottom: "20px",
            overflowY: "auto",
            height: 'calc(100vh - 100px)',
        }}>
            <Typography variant="h4" gutterBottom component="div" sx={{
                textAlign: 'center',
                fontWeight: "bold",
                mb: 3,
                padding: "10px 10px",
                color: "#7ac7fb"
            }}>
                My Recent Works
            </Typography>

            {/* Web Development Projects */}
            {webDevProjects.length > 0 && (
                <>
                    <Typography variant="h5" sx={{ fontWeight:'bold', textAlign: 'center', mt: 4, color: "#7ac7fb",marginBottom: "10px" }}>
                        Web Development Projects
                    </Typography>
                    {renderProjectCards(webDevProjects)}
                </>
            )}

            {/* Game Development Projects */}
            {gameDevProjects.length > 0 && (
                <>
                    <Typography variant="h5" sx={{ fontWeight:'bold', textAlign: 'center', mt: 4, color: "#7ac7fb",marginBottom: "10px" }}>
                        Game Development Projects
                    </Typography>
                    {renderProjectCards(gameDevProjects)}
                </>
            )}

            {/* Other Projects */}
            {otherProjects.length > 0 && (
                <>
                    <Typography variant="h5" sx={{ fontWeight:'bold', textAlign: 'center', mt: 4, color: "#7ac7fb",marginBottom: "10px" }}>
                        Other Projects
                    </Typography>
                    {renderProjectCards(otherProjects)}
                </>
            )}
        </Box>
    );
};

export default ProjectsSection;
