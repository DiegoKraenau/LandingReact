import { Fragment } from "react";
import Logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


const NavBar = () => {

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const openMenu = () => {
        setOpen(!open);
    }


    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return (
        <Fragment>
            <div className={`navbar-container ${scroll ? 'whiteBg' : 'transparent'}`}>
                <nav className="header__navbar container flex flex-jc-sb flex-ai-c" >
                    <img src={Logo} alt="logo" />
                    <ul className="header__navbar__options flex">

                        <Link to="#">Pricing</Link>

                        <Link to="#">Product</Link>

                        <Link to="#">About us</Link>

                        <Link to="#">Careers</Link>

                        <Link to="#">Community</Link>

                    </ul>
                    <Link href="" className="header__navbar__button flex flex-jc-c flex-ai-c button">Get Started</Link>
                    <div className={`${open === true ? 'open' : ''} hamburger`} onClick={() => openMenu()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>



            <div className={`${open === true ? 'overlay' : ''}`}></div>
            <div className="container">
                <div className={`${open === true ? 'togle container display-block' : ' display-none'}`}>
                    <Link to="#">Pricing</Link>
                    <Link to="#">Product</Link>
                    <Link to="#">About us</Link>
                    <Link to="#">Careers</Link>
                    <Link to="#">Community</Link>
                </div>
            </div>

        </Fragment>
    );
}

export default NavBar;