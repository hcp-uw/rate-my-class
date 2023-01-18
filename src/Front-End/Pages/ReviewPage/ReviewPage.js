import './ReviewPage.css'
import NavBar from '../../Components/NavBar/NavBar.js';
import { Rating } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { writeData } from '../../../Back-End/utils/utils.js'
import { JSHash, CONSTANTS } from "react-native-hash";


function ReviewPage() {
    // global for testing
    const isTest = 0;
  
    const params = useParams()
    const [star, setRating] = useState(0);
    const [newName, setName] = useState("");
    const [newReview, setReview] = useState("");
    // console.log("newName: " + newName);
    // console.log("newReview: " + newReview);
    // console.log("classID: " + params.classID);

    var generateHash = JSHash(newName+newReview, CONSTANTS.HashAlgorithms.sha256)
      .then((hash) => {return hash})
      .catch(e => console.log(e));
  
    const rateClass = async () => {
      const hash = await generateHash;
      // console.log(hash);
      await writeData(star, newName, newReview, params.classID, hash, isTest);
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