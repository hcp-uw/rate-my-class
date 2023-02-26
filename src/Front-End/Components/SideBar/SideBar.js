import "./Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";



function Sidebar(props) {
    const {
        show
    } = props;




return(
    <div>
        <ul id={show ? "sidebar.active" : "sidebar"} >
            <li><a href="/" className="listItems">Home</a></li>
            <li><a href="/about" className="listItems">About Us!</a></li>
            <li><a href="/about" className="listItems">Feedback</a></li>
            </ul>
    </div>
    )
}

export default Sidebar