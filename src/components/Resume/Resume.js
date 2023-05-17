import './Resume.scss'
import {useContext} from 'react';
import { LanguageContext } from '../../context/LanguageContext'


const Resume = () => {
    const { language } = useContext(LanguageContext);

    if (language === 'es') {
        return (
            <main className="resume-main">
                <div className='title-container'>
                    <h1 className='title-container__item'>Mi Currículum</h1>
                </div>
                <div className="quick-info">
                    <div className="quick-info__box width-limit">
                        <div className="quick-info__imagebox">
                            <img className="quick-info__imagebox--image" src="https://firebasestorage.googleapis.com/v0/b/portfoliobackend-aae35.appspot.com/o/luciana-profile-pic.png?alt=media&token=89986547-12d9-4440-b91a-6fc77f979efb" alt="Luciana's profile"/>
                        </div>
                        <div className="quick-info__contact">
                            <ul className="quick-info__social-media">
                                <li className="quick-info__social-media--link">Luciana Melina Calisaya</li>
                                <li className="quick-info__social-media--link"><i className="fas fa-map-marker-alt"></i> Montpellier, France</li>
                                <li><a className="quick-info__social-media--link" href="mailto: lmc.calisaya@gmail.com"><i className="far fa-envelope"></i> lmc.calisaya@gmail.com</a></li>
                                <li><a className="quick-info__social-media--link" href="https://www.linkedin.com/in/luciana-calisaya/"><i className="fab fa-linkedin-in"></i> /luciana-calisaya</a></li>
                                <li><a className="quick-info__social-media--link" href="https://github.com/lucianacalisaya"><i className="fab fa-github"></i> /lucianacalisaya</a></li>
                            </ul>
                            <a className="quick-info__download" target="_blank" href="img/resume2022-Luciana-Calisaya.pdf">Download PDF</a>
                        </div>                
                    </div>
                </div>
                <div className="cv width-limit">
                    <div className="cv__skills cv__padding">
                        <h3 className="cv__h3">Skills</h3>
                        <div className="cv__skillbox">
                            <h4 className="cv__h4 cv__h4--skill">Idiomas</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>Español nativo</li>
                                <li>Inglés fluído</li>
                                <li>Portugués básico</li>
                                <li>Francés principiante</li>
                            </ul>
                        </div>
                        <div className="cv__skillbox">
                            <h4 className="cv__h4 cv__h4--skill">Herramientas de maquetado</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SASS <span className="cv__highlight">Node</span></li>
                                <li>SEO</li>
                                <li>JavaScript <span className="cv__highlight">JQuery</span></li>
                                <li>React JS</li>
                            </ul>
                        </div>
                        <div className="cv__skillbox">
                            <h4 className="cv__h4 cv__h4--skill">Librerías</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>Bootstrap</li>
                                <li>TailwindCSS</li>
                            </ul>
                        </div>
                        <div className="cv__skillbox">
                            <h4 className="cv__h4 cv__h4--skill">Database</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>Firebase</li>
                            </ul>
                        </div>
                        <div className="cv__skillbox">
                            <h4 className="cv__h4 cv__h4--skill">Herramientas</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>Git</li>
                                <li>Github</li>
                            </ul>
                        </div>
                        <div className="cv__skillbox">
                            <h4 className="cv__h4 cv__h4--skill">IDE</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>VS Code</li>
                            </ul>
                        </div>
                        
                        <div className="cv__skillbox">
                            <h4 className="cv__h4 cv__h4--skill">Herramientas visuales de maquetado</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>Adobe XD <span className="cv__highlight">Más usada</span></li>
                                <li>Figma</li>
                            </ul>
                        </div>
                        <div className="cv__skillbox">
                            <h4 className="cv__h4 cv__h4--skill">UX/UI</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>User research</li>
                                <li>User testing</li>
                                <li>Whimsical</li>
                                <li>Optimal workshop</li>
                                <li>Behance</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cv__background cv__padding">
                        <h3 className="cv__background--title cv__h3">Mi Background</h3>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">Estudios</h4>
                            <ul className='cv__list'>
                                <li>Colegio Nacional de Ushuaia - Bac en Social Science</li>
                                <li>Cambridge First Certificate <span className="cv__highlight">nivel B2</span></li>
                            </ul>
                        </div>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">Certificationes</h4>
                            <ul className='cv__list'>
                                <li>Desarrollo web</li>
                                <li>UX/UI</li>
                                <li>JavaScript</li>
                                <li>React JS</li>
                            </ul>
                        </div>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">Experiencia</h4>
                            <ul className='cv__list'>
                                <li>Tutora de desarrollow web en <a className="cv__fieldset--link" href="https://www.coderhouse.com/">Coderhouse</a></li>
                                <li className="cv__subtitle">Dec 2020- Feb 2023</li>
                            </ul>
                        </div>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">Cosas que me gustan de mí. Soy:</h4>
                            <ul className='cv__list'>
                                <li>Amable</li>
                                <li>Colaborativa</li>
                                <li>Organizada</li>
                                <li>Aprendo rápido</li>
                                <li>Buena en matemáticas y resolución de problemas</li>
                            </ul>
                        </div>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">Extra</h4>
                            <ul className='cv__list'>
                                <li>Cajera en Keystone Resort - programa de Work&Travel es EE.UU.</li>
                                <li>Fun fact, fui la cajera más eficiente por un mes entero.</li>
                            </ul>
                        </div>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">Permiso de Visa</h4>
                            <ul className='cv__list'>
                                <li>Si. Working holiday por un año.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="cv__about cv__padding width-limit">
                        <h3 className="cv__h3">Un poco sobre mí</h3>
                        <p className="cv__about--text">
                            I've lived in 2 pretty international touristic places such as Tilcara and Ushuaia, both in north and
                            south extremes of Argentina so I've always had contact with foreign people, I grew around many cultures
                            and that formed me to be the kind and polite person I'm today. At the moment I'm living in France, learning about the language and the people because I love challenges. <br/><br/> My friends and family
                            consider me a smart person I never thought I could actually tutor people because I thought you just
                            had to have that skill but turns out I learnt how to explain myself and teach, plus the feedback I
                            get really motivates me to keep going. <br/><br/>
                            Where I work at I experience changes all the time and I adapt really fast, I manage to keep organised
                            and able to work and study at the same time.
                            I think I would be a nice incorporation to a team, perhaps I don't have much experience but I'm
                            willing to learn and I'd love to gain experience.
                        </p>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="resume-main">
            <div className='title-container'>
                <h1 className='title-container__item'>My Resume</h1>
            </div>
            <div className="quick-info">
                <div className="quick-info__box width-limit">
                    <div className="quick-info__imagebox">
                        <img className="quick-info__imagebox--image" src="https://firebasestorage.googleapis.com/v0/b/portfoliobackend-aae35.appspot.com/o/luciana-profile-pic.png?alt=media&token=89986547-12d9-4440-b91a-6fc77f979efb" alt="Luciana's profile"/>
                    </div>
                    <div className="quick-info__contact">
                        <ul className="quick-info__social-media">
                            <li className="quick-info__social-media--link">Luciana Melina Calisaya</li>
                            <li className="quick-info__social-media--link"><i className="fas fa-map-marker-alt"></i> Montpellier, France</li>
                            <li><a className="quick-info__social-media--link" href="mailto: lmc.calisaya@gmail.com"><i className="far fa-envelope"></i> lmc.calisaya@gmail.com</a></li>
                            <li><a className="quick-info__social-media--link" href="https://www.linkedin.com/in/luciana-calisaya/"><i className="fab fa-linkedin-in"></i> /luciana-calisaya</a></li>
                            <li><a className="quick-info__social-media--link" href="https://github.com/lucianacalisaya"><i className="fab fa-github"></i> /lucianacalisaya</a></li>
                        </ul>
                        <a className="quick-info__download" target="_blank" href="img/resume2022-Luciana-Calisaya.pdf"><i className="fas fa-arrow-alt-circle-down"></i> Download PDF</a>
                    </div>                
                </div>
            </div>
        {/*<div className="quick-info">
                <div className="quick-info__move">
                    <div className="quick-info__image">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobackend-aae35.appspot.com/o/luciana-profile-pic.png?alt=media&token=89986547-12d9-4440-b91a-6fc77f979efb" alt="Luciana's profile"/>
                    </div>
                    <div className="quick-info__contact">
                        <h5>Luciana Melina Calisaya</h5>
                        <h5 className="mail">lmc.calisaya@gmail.com</h5>
                        <h5 className="time">Contact time: morning</h5>
                        <ul className="social-media">
                            <li><a href="mailto: lmc.calisaya@gmail.com"><i className="far fa-envelope"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/luciana-calisaya/"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://github.com/lucianacalisaya"><i className="fab fa-github"></i></a></li>
                            <li><a href="https://www.behance.net/lucalisaya"><i className="fab fa-behance"></i></a></li>
                        </ul>
                        <a className="quick-info__download" target="_blank" href="img/resume2022-Luciana-Calisaya.pdf">Download PDF</a>
                    </div>
                </div>
            </div> */}
            
            

            <div className="cv width-limit">
                <div className="cv__skills cv__padding">
                    <h3 className="cv__h3">Skills</h3>
                    <div className="cv__skillbox">
                        <h4 className="cv__h4 cv__h4--skill">Languages</h4>
                        <ul className="cv__list cv__list--skills">
                            <li>Native Spanish</li>
                            <li>Fluent English</li>
                            <li>Basic Portuguese</li>
                            <li>Beginner French</li>
                        </ul>
                    </div>
                    <div className="cv__skillbox">
                        <h4 className="cv__h4 cv__h4--skill">Web Sketch</h4>
                        <ul className="cv__list cv__list--skills">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS <span className="cv__highlight">Node</span></li>
                            <li>SEO</li>
                            <li>JavaScript <span className="cv__highlight">JQuery</span></li>
                            <li>React JS</li>
                        </ul>
                    </div>
                    <div className="cv__skillbox">
                        <h4 className="cv__h4 cv__h4--skill">Libraries</h4>
                        <ul className="cv__list cv__list--skills">
                            <li>Bootstrap</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </div>
                    <div className="cv__skillbox">
                        <h4 className="cv__h4 cv__h4--skill">Database</h4>
                        <ul className="cv__list cv__list--skills">
                            <li>Firebase</li>
                        </ul>
                    </div>
                    <div className="cv__skillbox">
                        <h4 className="cv__h4 cv__h4--skill">Tools</h4>
                        <ul className="cv__list cv__list--skills">
                            <li>Git</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div className="cv__skillbox">
                        <h4 className="cv__h4 cv__h4--skill">IDE</h4>
                        <ul className="cv__list cv__list--skills">
                            <li>VS Code</li>
                        </ul>
                    </div>
                    
                    <div className="cv__skillbox">
                        <h4 className="cv__h4 cv__h4--skill">Visual Sketch</h4>
                        <ul className="cv__list cv__list--skills">
                            <li>Adobe XD <span className="cv__highlight">Most used</span></li>
                            <li>Figma</li>
                        </ul>
                    </div>
                    <div className="cv__skillbox">
                        <h4 className="cv__h4 cv__h4--skill">UX/UI</h4>
                        <ul className="cv__list cv__list--skills">
                            <li>User research</li>
                            <li>User testing</li>
                            <li>Whimsical</li>
                            <li>Optimal workshop</li>
                            <li>Behance</li>
                        </ul>
                    </div>
                </div>
                <div className="cv__background cv__padding">
                    <h3 className="cv__background--title cv__h3">Background</h3>
                    <div className="cv__fieldset">
                        <h4 className="cv__h4">Studies</h4>
                        <ul className='cv__list'>
                            <li>Colegio Nacional de Ushuaia - Bac Social Science</li>
                            <li>Cambridge First Certificate <span className="cv__highlight">level B2</span></li>
                        </ul>
                    </div>
                    <div className="cv__fieldset">
                        <h4 className="cv__h4">Certifications</h4>
                        <ul className='cv__list'>
                            <li>Web development <span className='cv__date'>2020</span></li>
                            <li>UX/UI <span className='cv__date'>2020</span></li>
                            <li>JavaScript <span className='cv__date'>2021</span></li>
                            <li>React JS <span className='cv__date'>2022</span></li>
                        </ul>
                    </div>
                    <div className="cv__fieldset">
                        <h4 className="cv__h4">Work experience</h4>
                        <ul className='cv__list'>
                            <li>Web development Tutor at <a className="cv__fieldset--link" href="https://www.coderhouse.com/">Coderhouse</a> <span className="cv__date">Dec 2020 - Feb 2023</span></li>
                        </ul>
                    </div>
                    <div className="cv__fieldset">
                        <h4 className="cv__h4">Things I like about myself. I'm:</h4>
                        <ul className='cv__list'>
                            <li>Kind</li>
                            <li>Helpful</li>
                            <li>Organised</li>
                            <li>A quick learner</li>
                            <li>Good at maths and solving problems</li>
                        </ul>
                    </div>
                    <div className="cv__fieldset">
                        <h4 className="cv__h4">Extra</h4>
                        <ul className='cv__list'>
                            <li>Cashier at Keystone Resort - Work&Travel program in the USA. <span className='cv__date'>Dec 2021 - April 2022</span></li>
                            <li>Fun fact, I was the most efficient cashier for one month straight.</li>
                        </ul>
                    </div>
                    <div className="cv__fieldset">
                        <h4 className="cv__h4">Visa permit</h4>
                        <ul className='cv__list'>
                            <li>Yes. Working holiday visa for a year.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="cv__about cv__padding width-limit">
                    <h3 className="cv__h3">A little bit about me </h3>
                    <p className="cv__about--text">
                        I've lived in 2 pretty international touristic places such as Tilcara and Ushuaia, both in north and
                        south extremes of Argentina so I've always had contact with foreign people, I grew around many cultures
                        and that formed me to be the kind and polite person I'm today. At the moment I'm living in France, learning about the language and the people and as challenging as it is, I'm loving it. <br/><br/> My friends and family
                        consider me a smart person I never thought I could actually tutor people because I thought you just
                        had to have that skill but turns out I learnt how to explain myself and teach, plus the feedback I
                        get really motivates me to keep going. <br/><br/>
                        Where I work at I experience changes all the time and I adapt really fast, I manage to keep organised
                        and able to work and study at the same time.
                        I think I would be a nice incorporation to a team, perhaps I don't have much experience but I'm
                        willing to learn and I'd love to gain experience.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Resume