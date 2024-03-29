import './CoursePage.css'
import NavBar from '../../Components/NavBar/NavBar.js'
import { Rating } from '@mui/material';
import { useParams, useNavigate} from 'react-router-dom'
import { getClassData } from '../../../Back-End/API/APIEndPoints';
import { useEffect, useState, useRef } from 'react';
import { Pagination,CircularProgress } from '@mui/material';
function CoursePage() {
    const navigate = useNavigate();
    const params = useParams()

    const [classData, setClass] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentReviews, setCurrentReviews] = useState([]);
    const data = useRef(0);  // useRef is for preserving local value
    var lastPage = useRef(1);
    const ratingTotal = useRef(0);
    const ratingCount= useRef(0);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
        setClass([])
        data.current = await getClassData(params.classID);
        if (data.current) { 
          ratingTotal.current = 0
          const allReviews = Object.entries(data.current.Reviews);
          ratingCount.current = allReviews.length;
          for (let i = 0; i < allReviews.length; i++) {
            ratingTotal.current += Number(allReviews[i][1].Rating);
          }
          setClass(data.current)
          const reviewArr = []
          allReviews.forEach((review)=>{
            reviewArr.push(review[1])
          })
          setCurrentReviews(reviewArr.slice(0,2));
        }

        setLoading(false)
      }
      fetchData();

    }, [params])  // second parameter to stop re-render loop

    // @param review: the "Reviews" table data inside course
    const individualReview = (review) => {
      var currAnimation;
      if (currentPage > lastPage.current) {
        currAnimation = 'fadeInLeft 0.7s'
      } else if (currentPage < lastPage.current) {
        currAnimation = 'fadeInRight 0.7s'
      } else {
        currAnimation = 'fadeIn 0.7s'
      }
      return (
          <div key = {review.Hash} className='IndividualReview' style={{animation: currAnimation}} > 
            <div className='ReviewStars'>
              <b className='UserTitle'>{review.User}</b> 
              <Rating sx={{color: 'secondary.main'}} 
                        value={review.Rating} precision={1.0} readOnly />
            </div>
            <p className='ReviewText'>{review.ReviewText}</p>
          </div>
      )
    }

    const handleReviewChange = (event, value) => {
      const allReviews = Object.entries(classData.Reviews);
      const reviewArr = []
      setCurrentPage(value)
      allReviews.forEach((review)=>{
        reviewArr.push(review[1])
      })
      const index_start = (value-1) * 2
      const index_end = index_start + 1
      setCurrentReviews(reviewArr.slice(index_start,index_end+1));
      lastPage.current = currentPage

    };

    const renderReviews = () => {
      // array access

      const url = "/rate/" + params.classID;
      const allReviews = Object.entries(classData.Reviews);
      const reviewArr = []
      allReviews.forEach((review)=>{
        reviewArr.push(review[1])
      })
      return (
        
        <div className="Reviews">
            <p> Reviews <span id="reviewCount">({reviewArr.length})</span>
              <span id="RateClassButton" onClick={(e) => {navigate(url)}}>Rate this class</span>
            </p> 
            {currentReviews.map((obj) => individualReview(obj))}
            <Pagination id="pagination" count={Math.ceil((reviewArr.length/2))} 
              color="secondary" onChange={handleReviewChange} />
        </div>
      )
    }
    
    // class not found
    
    if (loading) {
      return (
        <div className='CoursePage'>
          <div className="center-container">
            <CircularProgress size={100} style={{alignSelf: "center"}}/>
          </div>
        </div>

      )
    
    // display class info
    } else if (classData.length === 0) {
      return (
        <div className="CoursePage">
          <NavBar/>
          <div className='Page'>
            <h1> "{params.classID}" doesn't exist </h1>
          </div>
        </div>
      )

    // class info is loading
    } else {
      // for some reason rendered twice, therefore divide by 2
      // console.log("total: " + ratingTotal.current);
      const averageRating = (ratingTotal.current)/(ratingCount.current) * 1.0;
      return (
        <div className="CoursePage">
          <NavBar/>
          <div className='Page'>
            <div className='Title'>
              <p><strong>{params.classID} </strong></p>
            </div>
            <div className='Description'>
            <p><strong>credits: {classData.Credit}</strong></p>
              <div className='RatingBar'>
              <p id='AvgRatingTxt'><strong> Average Rating: </strong></p>
                <Rating sx={{color: 'secondary.main'}} name="half-rating-read" 
                        defaultValue={averageRating} precision={0.5} readOnly />
              </div>
              <p><strong> Description </strong></p>
                {classData.Description}
            </div>

            {renderReviews()}
            </div>
        </div>
      );
    }
  }
  
  export default CoursePage;

  