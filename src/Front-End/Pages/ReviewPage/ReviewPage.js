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

    var hashed = cyrb53((newName + newReview + star), 1);
  
    const rateClass = async (e) => {
      await writeData(star, newName, newReview, params.classID, hashed, isTest);
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
            <textarea
              name="textValue"
              rows="10"
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

// hashing function
// credit: https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
const cyrb53 = (str, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
  
export default ReviewPage;