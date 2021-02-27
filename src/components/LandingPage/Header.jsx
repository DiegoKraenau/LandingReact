import { Link } from "react-router-dom";
import bgHeader from '../../images/Sustracción 1.svg';
import intro from '../../images/illustration-intro.svg';
import NavBar from "./Navbar";

const Header = () => {


    return (
        <header className="header">
            <img className="background bgImg" src={bgHeader} alt="fondo" />
            <NavBar></NavBar>

            <section class="header__main container">
                <div class="header__main__text">
                    <p class="header__main__title">
                        Bring everyone <br />
                    together to build <br />
                    better products <br />
                    </p>
                    <p class="header__main__subtitle">
                        Manage makes it simple for software teams <br />
                    to plan day-to-day tasks white keepin g the <br />
                    larger team goals in view <br />
                    </p>
                    <Link to="#" class="header__main__button flex flex-jc-c flex-ai-c button">Get Started</Link>
                </div>
                <div class="header__main__image">
                    <img src={intro} alt="data" />
                </div>
            </section>
        </header>
    );
}


export default Header;