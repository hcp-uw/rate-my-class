import './ReviewPage.css'
import NavBar from '../../Components/NavBar/NavBar.js';
import { Rating } from '@mui/material';
import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { writeData } from '../../../Back-End/utils/utils.js'
import { Alert } from '@mui/material';
import { AuthContext } from '../../../Auth';
import { getAuth } from 'firebase/auth'

function ReviewPage() {
    // global for testing
    const isTest = 1;
    const { userName } = useContext(AuthContext);
    const params = useParams()
    const [star, setRating] = useState(0);
    const [newName, setName] = useState(userName);
    const [newReview, setReview] = useState("");
    const [show, setShow] = useState(false);
    const auth = getAuth(); //access the "authenticator"
    const user = auth.currentUser
    const navigation = useNavigate();
    
    var hashed = cyrb53((newName + newReview + star), 1);
  
    const rateClass = async (e) => {
      e.preventDefault();
      await writeData(star, user.displayName, newReview, params.classID, hashed, isTest);
      setShow(true)
      setReview(" ");
      setRating(0);
    }

    const renderName = () => {
      if (user) {
        return (
          <div>
            <h3>As <u>{user.displayName}</u></h3>
          </div>)
        ;
      }
  
      return (
        <div>
          <h3>Username:</h3>
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            placeholder="your name..."
            value={newName}
          />
        </div>
      );
    }

    const header = "Leave a review for " + params.classID;
    if (show) {
      const redirectURL = '/class/' + params.classID;
      return (
        <div className="ReviewPage">
          <NavBar/>
          <div className='Page'>
            <Alert variant="filled" severity="success">
              Successfully Submitted Review!
            </Alert>
            <div className='Redirect'>
              <button onClick={(e) => {navigation(redirectURL)}}>Return to {params.classID}</button>
            </div>
          </div>
      </div>
      )
    }

    if (user == null) {
      return(
      <div className="ReviewPage">
        <NavBar/>
        <div className='Page'>
          <h1> Please Sign in to leave a review!</h1>
          <div className="button-div">
            <button onClick={(e) => 
              {navigation('/signin', { state: { className: params.classID } })}}>Sign In</button>
          </div>
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
            {renderName(userName)}
            {/* <h3>Username:</h3>
              <input
                type="text"
                onChange={e => setName(e.target.value)}
                placeholder="your name..."
                value={newName}
              /> */}

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
    ); 
    }
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
