import React from "react";
import "./styles.css";
import Project001 from '../../img/project001.PNG';
import Project002 from '../../img/project002.PNG';

function MyProjects(){
    return(
        <div id="MyProjects">
            <div className="wrapper">
                <h2>Meus Projetos</h2>
                <p>Confira meus projetos desenvolvidos em diversas linguagens</p>
                <div className="MyProjects-Row">
                <div data-aos="fade-up" className="MyProjects-Item">
                        <img src={Project001}></img>
                        <div className="MyProjects-Text">
                            <h3>Site Nubank - Front-end</h3>
                            <p>HTML e CSS</p>
                            <a href="https://github.com/gusouza97/Nubank-Site" target="_blank">Abrir Github</a>
                            <a href="https://gusouza97.github.io/Nubank-Site/" target="_blank">Visualizar</a>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="MyProjects-Item">
                        <img src={Project002}></img>
                        <div className="MyProjects-Text">
                            <h3>Site Porftolio</h3>
                            <p>HTML, CSS, JS e React.js</p>
                            <a href="https://github.com/gusouza97/Portfolio-react" target="_blank">Abrir no Github</a>
                            <a href="#" target="_blank">Visualizar</a>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="MyProjects-Item">
                        <img src={Project001}></img>
                        <div className="MyProjects-Text">
                            <h3>Front-end Nubank</h3>
                            <p>HTML e CSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;