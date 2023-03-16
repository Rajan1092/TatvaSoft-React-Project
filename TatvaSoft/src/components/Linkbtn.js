import React from 'react';
import './linkBtn.css';
import { useNavigate } from 'react-router-dom';
function Linkbtn(props) {
    const navigate = useNavigate();
    return (
        <div>
            <button className="linkBtn" onClick={()=>navigate("/")} >{props.buttonText}</button>
        </div>
    )
}
export default Linkbtn;