import './PortfolioContainer.scss';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {getProjects} from '../../data/asyncMock'
import PortfolioProjects from '../PortfolioProjects/PortfolioProjects';
import { getTranslation } from '../../services/utils'
import { LanguageContext } from '../../context/LanguageContext';

const PortfolioContainer = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const { projectId } = useParams();
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        getProjects(projectId).then(response => {
            setProjects(response.slice(0,8))
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [projectId, language]); 

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <div className='title-container'>
                <h1 className='title-container__item'>{getTranslation('projectsTitle', language)}</h1>
            </div>
            <PortfolioProjects projects={projects} language={language} />
        </main>
    );
};

export default PortfolioContainer;