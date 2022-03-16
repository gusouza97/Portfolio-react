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
                        <div data-aos="fade-up" className="resume-item">
                            <FontAwesomeIcon className="icon" icon={faGraduationCap}></FontAwesomeIcon>
                            <h3 className="resume-year-text">2014-2015</h3>
                            <h3 className="resume-graduated-text">Bacharelado em Ciência da Computação</h3>
                            <h3 className="resume-university-text">Universidade Paulista</h3>
                            <p className="resume-descripton-text">Descrever um pouco do curso</p>
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