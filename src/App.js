import HomePage from './Front-End/Pages/HomePage/HomePage.js';
import AboutUs from './Front-End/Pages/AboutUs/AboutUs.js';
import CoursePage from './Front-End/Pages/CoursePage/CoursePage.js';
import RateCourse from './Front-End/Pages/ReviewPage/ReviewPage.js'
import SignIn from './Front-End/Pages/SignIn/SignInPage.js'

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return(
    <Router>
      <Routes>

        <Route path="*" element={<HomePage/>}/>
        
        <Route path="/about" element={<AboutUs/>}/>

        <Route path="/class/:classID" element={<CoursePage/>}/> 

        <Route path="/rate/:classID" element={<RateCourse/>}/>

        <Route path="/signin" element={<SignIn/>}/>

      </Routes>
    </Router>
  )
}


export default App;