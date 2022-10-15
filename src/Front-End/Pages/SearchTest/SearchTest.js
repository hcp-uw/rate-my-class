import './SearchTest.css'
import NavBar from '../../Components/NavBar/NavBar.js'

function SearchTest() {
    return (
      <div className="SearchTest">
        <NavBar/>
        <div className='Title'>
            <h1 style={{fontSize: '70px'}}> CSE 142</h1>
            <h2> Computer Programming I</h2>
            <h3> Description: </h3>
            <h4> Basic programming-in-the-small abilities and 
                concepts including procedural programming 
                (methods, parameters, return, values), basic 
                control structures (sequence, if/else, for loop,
                 while loop), file processing, arrays, and an 
                 introduction to defining objects. Intended for 
                 students without prior programming experience. </h4>
        </div>
      </div>
    );
  }
  
  export default SearchTest;