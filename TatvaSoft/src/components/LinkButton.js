import React from 'react';
import './linkBtn.css';
import { useNavigate } from 'react-router-dom';
function LinkButton(props) {
    const navigate = useNavigate();
    return (
        <div>
            <button className="linkBtn" onClick={()=>navigate("/loginreg")} >{props.buttonText}</button>
        </div>
    )
}
export default LinkButton;