import LinkButton from './LinkButton'
import WhiteButton from './WhiteButton';
import Linkbtn from './Linkbtn';
import './header.css';
function Header() {
    return (
        <>
            {/* Header Containing logo and Login/Register/cart Button */}
            <div className='header'>
                <h2>TatvaSoft</h2>
                <div>
                    <LinkButton buttonText="Login" /> | <Linkbtn buttonText="Register" />
                    <WhiteButton buttonText="Cart" />
                </div>
            </div>
        </>
    )
}
export default Header;