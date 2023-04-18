import logo from '../../Components/WashingtonLogo.png'
import NavBar from '../../Components/NavBar/NavBar.js'
// import { useNavigate } from 'react-router-dom'
import './FeedbackPage.css'

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
                <img src={logo} alt="Logo" id='UWLogo'/>
            </div>

            <div className="feedbackMessageDiv">
                <h3>Message</h3>
                <p>TO PUT MESSAGE BOX HERE</p>
                <button>TO PUT BUTTON HERE</button>
            </div>
        </div>
    );
}

export default FeedbackPage;