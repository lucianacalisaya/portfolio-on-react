import './Header.scss';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Hamburger from '../Hamburger/Hamburger';
const Header = () => {


    return (
        <header className='header'>
            <div className='header__logo'>
                <Link className='header__logo--link' to ='/'><img src='/favicon.ico' alt="Luciana's portfolio logo"/></Link>
            </div>
            <Hamburger></Hamburger>
            <LanguageSwitcher />
        </header>
    )
}

export default Header

