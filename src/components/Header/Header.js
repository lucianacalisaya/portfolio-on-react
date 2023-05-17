import './Header.scss';
import { useState, useEffect } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import { Link } from 'react-router-dom';
//import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions)
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    return (
        <header className='header'>
            <Link className='header__logo' to ='/'><img src='/favicon.ico' alt="Luciana's portfolio logo"/></Link>
            {width>699 ? <Navbar/> : <Hamburger/>}
            {/* <LanguageSwitcher/> */}
        </header>
    )
}

export default Header

