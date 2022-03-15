import React from "react";
import './styles.css';

function Nav(){
    return(
            <nav>
                <div className="nav-links">
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Currículo</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>
            </nav>
    );
}

export default Nav;