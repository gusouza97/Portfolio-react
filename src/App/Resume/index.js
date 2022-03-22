import React, { useEffect } from "react";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Aos from "aos";
import "aos/dist/aos.css";

function Resume(){
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        });
    }, []);

    return(
            <div className="wrapper">
                <div className="sidebarMenu">
                    <ul>
                        <li>Educação</li>
                        <li>Experiência</li>
                        <li>Habilidades</li>
                        <li>Certificados</li>
                    </ul>
                </div>
                <div className="resume">
                    <div className="section-education">
                        <h2 className="resume-title">Educação</h2>
                        <div data-aos="fade-up" className="resume-item">
                            <FontAwesomeIcon className="icon" icon={faGraduationCap}></FontAwesomeIcon>
                            <h3 className="resume-year-text">2014-2015</h3>
                            <h3 className="resume-graduated-text">Bacharelado em Ciência da Computação</h3>
                            <h3 className="resume-university-text">Universidade Paulista</h3>
                            <p className="resume-descripton-text">Descrever um pouco do curso</p>
                        </div>
                        <div data-aos="fade-up" className="resume-item">
                            <FontAwesomeIcon className="icon" icon={faGraduationCap}></FontAwesomeIcon>
                            <h3 className="resume-year-text">2014-2015</h3>
                            <h3 className="resume-graduated-text">Bacharelado em Ciência da Computação</h3>
                            <h3 className="resume-university-text">Universidade Paulista</h3>
                            <p className="resume-descripton-text">Descrever um pouco do curso</p>
                        </div>
                        <div data-aos="fade-up" className="resume-item">
                            <FontAwesomeIcon className="icon" icon={faGraduationCap}></FontAwesomeIcon>
                            <h3 className="resume-year-text">2014-2015</h3>
                            <h3 className="resume-graduated-text">Bacharelado em Ciência da Computação</h3>
                            <h3 className="resume-university-text">Universidade Paulista</h3>
                            <p className="resume-descripton-text">Descrever um pouco do curso</p>
                        </div>
                    </div>
                    <div className="section-experience">
                        <h2 className="resume-title">Experiência</h2>
                        <div data-aos="fade-up" className="resume-item">
                            <FontAwesomeIcon className="icon" icon={faGraduationCap}></FontAwesomeIcon>
                            <h3 className="resume-year-text">2014-2015</h3>
                            <h3 className="resume-graduated-text">Bacharelado em Ciência da Computação</h3>
                            <h3 className="resume-university-text">Universidade Paulista</h3>
                            <p className="resume-descripton-text">Descrever um pouco do curso</p>
                        </div>
                        <div data-aos="fade-up" className="resume-item">
                            <FontAwesomeIcon className="icon" icon={faGraduationCap}></FontAwesomeIcon>
                            <h3 className="resume-year-text">2014-2015</h3>
                            <h3 className="resume-graduated-text">Bacharelado em Ciência da Computação</h3>
                            <h3 className="resume-university-text">Universidade Paulista</h3>
                            <p className="resume-descripton-text">Descrever um pouco do curso</p>
                        </div>
                    </div>
                    <div className="section-skills">
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
                    <div className="section-certificates">
                        <h2 className="resume-title">Certificados</h2>
                        <div data-aos="fade-up" className="resume-item">
                            <FontAwesomeIcon className="icon" icon={faGraduationCap}></FontAwesomeIcon>
                            <h3 className="resume-year-text">2014-2015</h3>
                            <h3 className="resume-graduated-text">Bacharelado em Ciência da Computação</h3>
                            <h3 className="resume-university-text">Universidade Paulista</h3>
                            <p className="resume-descripton-text">Descrever um pouco do curso</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Resume;