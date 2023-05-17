import './Hamburger.scss';
import {useState} from 'react';
import Navbar from '../Navbar/Navbar';


const Hamburger = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (
        <div className='hamburger'>
            <button className='hamburger__button' onClick={handleClick}>
                <div className='hamburger__lines'>
                    <span className='line line1'></span>
                    <span className='line line2'></span>
                    <span className='line line3'></span>
                </div>
            </button>
            {isShown ? <Navbar onClick={() => setIsShown(false)}/> : null}
        </div>
    )
}
export default Hamburger