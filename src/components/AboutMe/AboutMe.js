import './AboutMe.scss';
import {useContext} from 'react';
import { LanguageContext } from '../../context/LanguageContext'


const AboutMe = () =>  {
    const { language } = useContext(LanguageContext);

    if (language === 'es') {
        return (
            <main>
                <div className='title-container'>
                    <h1 className='title-container__item'>Sobre Mi</h1>
                </div>
                <div className='about-me'>
                    <div className='about-me__textbox'>
                        <p>Buenas! Mi nombre es Luciana Melina Calisaya y la tecnología me llama la atención en general. Desde que era niña he amado el inglés, matemáticas y la ciencia por lo que había decidido estudiar Física, estudié la carrera por un tiempo pero la gente me insistía en que era bastante buena en resolver problemas en la computadora y fue durante la pandemia que decidí darle una oportunidad a la programación. Descubrí que me gusta crear páginas y no es por presumir pero en el curso que tomé me esforcé tanto que al terminar dicho curso los de la compañía me ofrecieron trabajar con ellos. Ahora mi vida tuvo un cambio radicalmente y me dedico a crear proyectos mientras trabajo como tutora online. <br/><br/>
                        En estos momentos me encuentro en Francia para completar el giro y desafiarme más de lo que alguna vez pude imaginar. Me gusta probarme a mí misma que soy capaz de lograr lo que me propongo. Soy una persona amable y amigable, siempre trato de ser buena y razonable con la gente.<br/><br/>
                        En término de trabajo, me gusta comprometerme con lo que tengo que hacer, me gusta ser organizada y trasparente, además, me gusta mucho el trabajo en equipo, creo que es una buena forma de nutrirse de conocimiento y aprender incluso a mejorar. <br/><br/>
                        Creo que tengo mucho por ofrecer y aprender por lo que estoy abierta a nuevos desafíos y trataré de ser una buena colega con la que trabajar.</p>
                    </div>
                    <div className='about-me__image-container'>
                        <div className='about-me__imagebox'>
                            <img className='about-me__image' src="https://firebasestorage.googleapis.com/v0/b/portfoliobackend-aae35.appspot.com/o/luciana-profile-pic.png?alt=media&token=89986547-12d9-4440-b91a-6fc77f979efb" alt="Luciana's profile"/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
    return (
        <main>
            <div className='title-container'>
                <h1 className='title-container__item'>About Me</h1>
            </div>
            <div className='about-me'>
                <div className='about-me__textbox'>
                    <p>Hello! My name is Luciana Melina Calisaya and I'm curious about computers in general. Since I was young, I always loved english, maths and science so I decided to study Physics, I did for a while but many people told me I was good at solving problems on the computer so when the pandemic arrived I decided to give it a try. Turns out, I love designing webs and coding, not to brag but I put so much effort on the classes I took that I was offered to work with the people that taught me! So, now my life took a different path and I'm working as an Web developer online tutor<br/><br/>
                    At the moment, I've moved to France to literally take a different path in my life and challenge me more than I could ever have imagined. I like to prove myself I can achieve anything I set my mind into. I would say I'm a kind and charming person, I try to be nice and reasonable to everyone.<br/><br/>
                    In terms of how I am when I work, I commit to what I have to do, I like to be organised and transparent as I can be, also, I thrive team work very much, I think it's a nice way to get knowledge an improve.<br/><br/>
                    I believe I have much to give and learn so I'm open to new challenges and I'll do my best to be a nice colleague to work with.</p>
                </div>
                <div className='about-me__image-container'>
                    <div className='about-me__imagebox'>
                        <img className='about-me__image' src="https://firebasestorage.googleapis.com/v0/b/portfoliobackend-aae35.appspot.com/o/luciana-profile-pic.png?alt=media&token=89986547-12d9-4440-b91a-6fc77f979efb" alt="Luciana's profile"/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutMe