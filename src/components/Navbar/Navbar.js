import { Link } from 'react-router-dom';
import './Navbar.scss'
import {useContext} from 'react';
import { LanguageContext } from '../../context/LanguageContext'


const Navbar = () => {
    const { language } = useContext(LanguageContext);

    if (language === 'es') {
        return (
            <nav className='navbar'>
                <ul className='navbar__menu'>
                    <li className='navbar__item'><Link className='navbar__link' to='/about-me'>Sobre Mí</Link></li>
                    <li className='navbar__item'><Link className='navbar__link' to='/resume'>Currículum</Link></li>
                    <li className='navbar__item'><Link className='navbar__link' to='/portfolio'>Portafolio</Link></li>
                    <li className='navbar__item'><Link className='navbar__link' to='/contact'>Contacto</Link></li>
                </ul>
            </nav>
        )
    }

    return (
        <nav className='navbar'>
            <ul className='navbar__menu'>
                <li className='navbar__item'><Link className='navbar__link' to='/'>Home</Link></li>
                <li className='navbar__item'><Link className='navbar__link' to='/resume'>Resume</Link></li>
                <li className='navbar__item'><Link className='navbar__link' to='/portfolio'>Projects</Link></li>
                <li className='navbar__item'><Link className='navbar__link' to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar