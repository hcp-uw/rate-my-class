import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar(props) {
    const {
        show
    } = props;
    const navigate = useNavigate();

    return (
    <div className={show ? "sidebar active" : "sidebar"}>
        <ul className="listItems">
            <li onClick={(e) => {navigate("/")}}>Home</li>
            <li onClick={(e) => {navigate("/about")}}>About Us!</li>
            <li onClick={(e) => {navigate("/about")}}>Feedback</li>
            <li><a href="/signin">Log in</a></li>
            <li><a href="/signin">Sign up</a></li>
        </ul>
    </div>
    )
}

export default Sidebar