import "./Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";



function Sidebar(props) {
    const {
        show
    } = props;




return(
    <div>
        <ul id={show ? "sidebar.active" : "sidebar"} >
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us!</a></li>
            <li><a href="/about">Feedback</a></li>
            </ul>
    </div>
    )
}

export default Sidebar