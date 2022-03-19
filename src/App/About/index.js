import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faPhp, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import SobreImg from '../../img/about-img.jpg';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

function About(){

    const [state, setState] = useState(true);

    return(
    <div>
        <div className="about">
            <img src={SobreImg} alt="imagem IA"/>
            
            <div data-aos="fade-up" className="about-text">
                <h2>Sobre Mim</h2>
                <p>Amante da tecnologia desde 2012 e sempre apresentando muita curiosidade para aprender cada vez mais! Minhas maiores paixões são desenvolvimento, investimentos, futebol e astronomia.</p>
                <table>
                    <tr>
                        <td className="table-title-row">Nome:</td>
                        <td className="table-info-row">Gustavo Souza</td>
                    </tr>
                    <tr>
                        <td className="table-title-row">Nascimento:</td>
                        <td className="table-info-row">3 de Outubro, 1997</td>
                    </tr>
                    <tr>
                        <td className="table-title-row">Endereço:</td>
                        <td className="table-info-row">Osasco - SP</td>
                    </tr>
                    <tr>
                        <td className="table-title-row">Email:</td>
                        <td className="table-info-row">...</td>
                    </tr>
                    <tr>
                        <td className="table-title-row">Telefone:</td>
                        <td className="table-info-row">+55 (11) 94747-2059</td>
                    </tr>
                </table>

                <CountUp end={120} onEnd= {() => {
                    setState(false);
                    }} >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor active={state} onChange={start}>
                                <h3><span ref={countUpRef} /> Projetos completos</h3>
                            </VisibilitySensor>
                        )}
                </CountUp>
                
                <a className="view-linkedin" href="https://www.linkedin.com/in/gustavo-silva-souza/" target="_blank">LINKEDIN</a>
                <a className="download-cv" href="#">DOWNLOAD CV</a>
            </div>
        </div>
        <div className="skills">
            <div data-aos="fade-up" className="skills-icons">
                <FontAwesomeIcon className="icon" icon={faHtml5}></FontAwesomeIcon>
                <FontAwesomeIcon className="icon" icon={faCss3Alt}></FontAwesomeIcon>
                <FontAwesomeIcon className="icon" icon={faJs}></FontAwesomeIcon>
                <FontAwesomeIcon className="icon" icon={faReact}></FontAwesomeIcon>
                <FontAwesomeIcon className="icon" icon={faNodeJs}></FontAwesomeIcon>
                <FontAwesomeIcon className="icon" icon={faPhp}></FontAwesomeIcon>
            </div>
        </div>
    </div>
    );
}

export default About;