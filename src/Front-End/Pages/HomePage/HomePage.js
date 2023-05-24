import logo from '../../Components/WashingtonLogo.png'
import './HomePage.css'
import NavBar from '../../Components/NavBar/NavBar.js'
import { useNavigate } from 'react-router-dom'

import { get3Classes } from '../../../Back-End/API/APIEndPoints';
import { useEffect, useState } from 'react';

// INVARIANTS:
// class folder here = firebase class folder (if that isn't automatic alr)
function HomePage() {
    const navigate = useNavigate();

    const routeChange = (name) =>{
      let path = "/class/" + name;
      navigate(path);
    }

    const [classesData, setClasses] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await get3Classes();
        setClasses(data)
      }
      fetchData();
    })

    const loadClasses = (data) => {
      return(
        <div className="popularPages-container" onClick={() => routeChange(data.Name)}>
          {data.Name}
        </div>
      )
    }

    const renderCards = () => {
      return(
          classesData.map((obj) => loadClasses(obj))
        )
    }

    return (
      <div className="HomePage">
        <NavBar/>
        <div className='center-search'>
          <img src={logo} alt="Logo" id='UWLogo'/>
        </div>
        <div className="break"></div>
        <h1 id="popularClassesTitle">Popular Classes!</h1>
        <div className="popularPages-container">
          {renderCards()}
        </div>
      </div>
    );
  }
  
  export default HomePage;
