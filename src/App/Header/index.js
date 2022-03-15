import React, { useState } from "react";
import Nav from '../Nav/index';
import './styles.css';
import Typewriter from 'typewriter-effect';

/* Componente Header */

function Header(){

    return(
        <header>
            <Nav />
            <div className="header-presentation">
                <h1>Olá! Meu nome é</h1>
                <h2>Gustavo Souza</h2>
                <p>
                <Typewriter
                    options={{
                        skipAddStyles: true,
                        strings: ['Eu sou desenvolvedor!', 'Desenvolvendo o futuro!'],
                        autoStart: true,
                        loop: true
                    }}
                /></p>
            </div>
        </header>
    );
}

export default Header;
