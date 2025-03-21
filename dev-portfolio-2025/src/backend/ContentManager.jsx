import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { TextField, Button, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ContentManager = () => {
    const db = getFirestore();
    const [content, setContent] = useState([]); // Fix: Initialized as an empty array
    const [newItem, setNewItem] = useState("");

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        const querySnapshot = await getDocs(collection(db, "content"));
        const contentArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setContent(contentArray);
    };

    const addContent = async () => {
        if (newItem.trim() === "") return;
        await addDoc(collection(db, "content"), { text: newItem });
        setNewItem("");
        fetchContent();
    };

    const deleteContent = async (id) => {
        await deleteDoc(doc(db, "content", id));
        fetchContent();
    };

    return (
        <div>
            <h2>Manage Content</h2>
            <TextField
                label="New Item"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={addContent} style={{ marginTop: 10 }}>
                Add Item
            </Button>
            <List>
                {content.map((item) => ( // No more error since content is now an array
                    <ListItem key={item.id}>
                        <ListItemText primary={item.text} />
                        <IconButton onClick={() => deleteContent(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default ContentManager;
