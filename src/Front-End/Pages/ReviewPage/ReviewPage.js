import './ReviewPage.css'
import NavBar from '../../Components/NavBar/NavBar.js';
import { Rating } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { writeData } from '../../../Back-End/utils/utils.js'
import { Alert } from '@mui/material';


function ReviewPage() {
    // global for testing
    const isTest = 1;
    const params = useParams()
    const [star, setRating] = useState(0);
    const [newName, setName] = useState("");
    const [newReview, setReview] = useState("");
    const [show, setShow] = useState(false);
    // console.log("newName: " + newName);
    // console.log("newReview: " + newReview);
    // console.log("classID: " + params.classID);

    const rateClass = async (e) => {
      await writeData(star, newName, newReview, params.classID, isTest);
      e.preventDefault();
      setShow(true)
      setName(" ");
      setReview(" ");
      setRating(0);
    }

    const header = "Leave a review for " + params.classID;
    if (show) {
      return (
        <div className="ReviewPage">
          <div className='Page'>
          <Alert variant="filled" severity="success">
        Successfully Submitted Review!
        </Alert>
          </div>
    </div>
    )
    } else {

    
    return (
      <div className="ReviewPage">
        <NavBar/>
        <div className='Page'>
          <form onSubmit={rateClass}>
            <h1>{header}</h1>
            <h3>Username:</h3>
              <input
                type="text"
                onChange={e => setName(e.target.value)}
                placeholder="your name..."
                value={newName}
              />

            <h3>
              Rating: 
              <Rating sx={{color: 'secondary.main', left: 30}}
                  name="simple-controlled"
                  value={star}
                  onChange={(event, newStar) => {
                      setRating(newStar);
                  }}
              />
            </h3>

          <h3>Write your review here:</h3>
            <input
              type="text"
              onChange={e => setReview(e.target.value)}
              placeholder="type your review here..."
              value={newReview}
            />
            <p></p>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    ); }
  }
  
  export default ReviewPage;