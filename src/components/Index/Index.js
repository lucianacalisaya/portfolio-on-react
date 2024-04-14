import { Link } from "react-router-dom"
import './Index.scss'
import { getTranslation } from '../../services/utils'
import {useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Index = (context) => {
    const { language } = useContext(LanguageContext)

    return (
        <main className="home">
            <div className="home__introduction">
                <div className="home__textbox">
                    <p className="home__text">{ getTranslation('hello', language) }</p>
                    <h1 className="home__title">Luciana Calisaya</h1>
                    <h2 className="home__subtitle">{getTranslation('profession', language)}</h2>
                    <p className="home__text">{ getTranslation('text', language)}</p>
                </div>
                <div className="home__button">
                    <Link className="home__button--link" to='/contact'>{ getTranslation('button', language)}</Link>
                </div>
                <div className="home__social">
                    <p>{getTranslation('check', language)}</p>
                    <ul className="home__list">
                        <li><a href='https://github.com/lucianacalisaya'><i class="fab fa-github"></i></a></li>
                        <li><a href='https://www.linkedin.com/in/luciana-calisaya/'><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="home__imagebox">
                <img className="home__image" src='https://firebasestorage.googleapis.com/v0/b/portfoliobackend-aae35.appspot.com/o/home-illustration.png?alt=media&token=b9717241-cb72-47c9-9115-182744b433a7' alt="Luciana's profile"/>
            </div>
        </main>
    )
}

export default Index