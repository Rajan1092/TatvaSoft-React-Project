import React from 'react';
import './whiteBtn.css';
import { useNavigate } from 'react-router-dom';
function WhiteButton(props) {
    const navigate = useNavigate();
    return (
        <div>
            <button className="whiteBtn"  onClick={()=>navigate("/cart")}>{props.buttonText}</button>
        </div>
    )
}
export default WhiteButton;