import React, { useState } from "react";
import './styles.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Nav(){
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY > 70) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return(
            <nav className={navbar ? 'navbar-active' : ''}>
                <div className="nav-links">
                    <ul>
                        <li><AnchorLink href="#header">Início</AnchorLink></li>
                        <li><AnchorLink offset = '70' href="#about">Sobre</AnchorLink></li>
                        <li><AnchorLink offset = '70' href="#resume">Currículo</AnchorLink></li>
                        <li><AnchorLink offset = '70' href="#MyProjects">Projetos</AnchorLink></li>
                        <li><AnchorLink offset = '70' href="#Contact">Contato</AnchorLink></li>
                    </ul>
                </div>
            </nav>
    );
}

export default Nav;