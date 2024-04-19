import './PortfolioProjects.scss';
import Project from '../Project/Project';

const PortfolioProjects = ({ projects, language }) => {
    return (
        <div className='projects'>
            {projects.map(project => (
                <Project key={project.id} {...project} language={language} />
            ))}
        </div>
    );
};

export default PortfolioProjects;