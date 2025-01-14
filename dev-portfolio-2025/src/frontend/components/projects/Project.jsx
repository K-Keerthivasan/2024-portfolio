import React, { useState, useEffect } from 'react';
import { db } from './../../../backend/firebase-config.js';
import { collection, getDocs } from 'firebase/firestore';
import { Grid, Card, CardContent, CardActions, CardMedia, Typography, Button, Box } from '@mui/material';

const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'projects'));
                const projectsList = snapshot.docs.map(doc => {
                    console.log('Project Data:', doc.data()); // Log fetched data
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                });
                setProjects(projectsList);
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

    return (
        <Box sx={{ flexGrow: 1, py: 5, minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center', color: 'text.primary', mb: 4 }}>
                My Recent Works
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={project.image}
                                alt={project.name}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
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
        </Box>
    );
}

export default ProjectsSection;
