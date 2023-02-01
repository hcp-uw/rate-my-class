import logo from '../../Components/WashingtonLogo.png'
import './HomePage.css'
import NavBar from '../../Components/NavBar/NavBar.js'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();


    const searchHandler = (e) => {
      e.preventDefault()
      
      if (query.trim()) {
        var newQuery = "/class/" + query.toUpperCase();
        navigate(newQuery);
      }
    }

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
          <form action="/" method="get" id='SearchBar' onSubmit={searchHandler}>
            <input
              type="text"
              onChange={e => setQuery(e.target.value)}
              id="header-search"
              placeholder="Search for classes"
              name="s" 
            />
            <button type="submit">Search</button>
          </form>
        </div>
        
        <div class="popularPages-container">
          <div onClick={routeChange1}>CSE142</div>
          {/* document.getElementById("stuff").textContent */}
          <div onClick={routeChange2}>CSE143</div>
          <div onClick={routeChange3}>ARCH150</div>
        </div>
        
      </div>
    );
  }
  
  export default HomePage;