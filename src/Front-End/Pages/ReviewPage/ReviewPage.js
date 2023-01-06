import './ReviewPage.css'
import NavBar from '../../Components/NavBar/NavBar.js';
import { Rating } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function ReviewPage() {
    const params = useParams()
    const [star, setRating] = useState(0);
    
    const header = "Leave a review for " + params.classID;
    return (
      <div className="ReviewPage">
        <NavBar/>
        <div className='Page'>
            <h1>{header}</h1>
            <h2>Write your review here:</h2>
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

          <form action="/" method="get" id='SearchBar'>
          {/* <form action="/" method="get" id='SearchBar' onSubmit={searchHandler}> */}
            <input
              type="text"
            //   onChange={e => setQuery(e.target.value)}
              id="header-search"
              placeholder="type your review here..."
              name="s" 
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default ReviewPage;