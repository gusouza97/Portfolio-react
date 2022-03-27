import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';
import { faMailReply } from "@fortawesome/free-solid-svg-icons";

function Contact(){
    return(
        <div id="Contact">
            <div className="wrapper">
                <h2>Contato</h2>
                <p>Entre em contato atraves das opcoes abaixo</p>
                <div className="contact-row">
                    <div className="contact-item">
                        <FontAwesomeIcon className="icon" icon={faLinkedin}></FontAwesomeIcon>
                        <h3>Linkedin</h3>
                        <a href="https://www.linkedin.com/in/gustavo-silva-souza/">Linkedin >></a>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon className="icon" icon={faWhatsapp}></FontAwesomeIcon>
                        <h3>Whatsapp</h3>
                        <a href="#"></a>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon className="icon" icon={faMailReply}></FontAwesomeIcon>
                        <h3>E-mail</h3>
                        <a href="#"></a>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
                        <h3>Instagram</h3>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;