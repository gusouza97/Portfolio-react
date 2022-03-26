import React from "react";
import "./styles.css";
import Project001 from '../../img/project001.PNG';

function MyProjects(){
    return(
        <div id="MyProjects">
            <div className="wrapper">
                <h2>Meus Projetos</h2>
                <p>Confira meus projetos desenvolvidos em diversas linguagens</p>
                <div className="MyProjects-Row">
                    <div className="MyProjects-Item">
                        <img src={Project001}></img>
                        <h3>Front-end Nubank</h3>
                        <p>HTML e CSS</p>
                    </div>
                    <div className="MyProjects-Item">
                        <img src={Project001}></img>
                        <h3>Front-end Nubank</h3>
                        <p>HTML e CSS</p>
                    </div>
                    <div className="MyProjects-Item">
                        <img src={Project001}></img>
                        <h3>Front-end Nubank</h3>
                        <p>HTML e CSS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;