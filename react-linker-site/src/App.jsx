// File imports
import './App.css';
import Linker from './frontend/Linker.jsx';
import BackgroundImage from './assets/background.svg';

// Library imports
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div
                className="app-background"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                }}
            >
                <div className="app-container">
                    {/* Define your routes here */}
                    <Routes>
                        <Route path="/" element={<Linker />} />
                        {/* Add more routes if needed */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
