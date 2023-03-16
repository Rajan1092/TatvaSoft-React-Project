import React from 'react';
import './greenBtn.css';
import { useNavigate } from 'react-router-dom';
function GreenButton(props) {
    const navigate = useNavigate();
    return (
        <div>
            <button className="greenBtn"  onClick={()=>navigate('/search')} >{props.buttonText}</button>
        </div>
    )
}
export default GreenButton;