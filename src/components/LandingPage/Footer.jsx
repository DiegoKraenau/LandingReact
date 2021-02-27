import { Link } from "react-router-dom";
import facebook from '../../images/icon-facebook.svg';
import youtube from '../../images/icon-youtube.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';
import Logo from '../../images/logo.svg';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer__text flex flex-jc-sb flex-ai-c">
                <h2>Simplify how your team <br />
                works today.</h2>
                <Link to="#" class="button flex flex-jc-c flex-ai-c btn-footer">Get Started</Link>
            </div>
            <div class="footer__container">
                <div class="footer__information flex flex-jc-sb flex-ai-c">
                    <div class="footer__information__social">
                        <img src={Logo} alt="logo" class="logo" />
                        <div class="social">
                            <img src={facebook} alt="social" />
                            <img src={youtube} alt="social" />
                            <img src={twitter} alt="social" />
                            <img src={pinterest} alt="social" />
                            <img src={instagram} alt="social" />
                        </div>
                    </div>
                    <div class="footer__information__links1">
                        <ul>
                            <li>
                                <Link to="#">Home</Link>
                            </li>
                            <li>
                                <Link to="#">Princing</Link>
                            </li>
                            <li>
                                <Link to="#">Products</Link>
                            </li>
                            <li>
                                <Link to="#">About us</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__information__links2">
                        <ul>
                            <li>
                                <Link to="#">Careers</Link>
                            </li>
                            <li>
                                <Link to="#">Community</Link>
                            </li>
                            <li>
                                <Link to="#">Priavcy Polity</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__information__email">
                        <input type="text" placeholder="email" />
                        <button type="button">Go</button>
                        <p>Made by @DiegoKraenau</p>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;