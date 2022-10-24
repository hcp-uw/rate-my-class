import './AboutUs.css'
import NavBar from '../../Components/NavBar/NavBar.js'
import ben from '../AboutUs/AboutUsImages/benben.jpg'
// import images from '../AboutUs/AboutUsImages'

function AboutUs() {
    return (
      <div className="AboutUs">
        <NavBar/>
        <div className='Center'>
          <h1>Meet our Team</h1>
        </div>

        <div class="flex-container">
          <div>
            <h3>Ben 10</h3>
            <p class="aboutUsPersonSubtext">
              Junior <br></br>
              He likes banana peppers <br></br>
              To be changed with database
            </p>
            <p>He likes banana peppers</p>
            <img src={ben} alt="ben"
            class = "ben">
            </img>
          </div>

          <div> 
            <h3>Katie Shi</h3>
            <p>Bottom Text</p>
          </div>

          <div>
            <h3>Tan</h3>
            <p>Bottom Text</p>
          </div>

          <div>
            <h3>Gary</h3>
            <p>Bottom Text</p>
          </div>

          <div>
            <h3>Cypress</h3>
            <p>Bottom Text</p>
          </div>

          <div>
            <h3>Leonardo</h3>
            <p>Bottom Text</p>
          </div>

       

          <div>
            <h3>John Doe</h3>
            <p>Bottom Text</p>
          </div>
        </div>


      </div>
    );
  }
  
  export default AboutUs;