import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { getAuth } from 'firebase/auth'

function Sidebar(props) {
    const {
        show
    } = props;
    const navigate = useNavigate();
    const auth = getAuth()
    const user = auth.currentUser

    
    
    if (user) {
        return (
            <div className={show ? "sidebar active" : "sidebar"}>
                <ul className="listItems">
                    <li onClick={(e) => {navigate("/")}}>Home</li>
                    <li onClick={(e) => {navigate("/about")}}>About Us!</li>
                    <li onClick={(e) => {navigate("/feedbackpage")}}>Feedback</li>
                    <li><a href="/signin">Profile</a></li>
                    <li><a href="/signin">Sign Out</a></li>
                </ul>
            </div>
            )
    }
    return (
    <div className={show ? "sidebar active" : "sidebar"}>
        <ul className="listItems">
            <li onClick={(e) => {navigate("/")}}>Home</li>
            <li onClick={(e) => {navigate("/about")}}>About Us!</li>
            <li onClick={(e) => {navigate("/feedbackpage")}}>Feedback</li>
            <li><a href="/signin">Log in</a></li>
            <li><a href="/signin">Sign up</a></li>
        </ul>
    </div>
    )
}

export default Sidebar