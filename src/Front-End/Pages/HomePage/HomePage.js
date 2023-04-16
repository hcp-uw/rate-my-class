import logo from '../../Components/WashingtonLogo.png'
import './HomePage.css'
import NavBar from '../../Components/NavBar/NavBar.js'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();

    // TODO: allow routechange to work with element 
    // values/review basic DOM
    const routeChange1 = () =>{
      let path = "/class/CSE142";
      navigate(path);
    }
    const routeChange2 = () =>{
      let path = "/class/CSE143";
      navigate(path);
    }
    const routeChange3 = () =>{
      let path = "/class/ARCH150";
      navigate(path);
    }

    return (
      <div className="HomePage">
        <NavBar/>
        <div className='center-search'>
          <img src={logo} alt="Logo" id='UWLogo'/>
        </div>
        
        <div className="popularPages-container">
          <div onClick={routeChange1}>CSE142</div>
          {/* document.getElementById("stuff").textContent */}
          <div onClick={routeChange2}>CSE143</div>
          <div onClick={routeChange3}>ARCH150</div>
        </div>
      </div>
    );
  }
  
  export default HomePage;
