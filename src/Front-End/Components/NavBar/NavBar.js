import './NavBar.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from '@mui/material';
import Sidebar from '../SideBar/SideBar';
function NavBar() {
  const [query, setQuery] = useState("");
  const [width, setWidth] = useState(window.innerWidth)
  const [showSide, setShowSide] = useState(false);
  const navigate = useNavigate();

  const showSideBar = () => {
    setShowSide(!showSide);
  };

  const searchHandler = (e) => {
    e.preventDefault()
    
    if (query.trim()) {
      var newQuery = "/class/" + query.toUpperCase();
      navigate(newQuery);
    }
  }

  useEffect(() => {
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth)
    };
    window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
    };
  })

  const isMobile = width <= 1200;

  if (isMobile) {
    return(
      <div>
        <div className="topnav">
          
          <div className="navtext">
          <IconButton
            color="primary"
            aria-label="menu"
            className="header-menu"
            onClick={showSideBar}
            >
              <MenuIcon sx={{ color: "white", fontSize: 40 }}/>
          </IconButton>
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
          </div>
        </div>
        <Sidebar
          show={showSide}
          />
      </div>
    )
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
