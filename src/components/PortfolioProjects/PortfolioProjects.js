import './PortfolioProjects.scss';
import Project from '../Project/Project';

const PortfolioProjects = ({ projects, language }) => {
    return (
        <div className='projects'>
            {projects.map(projects => <Project key={projects.id} {...projects} language={language} />)}
        </div>
    );
};

export default PortfolioProjects;