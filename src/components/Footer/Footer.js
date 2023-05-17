import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container footer-still">
                <div className="footer-iconbox">
                    <a href="mailto: lmc.calisaya@gmail.com"><i className="far fa-envelope"></i></a>
                </div>
                <div className="footer-iconbox">
                    <a href="https://github.com/lucianacalisaya"><i className="fab fa-github"></i></a>
                </div>
                <div className="footer-iconbox">
                    <a href="https://www.linkedin.com/in/luciana-calisaya/"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer