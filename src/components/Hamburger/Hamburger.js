import './Hamburger.scss';
import {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import { LanguageContext } from '../../context/LanguageContext'
import { getTranslation } from '../../services/utils'
//import { useState, useEffect } from 'react';


const Hamburger = () => {
    const [isShown, setIsShown] = useState(false);
    const { language } = useContext(LanguageContext);
    const ref = useRef ();
    useEffect(() => {
        const handler = (event) => {
            if (
                isShown &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setIsShown(false)
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [isShown])
    // const [width, setWindowWidth] = useState(0);

    // useEffect(() => {
    //     updateDimensions();
    //     window.addEventListener('resize', updateDimensions);
    //     return () => window.removeEventListener('resize', updateDimensions)
    // }, []);

    // const updateDimensions = () => {
    //     const width = window.innerWidth;
    //     setWindowWidth(width);
    // };


   // {width>699 ? <Navbar/> : <Hamburger/>}
    return (
        <div ref={ref} className='hamburger' >
            <button className='hamburger__button' onClick={() => setIsShown((prev) => !prev)}>
                {isShown ? 
                (
                    <div className='hamburger__lines hamburger__lines--close'>
                        <span className='line line1'></span>
                        <span className='line line3'></span>
                    </div>
                ): (
                    <div className='hamburger__lines'>
                        <span className='line line1'></span>
                        <span className='line line2'></span>
                        <span className='line line3'></span>
                    </div>
                )}
            </button>
           
            <nav className={`navbar ${isShown ? 'show-menu' : ''}`}>
                <ul className='navbar__menu'>
                    <li className='navbar__item'><Link className='navbar__link' onClick={() => setIsShown(false)} to='/'>{getTranslation('home', language)}</Link></li>
                    <li className='navbar__item'><Link className='navbar__link' onClick={() => setIsShown(false)} to='/resume'>{getTranslation('resume', language)}</Link></li>
                    <li className='navbar__item'><Link className='navbar__link' onClick={() => setIsShown(false)} to='/portfolio'>{getTranslation('projects', language)}</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Hamburger