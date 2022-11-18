import './SearchTest.css'
import NavBar from '../../Components/NavBar/NavBar.js'
import grade from '../../Components/143distribution.png'
import { Rating } from '@mui/material';
import {useParams} from 'react-router-dom'
import { getClassData } from '../../../Back-End/API/APIEndPoints';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';


function SearchTest() {
    const params = useParams()

    const [classData, setClass] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        const data = await getClassData(params.classID);
        setClass(data)
        setLoading(false);
      }
      fetchData();
    })

    
    if (loading) {
      return <CircularProgress size={100} style={{alignSelf: "center"}}/>
    } else {
      return ( 
        <div className="SearchTest">
          <NavBar/>
          <div className='Page'>
              <h1> {params.classID}</h1>
              <h2> Computer Programming II (credits: 5)</h2>
              {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
              <div className='RatingBar'>
                <h3> Average Rating: </h3>
                <Rating sx={{color: 'secondary.main'}} name="half-rating-read" 
                        defaultValue={4.5} precision={0.5} readOnly />
              </div>

                <h3> Description: </h3>
                <body> {classData.Description} </body>

              <div className='GradeDistribute'>
                  <h4> Grade Distribution: </h4>
                  <img src={grade} alt="Grade" id='143grade'/>
              </div>

              <div className='Reviews'>
                  <h4> Reviews: </h4>
                  <body> 
                    <b>Ben</b> 
                    <Rating sx={{color: 'secondary.main', left: 350}} name="half-rating-read" 
                            defaultValue={1.0} precision={1.0} readOnly />
                    <p>I lost one point on style for every single assignment. 
                        Horrible class. Don`t take with Stuart Reges!!</p>
                  </body>

                  <body> 
                    <b> Katie </b>
                    <Rating sx={{color: 'secondary.main', left: 350}} name="half-rating-read" 
                            defaultValue={5.0} precision={1.0} readOnly />
                    <p>Easy 4.0!! GPA booster!! I love this class!!</p>
                  </body>

                  <body>
                    <b> Anonymous </b>
                    <Rating sx={{color: 'secondary.main', left: 300}} name="half-rating-read" 
                            defaultValue={2.0} precision={1.0} readOnly />
                    <p>I had to take it for my major. it was meh.</p>
                  </body>
                </div>
              </div>
          </div>
      );
    }
  }
  
  export default SearchTest;

  // issues:
  // 1. how to make ratings right-align
  // 2. use flex container to manage individual ratings
  