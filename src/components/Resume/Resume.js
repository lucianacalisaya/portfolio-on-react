import './Resume.scss'
import { getTranslation } from '../../services/utils'
import {useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';


const Resume = () => {
    const { language } = useContext(LanguageContext);


    return (
        <main className="resume-main">
            <div className='title-container'>
                <h1 className='title-container__item'>{getTranslation('resumeTitle', language)}</h1>
            </div>
            <div className="quick-info">
                <div className="quick-info__box width-limit">
                    <div className="quick-info__imagebox">
                        <img className="quick-info__imagebox--image" src="https://firebasestorage.googleapis.com/v0/b/portfoliobackend-aae35.appspot.com/o/luciana-profile-pic.png?alt=media&token=89986547-12d9-4440-b91a-6fc77f979efb" alt="Luciana's profile"/>
                    </div>
                    <div className="quick-info__contact">
                        <ul className="quick-info__social-media">
                            <li className="quick-info__social-media--link quick-info__social-media--name">Luciana Melina Calisaya - {getTranslation('position', language)}</li>
                            <li className="quick-info__social-media--link"><i class="fas fa-search"></i> <span>{getTranslation('lookingFor', language)}</span>: {getTranslation('lookingForPositions', language)}</li>
                            <li className="quick-info__social-media--link"><i className="fas fa-map-marker-alt"></i>     {getTranslation('location', language)}</li>
                            <li className="quick-info__social-media--link"><i class="far fa-clock"></i> 
                            <span> {getTranslation('availability', language)}</span>: {getTranslation('availabilityTime', language)}</li>
                            <li><a className="quick-info__social-media--link" href="mailto: lmc.calisaya@gmail.com"><i className="far fa-envelope"></i> lmc.calisaya@gmail.com</a></li>
                            <li><a className="quick-info__social-media--link" href="https://www.linkedin.com/in/luciana-calisaya/"><i className="fab fa-linkedin-in"></i> /luciana-calisaya</a></li>
                            <li><a className="quick-info__social-media--link" href="https://github.com/lucianacalisaya"><i className="fab fa-github"></i> /lucianacalisaya</a></li>
                        </ul>
                        <a className="quick-info__download" target="_blank" rel='noreferrer' href={getTranslation('downloadLink', language)}><i className="fas fa-arrow-alt-circle-down"></i> {getTranslation('download', language)}</a>
                    </div>                
                </div>
            </div>

            <div className="cv width-limit">
                <div className="cv__skills cv__padding">
                    <h3 className="cv__h3">{getTranslation('skills', language)}</h3>
                    <div className="cv__skillbox">
                        <h4 className="cv__h4 cv__h4--skill">{getTranslation('languages', language)}</h4>
                        <ul className="cv__list cv__list--skills">
                            <li>{getTranslation('spanish', language)}</li>
                            <li>{getTranslation('english', language)}</li>
                            <li>{getTranslation('portuguese', language)}</li>
                            <li>{getTranslation('french', language)}</li>
                        </ul>
                    </div>
                    <div className="cv__skillbox">
                        <h4 className="cv__h4 cv__h4--skill">{getTranslation('webSketch', language)}</h4>
                        <ul className="cv__list cv__list--skills">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>SEO</li>
                            <li>JavaScript <span className="cv__highlight">JQuery</span></li>
                            <li>TypeScript</li>
                            <li>React JS</li>
                            <li>Next JS</li>
                        </ul>
                    </div>
                    <div className="cv__skillbox">
                        <h4 className="cv__h4 cv__h4--skill">{getTranslation('libraries', language)}</h4>
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
                        <h4 className="cv__h4 cv__h4--skill">{getTranslation('tools', language)}</h4>
                        <ul className="cv__list cv__list--skills">
                            <li>Git</li>
                            <li>Github</li>
                            <li>Node JS</li>
                        </ul>
                    </div>
                    
                    <div className="cv__skillbox">
                        <h4 className="cv__h4 cv__h4--skill">{getTranslation('visualSketch', language)}</h4>
                        <ul className="cv__list cv__list--skills">
                            <li>Adobe XD</li>
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
                    <div className="cv__qualities">
                        <h4 className="cv__h4 cv__h4--skill">{getTranslation('qualities', language)}</h4>
                        <ul className='cv__list cv__list--skills'>
                            <li>{getTranslation('quality1', language)}</li>
                            <li>{getTranslation('quality2', language)}</li>
                            <li>{getTranslation('quality3', language)}</li>
                            <li>{getTranslation('quality4', language)}</li>
                            <li>{getTranslation('quality5', language)}</li>
                        </ul>
                    </div>
                </div>
                <div className="cv__background cv__padding">
                    <h3 className="cv__background--title cv__h3">{getTranslation('background', language)}</h3>
                    <div className="cv__fieldset">
                        <h4 className="cv__h4">{getTranslation('studies', language)}</h4>
                        <ul className='cv__list'>
                            <li>Colegio Nacional de Ushuaia - Bac Social Science</li>
                            <li>Cambridge First Certificate <span className="cv__highlight">{getTranslation('cambridgeLevel', language)}</span></li>
                        </ul>
                    </div>
                    <div className="cv__fieldset">
                        <h4 className="cv__h4">{getTranslation('certifications', language)}</h4>
                        <ul className='cv__list'>
                            <li>{getTranslation('webDev', language)}<span className='cv__date'> 2020</span></li>
                            <li>UX/UI <span className='cv__date'>2020</span></li>
                            <li>JavaScript <span className='cv__date'>2021</span></li>
                            <li>React JS <span className='cv__date'>2022</span></li>
                        </ul>
                    </div>
                    <div className="cv__fieldset">
                        <h4 className="cv__h4">{getTranslation('workExp', language)}</h4>
                        <ul className='cv__list  cv__list--bullets'>
                            <li className='cv__list--exception'>{getTranslation('workTitle', language)} – <a className="cv__fieldset--link" href="https://www.coderhouse.com/">Coderhouse</a><br/><span className="cv__date">Dec 2020 - Feb 2023</span></li>
                            <li>{getTranslation('workDescription1', language)}</li>
                            <li>{getTranslation('workDescription2', language)}</li>
                            <li>{getTranslation('workDescription3', language)}</li>
                        </ul>
                        <br/>
                        <ul className='cv__list  cv__list--bullets'>
                            <li className='cv__list--exception'>{getTranslation('work2Title', language)} – Realixo<br/><span className="cv__date">Jul 2025 - {getTranslation('work2TitleTime', language)}</span></li>
                            <li>{getTranslation('work2Description1', language)}</li>
                            <li>{getTranslation('work2Description2', language)}</li>
                            <li>{getTranslation('work2Description3', language)}</li>
                        </ul>
                    </div>
                    
                    <div className="cv__fieldset">
                        <h4 className="cv__h4">Extra</h4>
                        <ul className='cv__list'>
                            <li>{getTranslation('keystone', language)}<span className='cv__date'>Dec 2021 - {getTranslation('month', language)} 2022</span></li>
                            <li>{getTranslation('funFact', language)}</li>
                        </ul>
                    </div>
                    
                </div>
                
                <div className="cv__about cv__padding width-limit">
                    <h3 className="cv__h3">{getTranslation('descriptionResume', language)}
</h3>
                    <p className="cv__about--text">
                        {getTranslation('descriptionResume1', language)}
                    </p>
                    <p className="cv__about--text">
                        {getTranslation('descriptionResume2', language)}
                    </p>
                    <p className="cv__about--text">
                        {getTranslation('descriptionResume3', language)}
                    </p>
                    <p className="cv__about--text">
                        {getTranslation('descriptionResume4', language)}
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Resume