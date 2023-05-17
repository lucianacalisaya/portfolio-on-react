import './Project.scss';

const Project = ({title, description, tools, img0, link}) => {
    return (
        <div className='project'>
            <div className='project__header'>
                <h2 className='project__title'>{title}</h2>
            </div>
            <div className='project__grid'>
                <div className='project__imagebox'>
                    <img className='project__image' src={img0} alt='prueba'/>
                </div>
            </div>
            <div className='project__description'>
                <div className='project__description-body'>
                    <h3 className='project__description-title'>About the project</h3>
                    <p className='project__description-text'>{description}</p>
                </div>
                <ul className='project__description-tools'>
                    {tools.map(tools => {
                        return (
                            <li><i className={`fab fa-${tools}`}></i></li>
                        )
                    })}
                </ul>
                <a href={link} target='_blank' rel='noreferrer' className='project__description-link'>Visit Project</a>
            </div>
        </div>
    )
}
export default Project