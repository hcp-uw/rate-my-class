import './AboutUs.css'
import NavBar from '../../Components/NavBar/NavBar.js'
import { useEffect, useState } from 'react';
import { getDevs } from '../../../Back-End/API/APIEndPoints';
import { CircularProgress } from '@mui/material';
import logo from '../../Components/WashingtonLogo.png';

function AboutUs() {
    const [aboutUsData, setDevs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        const data = await getDevs();
        setDevs(data)
        setLoading(false);
      }
      fetchData();
    })

    const loadCard = (data) => {
      return(
        <div>
        <img class="bgPic" src={logo} alt="Logo" id='UWLogo'/>
          <p class="aboutUsPersonHeader">{data.Name}</p>
          <p class="aboutUsPersonSubtext">
            <b>Fun-fact:</b> {data["Fun-Fact"]}<br></br>
            <b>Grade:</b> {data.Grade}<br></br>
            <b>Major:</b> {data.Major}<br></br>
            <b>Role:</b> {data.Role}
          </p>
        </div>
      )
    }

    const renderTeam = () => {
      if (loading) {
        return(
          <div class="flex-container">
            <CircularProgress size={100} style={{alignSelf: "center"}}/>
          </div>
        )
      } else {
        return(
          <div class="flex-container">
            {aboutUsData.map((obj) => loadCard(obj))}
          </div>
          )
        }
    }
  
    return (
        <div className="AboutUs">
          <NavBar/>
          {/* Minimize this div */}
          <div class="flex-container"> 
            <h1 id="meetOurTeam">Meet our Team</h1>
          </div>
          {renderTeam()}
        </div>
      )
  }
  
  export default AboutUs;