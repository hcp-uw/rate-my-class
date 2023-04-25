import HomePage from './Front-End/Pages/HomePage/HomePage.js';
import AboutUs from './Front-End/Pages/AboutUs/AboutUs.js';
import CoursePage from './Front-End/Pages/CoursePage/CoursePage.js';
import RateCourse from './Front-End/Pages/ReviewPage/ReviewPage.js'
import SignIn from './Front-End/Pages/SignIn/SignInPage.js'
import { AuthProvider } from "./Auth";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useMemo} from 'react';
import Register from './Front-End/Pages/Register/Register.js';

// export const UserContext = React.createContext({
//   userName: '',
//   setUserName: () => {},
// });

function App() {
  // const [userName, setUserName] = useState("");
  // const value = useMemo(
  //   () => ({ userName, setUserName }), 
  //   [userName]
  // );

  return(
    <AuthProvider>
      {useMemo(() => (
        <Router>
          <Routes>

            <Route path="*" element={<HomePage/>}/>
            
            <Route path="/about" element={<AboutUs/>}/>

            <Route path="/class/:classID" element={<CoursePage/>}/> 

            <Route path="/rate/:classID" element={<RateCourse/>}/>

            <Route path="/signin" element={<SignIn/>}/>

            <Route path="/register" element={<Register/>}/>

          </Routes>
        </Router>
      ), [])}
    </AuthProvider>
  )
}


export default App;