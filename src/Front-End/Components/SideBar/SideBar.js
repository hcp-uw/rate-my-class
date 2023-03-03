import "./Sidebar.css";
// import { useNavigate, useLocation } from "react-router-dom";

function Sidebar(props) {
    const {
        show
    } = props;

return(
    <div className={show ? "sidebar active" : "sidebar"}>
        <ul className="listItems">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us!</a></li>
            <li><a href="/about">Feedback</a></li>
        </ul>
    </div>
    )
}

export default Sidebar