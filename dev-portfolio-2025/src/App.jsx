//Lib imports

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"


//Pages import
import './App.css'
import Home from './frontend/components/Home/Home.jsx';
import About from './frontend/components/About/About.jsx';

import NavBar from './frontend/Navbar.jsx'

import BackgroundImage from "./assets/background.svg"
import Footer from "./frontend/Footer.jsx";

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
                  <NavBar/>

                  <Routes>

                      <Route path="/" element={<Home/>}/>
                      <Route path="/about" element={<About/>}/>


                  </Routes>
                  <Footer/>
              </div>


          </div>

      </Router>

  )
}

export default App
