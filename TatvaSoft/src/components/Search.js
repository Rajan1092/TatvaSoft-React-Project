import GreenButton from "./GreenButton";
import RedButton from "./Redbtn";
import './searchSection.css'
import './textbox.css'
import { useNavigate } from "react-router-dom";
function Search(props) {
    const navigate = useNavigate();
    return (
        <>
            <div className='search-section'>
                <input type="text" placeholder={props.placeholder} className='textBox'></input>
                <GreenButton buttonText="Search"/>
                <RedButton buttonText="Cancel" onClick={()=>navigate("/")} />
            </div>
        </>
    )
}
export default Search;