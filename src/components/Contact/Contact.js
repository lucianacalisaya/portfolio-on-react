import './Contact.scss';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { getTranslation } from '../../services/utils';

const Contact = () => {
    const { language } = useContext(LanguageContext);

    return (
        <main>
            <div className='title-container'>
                <h1 className='title-container__item'>{getTranslation('contactTitle', language)}</h1>
            </div>
            <div className="contact">
                <div className="contact__box">
                    <div className="contact__social-box">
                        <h2 className="contact__social-media">{getTranslation('contactEmail', language)}</h2>
                        <a href="mailto:lmc.calisaya@gmail.com" aria-label="Email"><i className="far fa-envelope"></i></a>
                    </div>
                    <div className="contact__social-box">
                        <h2 className="contact__social-media">{getTranslation('contactLinkedin', language)}</h2>
                        <a href="https://www.linkedin.com/in/luciana-calisaya/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="contact__box">
                    <div className="contact__social-box">
                        <h2 className="contact__social-media">{getTranslation('contactGithub', language)}</h2>
                        <a href="https://github.com/lucianacalisaya" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <div className="contact__box contact__box--cv">
                    <a className="contact__cv" href={getTranslation('downloadLink', language)} target="_blank" rel="noreferrer">
                        <i className="fas fa-arrow-alt-circle-down"></i> {getTranslation('contactCv', language)}
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Contact;
