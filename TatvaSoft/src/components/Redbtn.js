import React from 'react'
import './redBtn.css';
import { useNavigate } from 'react-router-dom';
function Redbtn(props) {
    const navigate = useNavigate();
  return (
    <div>
       <button className='redBtn' onClick={()=>navigate('/')}>{props.buttonText}</button>
    </div>
  )
}

export default Redbtn