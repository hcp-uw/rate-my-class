import './AboutUs.css'
import NavBar from '../../Components/NavBar/NavBar.js'
// import ben from '../AboutUs/AboutUsImages/benben.jpg'
// import images from '../AboutUs/AboutUsImages'

function AboutUs() {
    return (
      <div className="AboutUs">
        <NavBar/>
        {/* Minimize this div */}
        <div class="flex-container"> 
          <h1 id="meetOurTeam">Meet our Team</h1>
          <div>
            <p class="aboutUsPersonHeader">Ben</p>
            <p class="aboutUsPersonSubtext">
              <b>Fun-fact:</b> He likes banana peppers <br></br>
              <b>Grade:</b> Junior <br></br>
              <b>Major:</b>  Economics<br></br>
              <b>Role:</b> Front-End/Back-end
            </p>
            {/* <img src={ben} alt="ben"
            class = "flex-picture">
            </img> */}
          </div>

          <div> 
            <p class="aboutUsPersonHeader">Katie</p>
            <p class="aboutUsPersonSubtext">
            </p>
          </div>

          <div>
            <p class="aboutUsPersonHeader">Tan</p>
            <p class="aboutUsPersonSubtext">
              <b>Fun-fact:</b> <br></br>
              <b>Grade:</b> Junior <br></br>
              <b>Major:</b> INFO (hopefully)<br></br>
              <b>Role:</b> Back-end
            </p>
          </div>

          <div>
            <p class="aboutUsPersonHeader">Gary</p>
            <p class="aboutUsPersonSubtext">
              <b>Fun-fact:</b> Drink orange juice and win the prize <br></br>
              <b>Grade:</b> Sophomore <br></br>
              <b>Major:</b> ACMS <br></br>
              <b>Role:</b> Back-end
            </p>
          </div>

          <div>
            <p class="aboutUsPersonHeader">Cypress</p>
            <p class="aboutUsPersonSubtext">
              <b>Fun-fact:</b> I once won a TV from lottery <br></br>
              <b>Grade:</b> Junior <br></br>
              <b>Major:</b>  CS<br></br>
              <b>Role:</b> Back-end
            </p>
          </div>

          <div>
            <p class="aboutUsPersonHeader">Leonardo</p>
            <p class="aboutUsPersonSubtext">
              <b>Fun-fact:</b> I can kind of juggle <br></br>
              <b>Grade:</b> Sophomore <br></br>
              <b>Major:</b>  Mathematics <br></br>
              <b>Role:</b> Front-End
            </p>
          </div>
        </div>


      </div>
    );
  }
  
  export default AboutUs;