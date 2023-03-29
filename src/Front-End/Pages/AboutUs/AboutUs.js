import './AboutUs.css'
import NavBar from '../../Components/NavBar/NavBar.js'
import { useEffect, useState } from 'react';
import { getDevs } from '../../../Back-End/API/APIEndPoints';
import { CircularProgress } from '@mui/material';

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
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img class="profile-pic" src={data.Image} alt="Logo"/>
            </div>
            <div class="flip-card-back">
              <h1>{data.Name}</h1>
              <p>Fun-fact: {data.FunFact} </p>
              <p>Grade: {data.Grade} </p>
              <p>Major: {data.Major} </p>
              <p>Role: {data.Role}</p>
            </div>
          </div>
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