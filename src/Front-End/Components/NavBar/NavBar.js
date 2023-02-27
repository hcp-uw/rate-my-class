import './NavBar.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function NavBar() {
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
    <div className="topnav">
      <div className="navtext">

        <ul className="navitem">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us!</a></li>
          <li><a href="/about">Feedback</a></li>
        </ul>

        <div className="search-box">
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


        <div className="login-signup">
          <a href="/about">Log in</a>
          <a href="/about"> <button style={{paddingRight: 10}}>Sign up</button></a>
        </div>

      </div>
    </div>
  );
}
  
export default NavBar;
