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
            <p>We Understand the struggle <strong>EVERY SINGLE QUARTER. WE WANT CHANGE. WE WANT IT NOW.
              <br/>
              FOR COLLEGE STUDENTS! BY COLLEGE STUDENTS! AGAINST COLLEGE STUDENTS.</strong>
               We want UW students to see just how much money they're wasting and where!
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