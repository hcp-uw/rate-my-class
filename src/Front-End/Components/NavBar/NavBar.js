import './NavBar.css'


function NavBar() {
    return (
      <div className="topnav">
        <a href="/">Home</a>
        {/* <a href="SearchClasses">Search Classes</a>
        <a href="SeachDepartment">Search Department</a> */}
        <a href="/about">About Us!</a>
        <a href="/test">Test</a>
      </div>
    );
  }
  
  export default NavBar;