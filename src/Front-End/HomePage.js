import logo from './Components/WashingtonLogo.png'
import './CSS/HomePage.css'
import NavBar from './NavBar'

function HomePage() {
    return (
      <div className="HomePage">
        <NavBar/>
        <div className='Center'>
          <img src={logo} alt="Logo" id='UWLogo'/>
          <form action="/" method="get" id='SearchBar'>
            <input
              type="text"
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