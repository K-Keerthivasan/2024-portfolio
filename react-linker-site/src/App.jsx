// File imports
import './App.css'
import Linker from "./frontend/Linker.jsx";
import BackgroundImage from "./assets/background.svg"

//Library imports
import {
    BrowserRouter as Router,
    Route,
    Routes,
 } from "react-router-dom";



function App() {

  return (

      <div
          className="app-background"
            style={{
                backgroundImage: `url(${BackgroundImage})`,
            }}
      >
          <div className="app-container">
              <Linker/>
          </div>
      </div>

  )
}

export default App
