import './Contact.scss';
import {useContext} from 'react';
import { LanguageContext } from '../../context/LanguageContext'



const Contact = () => {
    const { language } = useContext(LanguageContext);

    if (language === 'es') {
        return (
            <main>
                <div className='title-container'>
                    <h1 className='title-container__item'>Contacto</h1>
                </div>
                <div class="contact">
                    <div class="contact__box">
                        <div class="contact__social-box">
                            <h2 class="contact__social-media">Enviame un email</h2>
                            <a href = "mailto: lmc.calisaya@gmail.com"><i class="far fa-envelope"></i></a>
                        </div>
                        <div class="contact__social-box">
                            <h2 class="contact__social-media">Agregame en LinkedIn</h2>
                            <a href="https://www.linkedin.com/in/luciana-calisaya/"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="contact__box">
                        <div class="contact__social-box">
                            <h2 class="contact__social-media">Mirá mis códigos en Github</h2>
                            <a href="https://github.com/lucianacalisaya"><i class="fab fa-github"></i></a>
                        </div>
                        <div class="contact__social-box">
                            <h2 class="contact__social-media">Seguime en Behance</h2>
                            <a href="https://www.behance.net/lucalisaya"><i class="fab fa-behance"></i></a>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main>
            <div className='title-container'>
                <h1 className='title-container__item'>Contact</h1>
            </div>
            <div class="contact">
                <div class="contact__box">
                    <div class="contact__social-box">
                        <h2 class="contact__social-media">Send Me an Email</h2>
                        <a href = "mailto: lmc.calisaya@gmail.com"><i class="far fa-envelope"></i></a>
                    </div>
                    <div class="contact__social-box">
                        <h2 class="contact__social-media">Add me on LinkedIn</h2>
                        <a href="https://www.linkedin.com/in/luciana-calisaya/"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="contact__box">
                    <div class="contact__social-box">
                        <h2 class="contact__social-media">See my codes on Github</h2>
                        <a href="https://github.com/lucianacalisaya"><i class="fab fa-github"></i></a>
                    </div>
                    <div class="contact__social-box">
                        <h2 class="contact__social-media">Follow me Behance</h2>
                        <a href="https://www.behance.net/lucalisaya"><i class="fab fa-behance"></i></a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact