// Lib imports
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

// Admin Panel Imports
import AdminPanel from "./backend/AdminPanel";
import Login from "./backend/Login";

// Pages import
import './App.css';
import Home from './frontend/components/Home/Home.jsx';
import About from './frontend/components/About/About.jsx';
import NavBar from './frontend/Navbar.jsx';
import BackgroundImage from "./assets/background.svg";
import Footer from "./frontend/Footer.jsx";
import Resume from "./frontend/components/Resume.jsx";
import ProjectsSection from './frontend/components/Projects/Project.jsx';
import UnderConstruction from './frontend/components/About/UnderConstruction.jsx';

// Protected Route Component
function ProtectedRoute({ children }) {
    const auth = getAuth();
    const [user] = useAuthState(auth);
    return user && user.email === "kkvasan99@gmail.com" ? children : <Login />;
}

function App() {
    return (
        <Router>

            <div
                className="app-background"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                }}
            >

                <NavBar />
                {/* Admin Routes */}
                <Routes>
                    <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
                    <Route path="/login" element={<Login />} />
                </Routes>


                {/* Frontend Layout */}

                <div className="app-container">

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<ProjectsSection />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/blogs" element={<UnderConstruction />} />
                    </Routes>

                </div>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
