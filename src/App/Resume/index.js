import React, { useEffect, useState } from "react";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCertificate, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import Aos from "aos";
import "aos/dist/aos.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Resume(){
    const[activeEducation, setActiveEducation] = useState(false);
    const[activeExperience, setActiveExperience] = useState(false);
    const[activeSkills, setActiveSkills] = useState(false);
    const[activeCertificates, setActiveCertificates] = useState(false);

    const changeActive = () => {
        if(window.scrollY > 1700 && window.scrollY < 1950) {
            setActiveEducation(true);
        } else {
            setActiveEducation(false);
        }
        if(window.scrollY >= 1950 && window.scrollY < 2600) {
            setActiveExperience(true);
        } else {
            setActiveExperience(false);
        }
        if(window.scrollY >= 2600 && window.scrollY < 3450) {
            setActiveSkills(true);
        } else {
            setActiveSkills(false);
        }
        if(window.scrollY >= 3450 && window.scrollY < 3850) {
            setActiveCertificates(true);
        } else {
            setActiveCertificates(false);
        }
    }

    window.addEventListener('scroll', changeActive);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        });
    }, []);

    return(
        <div id="resume">
            <div className="wrapper">
                <div className="sidebarMenu">
                    <ul>
                        <li><AnchorLink className={activeEducation ? 'active' : 'link-education'} offset = '70' href="#section-education">Educação</AnchorLink></li>
                        <li><AnchorLink className={activeExperience ? 'active' : 'link-experience'} offset = '70' href="#section-experience">Experiência</AnchorLink></li>
                        <li><AnchorLink className={activeSkills ? 'active' : 'link-skills'} offset = '70' href="#section-skills">Habilidades</AnchorLink></li>
                        <li><AnchorLink className={activeCertificates ? 'active' : 'link-certificates'} offset = '70' href="#section-certificates">Certificados</AnchorLink></li>
                    </ul>
                </div>
                <div className="resume">
                        <div id="section-education">
                            <h2 className="resume-title">Educação</h2>
                            <div data-aos="fade-up" className="resume-item">
                                <FontAwesomeIcon className="icon" icon={faGraduationCap}></FontAwesomeIcon>
                                <h3 className="resume-year-text">2017-2021</h3>
                                <h3 className="resume-graduated-text">Bacharelado em Ciência da Computação</h3>
                                <h3 className="resume-university-text">Universidade Paulista</h3>
                                <p className="resume-descripton-text">Descrever um pouco do curso</p>
                            </div>
                        </div>
                    <div id="section-experience">
                        <h2 className="resume-title">Experiência</h2>
                        <div data-aos="fade-up" className="resume-item">
                            <FontAwesomeIcon className="icon" icon={faDiagramProject}></FontAwesomeIcon>
                            <h3 className="resume-year-text">2021-2022</h3>
                            <h3 className="resume-graduated-text">Assistente de Tecnologia Educacional</h3>
                            <h3 className="resume-university-text">Colégio Visconde de Porto Seguro</h3>
                            <p className="resume-descripton-text">Configuração, controle e cuidados com iPads usados em aula, agendar/controlar 
                            recursos da área de tecnologia educacional, orientar na elaboração de conteúdos 
                            digitais, orientar professores no uso de recursos digitais.</p>
                        </div>
                        <div data-aos="fade-up" className="resume-item">
                            <FontAwesomeIcon className="icon" icon={faDiagramProject}></FontAwesomeIcon>
                            <h3 className="resume-year-text">2017-2019</h3>
                            <h3 className="resume-graduated-text">Representante de Atenção ao Cliente</h3>
                            <h3 className="resume-university-text">Mercado Livre</h3>
                            <p className="resume-descripton-text">Identificar bugs reportados pelo cliente, personalização da resposta de acordo com 
                            os valores e padrões da empresa, atendimento via e-mail ou chat, localizar possíveis 
                            erros no processo.</p>
                        </div>
                    </div>
                    <div id="section-skills">
                        <h2 className="resume-title">Habilidades</h2>
                            <div data-aos="fade-up" className="skill-row">
                                <div className="skill-box">
                                    <h2>HTML5</h2>
                                    <div className="percent">
                                        <svg className="svg-html">
                                            <circle cx="70" cy="70" r="70"></circle>
                                            <circle cx="70" cy="70" r="70"></circle>
                                        </svg>
                                        <div className="num">
                                            <h3>95<span>%</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <h2>CSS3</h2>
                                        <div className="percent">
                                            <svg className="svg-css">
                                                <circle cx="70" cy="70" r="70"></circle>
                                                <circle cx="70" cy="70" r="70"></circle>
                                            </svg>
                                            <div className="num">
                                                <h3>85<span>%</span></h3>
                                            </div>
                                        </div>
                                </div>
                                <div className="skill-box">
                                    <h2>Javascript</h2>
                                        <div className="percent">
                                            <svg className="svg-js">
                                                <circle cx="70" cy="70" r="70"></circle>
                                                <circle cx="70" cy="70" r="70"></circle>
                                            </svg>
                                            <div className="num">
                                                <h3>70<span>%</span></h3>
                                            </div>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className="skill-progress-bar">
                                    <div className="progress-bar">
                                        <h2>React.js</h2>
                                        <div class="pb-principal">
                                            <div class="pb-blue-react">40%</div>
                                        </div>
                                    </div>
                                    <div className="progress-bar">
                                        <h2>Node.js</h2>
                                        <div class="pb-principal">
                                            <div class="pb-blue-node">30%</div>
                                        </div>
                                    </div>
                                    <div className="progress-bar">
                                        <h2>Bootstrap</h2>
                                        <div class="pb-principal">
                                            <div class="pb-blue-bootstrap">90%</div>
                                        </div>
                                    </div>
                                    <div className="progress-bar">
                                        <h2>MySQL</h2>
                                        <div class="pb-principal">
                                            <div class="pb-blue-mysql">70%</div>
                                        </div>
                                    </div>
                                    <div className="progress-bar">
                                        <h2>PHP</h2>
                                        <div class="pb-principal">
                                            <div class="pb-blue-php">60%</div>
                                        </div>
                                    </div>
                                    <div className="progress-bar">
                                        <h2>Laravel</h2>
                                        <div class="pb-principal">
                                            <div class="pb-blue-laravel">50%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div id="section-certificates">
                        <h2 className="resume-title">Certificados</h2>
                        <div data-aos="fade-up" className="resume-item">
                            <FontAwesomeIcon className="icon" icon={faCertificate}></FontAwesomeIcon>
                            <h3 className="resume-year-text">2020</h3>
                            <h3 className="resume-graduated-text">Scrum Foundation Professional Certificate (SFPC)</h3>
                            <h3 className="resume-university-text">CertiProf</h3>
                            <p className="resume-descripton-text">Certificação da metodologia de desenvolvimento ágil Scrum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;