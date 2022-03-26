import React from "react";
import './styles.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Nav(){
    return(
            <nav>
                <div className="nav-links">
                    <ul>
                        <li><AnchorLink href="#">Início</AnchorLink></li>
                        <li><AnchorLink href="#about">Sobre</AnchorLink></li>
                        <li><AnchorLink offset = '50' href="#resume">Currículo</AnchorLink></li>
                        <li><AnchorLink offset = '50' href="#">Projetos</AnchorLink></li>
                        <li><AnchorLink offset = '50' href="#contact">Contato</AnchorLink></li>
                    </ul>
                </div>
            </nav>
    );
}

export default Nav;