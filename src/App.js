import HomePage from './Front-End/Pages/HomePage/HomePage.js';
import AboutUs from './Front-End/Pages/AboutUs/AboutUs.js';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return(
    <Router>
      <Routes>

        <Route path="*" element={<HomePage/>}/>
        
        <Route path="/about"element={<AboutUs/>}/>

      </Routes>
    </Router>
  )
}


export default App;