import './AboutUs.css'
import NavBar from '../../Components/NavBar/NavBar.js'

function AboutUs() {
    return (
      <div className="AboutUs">
        <NavBar/>
        <div className='Center'>
          <h1>Meet our Team</h1>
        </div>

        <div class="flex-container">
          <div>
            <h3>Leonardo</h3>
            <p>Bottom Text</p>
            {/* <img src="src\Front-End\Pages\AboutUs\AboutUsImages\Leo_doggoProfilePic.JPG" 
              alt="Leonardo's Picture">
            </img> */}
          </div>
          <div> 
            <h3>Katie Shi</h3>
            <p>Bottom Text</p>
          </div>
          <div>
            <h3>John Doe</h3>
            <p>Bottom Text</p>
          </div>
          <div>
            <h3>John Doe </h3>
            <p>Bottom Text</p>
          </div>
          <div>
            <h3>John Doe</h3>
            <p>Bottom Text</p>
          </div>
          <div>
            <h3>John Doe</h3>
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