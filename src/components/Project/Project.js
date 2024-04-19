import './Project.scss';
import { getTranslation } from '../../services/utils';
import React from 'react';


const Project = ({ id, title, description, tools, img, link, language }) => {

    const descriptionText = getTranslation('projectsDescription', language).find(projectsDescription => projectsDescription.id === id)?.description || '';


    return (
        <div className='project' key={id}>
            <div className='project__header' data-aos="flip-left">
                <h2 className='project__title'>{title}</h2>
            </div>
            <div className='project__grid'>
                <div className='project__imagebox'>
                    <img className='project__image' src={img} alt='prueba' />
                </div>
            </div>
            <div className='project__description'>
                <div className='project__description-body'>
                    <h3 className='project__description-title'>{getTranslation('aboutProject', language)}</h3>
                    <p className='project__description-text'>{descriptionText}</p>
                </div>
                <ul className='project__description-tools'>
                    {tools.map(tool => (
                        <li key={tool}><i className={`fab fa-${tool}`} /></li>
                    ))}
                </ul>
                <a href={link} target='_blank' rel='noreferrer' className='project__description-link'>
                    {getTranslation('visit', language)}
                </a>
            </div>
        </div>
    );
};

export default Project;