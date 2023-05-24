import NavBar from '../../Components/NavBar/NavBar.js'
// import { useNavigate } from 'react-router-dom'
import './FeedbackPage.css'

import Rating from '@mui/material/Rating'


function FeedbackPage() {
    // const navigate = useNavigate();

    return (
        <div className="FeedbackPage">
            <NavBar id="NavBar"></NavBar>
            <div className="feedbackFormTitle">
                <h1>Feedback form</h1>
            </div>

            <div className="rateDiv">
                <h3>How do you rate your experience?</h3>
                <div className="flex-break"></div>
                {/* <div className="emojisDiv">
                    <button className="emojiRateButton">
                        <img src={logo} alt="Logo" id='UWLogo'/>
                    </button>
                </div> */}
               
               <Rating name="size-medium" defaultValue={2} />

                {/* <StyledRating
                name="emoji-ratings"
                defaultValue={2.5}
                IconContainerComponent={IconContainer}
                getLabelText={(value: number) => customIcons[value].label}
                readOnly
                /> */}

                

            </div>

            
            <div className="feedbackMessageDiv">
                <p id="messageTitle">Message</p>
                <div id="messageBox">
                    <input type="text" placeholder="your message..."/>
                </div>
                <button id="messageButton">Send Feedback</button>
            </div>
        </div>
    );
}

export default FeedbackPage;