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
                <p>Entre em contato através das opções abaixo</p>
                <div className="contact-row">
                    <div className="contact-item">
                        <a href="https://www.linkedin.com/in/gustavo-silva-souza/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedin}></FontAwesomeIcon></a>
                        <h3>Linkedin</h3>
                    </div>
                    <div className="contact-item">
                        <a href="https://api.whatsapp.com/send?phone=5511947472059&text=Ol%C3%A1!%20" target="_blank"><FontAwesomeIcon className="icon" icon={faWhatsapp}></FontAwesomeIcon></a>
                        <h3>Whatsapp</h3>
                    </div>
                    <div className="contact-item">
                        <a href="mailto:gustavosilva419@gmail.com" target="_blank"><FontAwesomeIcon className="icon" icon={faMailReply}></FontAwesomeIcon></a>
                        <h3>E-mail</h3>
                    </div>
                    <div className="contact-item">
                        <a href="https://www.instagram.com/xsou_zack/" target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon></a>
                        <h3>Instagram</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;