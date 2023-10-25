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
        <div key =  {data.Name} className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="profile-pic" src={data.Image} alt="Logo"/>
            </div>
            <div className="flip-card-back">
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
          <div className="flex-container">
            <CircularProgress size={100} style={{alignSelf: "center"}}/>
          </div>
        )
      } else {
        return(
          <div className="flex-container">
            {aboutUsData.map((obj) => loadCard(obj))}
          </div>
          )
        }
    }
  
    return (
        <div className="AboutUs">
          <NavBar/>
          {/* Minimize this div */}
          <div className="AboutUsText">
            <h1>Our Mission</h1>
            <p>We are a group of students from various majors just working together on a project to 
              gain experience, construct a useful application, and to have fun!
            </p>
          </div>
          <div className="flex-container"> 
            <h1 id="meetOurTeam">Meet our Team</h1>
          </div>
          {renderTeam()}
          

        </div>
      )
  }
  
  export default AboutUs;