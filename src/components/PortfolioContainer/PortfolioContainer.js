import './PortfolioContainer.scss';
import {  useContext } from 'react';
import PortfolioProjects from '../PortfolioProjects/PortfolioProjects';
import { getTranslation } from '../../services/utils'
import { LanguageContext } from '../../context/LanguageContext';
import projectsData from '../../data/projects.json'

const PortfolioContainer = () => {
    const { language } = useContext(LanguageContext);


    return (
        <main>
            <div className='title-container'>
                <h1 className='title-container__item'>{getTranslation('projectsTitle', language)}</h1>
            </div>
            <PortfolioProjects projects={projectsData} language={language} />
        </main>
    );
};

export default PortfolioContainer;