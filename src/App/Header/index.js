import React, { useEffect } from "react";
import Nav from '../Nav/index';
import './styles.css';
import Typewriter from 'typewriter-effect';
import Aos from "aos";
import "aos/dist/aos.css";

/* Componente Header */

function Header(){
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        });
    }, []);

    return(
        <header>
            <Nav />
            <div className="header-presentation">
                <h1 data-aos="fade-up">Olá! Meu nome é</h1>
                <h2 data-aos="fade-up">Gustavo Souza</h2>
                <p data-aos="fade-up">
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
