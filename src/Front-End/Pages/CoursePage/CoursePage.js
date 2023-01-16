import './CoursePage.css'
import NavBar from '../../Components/NavBar/NavBar.js'
import grade from '../../Components/143distribution.png'
import { Rating } from '@mui/material';
import { useParams } from 'react-router-dom'
import { getClassData } from '../../../Back-End/API/APIEndPoints';
import { useEffect, useState, useRef } from 'react';
import { CircularProgress } from '@mui/material';


function CoursePage() {
    const params = useParams()

    const [classData, setClass] = useState([]);
    const [loading, setLoading] = useState(true);
    const data = useRef(0);  // useRef is for preserving local value

    useEffect(() => {
      const fetchData = async () => {
        data.current = await getClassData(params.classID);
        setClass(data.current)
        setLoading(false);
      }
      fetchData();
    })

    // @param review: the "Reviews" table data inside course
    const individualReview = (review) => {
      var nameLen = 60 - review.User.length;
      var alignment = nameLen + "%";

      return (
        <div> 
          <b>{review.User}</b> 
          <Rating sx={{color: 'secondary.main', left: alignment}} name="half-rating-read" 
                defaultValue={review.Rating} precision={1.0} readOnly />
          <p>{review.ReviewText}</p>
        </div>
      )
    }

    const renderReviews = () => {
      // array access
      const allReviews = Object.entries(classData.Reviews);
      const reviewArr = []
      allReviews.forEach((review)=>{
        reviewArr.push(review[1])
      })

      return (
        <div className="Reviews">
            <h4> Reviews: </h4>
            {reviewArr.map((obj) => individualReview(obj))}
        </div>
      )
    }
    
    // class not found
    if (classData == null) {
      return (
        <div className="SearchTest">
          <NavBar/>
          <div className='Page'>
            <h1> "{params.classID}" doesn't exist </h1>
          </div>
        </div>
      )

    // class info is loading
    } else if (loading) {
      return (
        <div className="center-container">
          <CircularProgress size={100} style={{alignSelf: "center"}}/>
        </div>
      )
    
    // display class info
    } else {
      const url = "/rate/" + params.classID;
      return (
        <div className="SearchTest">
          <NavBar/>
          <div className='Page'>
            <header>
              <h1> {params.classID} </h1>

              <span>
                <a href={url}>Rate this class</a>
              </span>
            </header>

              <h2> {classData.Name} (credits: {classData.Credit})</h2>
              <div className='RatingBar'>
                <h3> Average Rating: </h3>
                <Rating sx={{color: 'secondary.main'}} name="half-rating-read" 
                        defaultValue={classData.Rating} precision={0.5} readOnly />
              </div>

                <h3> Description: </h3>
                {classData.Description}

              <div className='GradeDistribute'>
                  <h4> Grade Distribution: </h4>
                  <img src={grade} alt="Grade" id='143grade'/>
              </div>
              {renderReviews()}
              </div>
          </div>
      );
    }
  }
  
  export default CoursePage;

  