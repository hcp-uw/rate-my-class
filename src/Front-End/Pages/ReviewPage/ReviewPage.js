import './ReviewPage.css'
import NavBar from '../../Components/NavBar/NavBar.js';
import { Rating } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { writeData } from '../../../Back-End/utils/utils.js'

function ReviewPage() {
    // global for testing
    const isTest = 1;
  
    const params = useParams()
    const [star, setRating] = useState(0);
    const [newName, setName] = useState("");
    const [newReview, setReview] = useState("");
    // console.log("newName: " + newName);
    // console.log("newReview: " + newReview);
    // console.log("classID: " + params.classID);

    const rateClass = async () => {
      await writeData(star, newName, newReview, params.classID, isTest);
    }
    
    const header = "Leave a review for " + params.classID;
    return (
      <div className="ReviewPage">
        <NavBar/>
        <div className='Page'>
            <h1>{header}</h1>
            <h3>Username:</h3>
              <input
                type="text"
                onChange={e => setName(e.target.value)}
                placeholder="your name..."
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
            />
            <p></p>
            <button onClick={rateClass}>Submit</button>
        </div>
      </div>
    );
  }
  
  export default ReviewPage;