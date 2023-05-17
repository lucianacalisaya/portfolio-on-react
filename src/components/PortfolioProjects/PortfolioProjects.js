import './PortfolioProjects.scss';
import Project from '../Project/Project';

const PortfolioProjects = ({projects}) => {
    return (
        <div className='projects'>
            {projects.map(proj => <Project key={proj.id} {...proj}/>)}
        </div>
    )
}

export default PortfolioProjects
