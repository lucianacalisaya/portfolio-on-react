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
                    <div className='cv__box'>
                        <h3 className="cv__h3">{getTranslation('tech', language)}</h3>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">{getTranslation('frontend', language)}</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>HTML5, CSS3, SASS</li>
                                <li>JavaScript (ES6+) <span className="cv__highlight">JQuery</span></li>
                                <li>TypeScript</li>
                                <li>React JS, NextJS</li>
                                <li>{getTranslation('responsive', language)}</li>
                                <li>SEO</li>
                            </ul>
                        </div>
                        <br/>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">{getTranslation('frameworks', language)}</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>TailwindCSS</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <br/>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">{getTranslation('tools', language)}</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>Git, Github</li>
                                <li>Firebase</li>
                                <li>Node JS</li>
                                <li>Adobe XD</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                        <br/>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">UX / UI</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>User research</li>
                                <li>User testing</li>
                                <li>{getTranslation('ux-ui', language)}</li>
                            </ul>
                        </div>
                    </div>

                    <br/>
                    <div className='cv__box'>
                        <h3 className="cv__background--title cv__h3">{getTranslation('background', language)}</h3>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">{getTranslation('languages', language)}</h4>
                            <ul className="cv__list cv__list--skills">
                                <li>{getTranslation('spanish', language)}</li>
                                <li>{getTranslation('english', language)}</li>
                                {/* <li>{getTranslation('portuguese', language)}</li> */}
                                <li>{getTranslation('french', language)}</li>
                            </ul>
                        </div>
                        <br/>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">{getTranslation('studies', language)}</h4>
                            <ul className='cv__list'>
                                <li>Colegio Nacional de Ushuaia - Bac Social Science</li>
                                <li>Cambridge First Certificate <span className="cv__highlight">{getTranslation('cambridgeLevel', language)}</span></li>
                            </ul>
                        </div>
                        <br/>
                        <div className="cv__fieldset">
                            <h4 className="cv__h4">{getTranslation('certifications', language)}</h4>
                            <ul className='cv__list'>
                                <li>{getTranslation('webDev', language)}<span className='cv__date'> 2020</span></li>
                                <li>UX/UI <span className='cv__date'>2020</span></li>
                                <li>JavaScript <span className='cv__date'>2021</span></li>
                                <li>React JS <span className='cv__date'>2022</span></li>
                            </ul>
                        </div>
                    </div>
                    

            
                </div>
                <div className="cv__background">
                <div className="cv__about cv__padding width-limit">
                    <h3 className="cv__h3">{getTranslation('descriptionResume', language)}</h3>
                    <div className='cv__list'>
                        <p className='cv__about--text'>{getTranslation('descriptionResume1', language)}</p>
                        
                        <p className='cv__about--text'>{getTranslation('descriptionResume2', language)}</p>
                    </div>
                   
                </div>
                {/* <br/> */}
                    <div className="cv__fieldset">
                        <h3 className="cv__h3">{getTranslation('workExp', language)}</h3>
                        <h4 className="cv__h4">{getTranslation('workTitle', language)} – <a className="cv__fieldset--link" href="https://www.coderhouse.com/">Coderhouse</a> (ARG)<br/><span className="cv__date">Dec 2020 - Feb 2023</span></h4>
                        <ul className='cv__list  cv__list--bullets'>
                            <li className='cv__list--exception'></li>
                            <li>{getTranslation('workDescription1', language)}</li>
                            <li>{getTranslation('workDescription2', language)}</li>
                            <li>{getTranslation('workDescription3', language)}</li>
                            <li>{getTranslation('workDescription4', language)}</li>
                            <li>{getTranslation('workDescription5', language)}</li>
                            <li>{getTranslation('workDescription6', language)}</li>
                            <li>{getTranslation('workDescription7', language)}</li>
                        </ul>
                        <br/>
                        <h4 className='cv__h4'>{getTranslation('work2Title', language)} – Keystone Resort (USA)<br/><span className="cv__date">Dec 2021 - {getTranslation('month', language)} 2022</span></h4>
                        <ul className='cv__list  cv__list--bullets'>
                            <li>{getTranslation('work2Description1', language)}</li>
                            <li>{getTranslation('work2Description2', language)}</li>
                            <li>{getTranslation('work2Description3', language)}</li>
                            <li>{getTranslation('work2Description4', language)}</li>
                            <li>{getTranslation('work2Description5', language)}</li>                            
                        </ul>
                    </div>
                    <br/>
                    <h3 className="cv__h3">{getTranslation('volunteerExp', language)}</h3>
                    <div className="cv__fieldset">
                        <h4 className='cv__h4'>{getTranslation('volunteer2Title', language)} (FR)<br/><span className="cv__date">Jun 2024 - {getTranslation('work2TitleTime', language)}</span></h4>
                        <ul className='cv__list cv__list--bullets'>
                            <li>{getTranslation('volunteer2Description1', language)}</li>    
                            <li>{getTranslation('volunteer2Description2', language)}</li>
                            <li>{getTranslation('volunteer2Description3', language)}</li>
                        </ul>
                    </div>
                    <br/>
                    <h4 className='cv__h4'>Secours Catholique (FR)<br/><span className="cv__date">Sep 2025 - {getTranslation('work2TitleTime', language)}</span></h4>
                    <div className="cv__fieldset">
                        <ul className='cv__list cv__list--bullets'>
                            <li>{getTranslation('volunteerDescription1', language)}</li>
                            <li>{getTranslation('volunteerDescription2', language)}
                                <ul className='cv__list--indent'>
                                    <li>{getTranslation('volunteerDescription3', language)}</li>
                                    <li>{getTranslation('volunteerDescription4', language)}</li>
                                    <li>{getTranslation('volunteerDescription5', language)}</li>    
                                    <li>{getTranslation('volunteerDescription6', language)}</li>
                                </ul>
                            </li>
                            <li>{getTranslation('volunteerDescription7', language)}
                                <ul className='cv__list--indent'>
                                    <li>{getTranslation('volunteerDescription8', language)}</li>
                                    <li>{getTranslation('volunteerDescription9', language)}</li>
                                </ul>
                            </li>
                            <li>{getTranslation('volunteerDescription10', language)}
                                <ul className='cv__list--indent'>
                                    <li>{getTranslation('volunteerDescription11', language)}</li>
                                </ul>
                            </li>
                            <li>{getTranslation('volunteerDescription12', language)}</li>
                            <li>{getTranslation('volunteerDescription13', language)}
                                <ul className='cv__list--indent'>
                                    <li>{getTranslation('volunteerDescription14', language)}</li>
                                    <li>{getTranslation('volunteerDescription15', language)}</li>
                                    <li>{getTranslation('volunteerDescription16', language)}</li>
                                    <li>{getTranslation('volunteerDescription17', language)}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                    
                    
                </div>
                
               
            </div>
        </main>
    )
}

export default Resume