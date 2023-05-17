import './PortfolioContainer.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../services/firebase';
import PortfolioProjects from '../PortfolioProjects/PortfolioProjects';

const PortfolioContainer = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true)
    const {allProjects} = useParams();

    useEffect(() => {
        const collectionRef = collection(db, 'projects')
        getDocs(collectionRef).then(response => {
            const projectsAdapted = response.docs.map(doc => {
                const data=doc.data()
                return { id: doc.id, ...data}
            })
            setProjects(projectsAdapted)
        }).catch(error=> {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [allProjects]);
    if(loading) {
        return
    }
    return (
        <main>
            <div className='title-container'>
                <h1 className='title-container__item'>My projects</h1>
            </div>
            <PortfolioProjects projects={projects}/>
        </main>
    );
};

export default PortfolioContainer