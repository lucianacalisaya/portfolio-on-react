import { Link } from "react-router-dom"
import './Index.scss'

const Index = () => {
    return (
        <main className="home">
            <div className="home__introduction">
                <div className="home__textbox">
                    <p className="home__text">Hello! I am</p>
                    <h1 className="home__title">Luciana Calisaya</h1>
                    <h2 className="home__subtitle">Front-end Developer</h2>
                    <p className="home__text">I am passionate about technology since I was young, I also always loved english, maths and science. I love putting together webs through coding so on the projects I did I like to you my skills to create responsive and functionally websites. <br/>
                    In terms of how I am when I work, I commit to what I have to do, I like to be organised and transparent as I can be, also, I thrive team work very much, I think it's a nice way to get knowledge an improve.<br/>
                    I believe I have much to give and learn so I'm open to new challenges.</p>
                </div>
                <div className="home__button">
                    <Link className="home__button--link" to='/contact'>Let's talk!</Link>
                </div>
                <div className="home__social">
                    <p>Check out my</p>
                    <ul className="home__list">
                        <li><a href='https://github.com/lucianacalisaya'><i class="fab fa-github"></i></a></li>
                        <li><a href='https://www.linkedin.com/in/luciana-calisaya/'><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="home__imagebox">
                <img className="home__image" src='https://firebasestorage.googleapis.com/v0/b/portfoliobackend-aae35.appspot.com/o/luciana-profile-pic.png?alt=media&token=89986547-12d9-4440-b91a-6fc77f979efb' alt="Luciana's profile"/>
            </div>
        </main>
    )
}

export default Index