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
    return (
      <div className="HomePage">
        <NavBar/>
        <div className='Center'>
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
      </div>
    );
  }
  
  export default HomePage;