import React from "react";
import "../css/footer.css";
import fb from '../asset/img/social/facebook.png'
import twitter from '../asset/img/social/twitter.png'
import instagram from '../asset/img/social/instagram.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>Para Negocios</h4>
                        <a href="/empleador">
                            <p>Empleador</p>
                        </a>
                        <a href="/plan-de-salud">
                            <p>Plan de Salud</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Recursos</h4>
                        <a href="/centro-de-recursos">
                            <p>Centro de Recursos</p>
                        </a>
                        <a href="/testimonios">
                            <p>Testimonios</p>
                        </a>
                        <a href="/stv">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Aliados</h4>
                        <a href="/empleador">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Empresa</h4>
                        <a href="/acerca-de">
                            <p>Acerca de</p>
                        </a>
                        <a href="/prensa">
                            <p>Prensa</p>
                        </a>
                        <a href="/carrera">
                            <p>Carrera</p>
                        </a>
                        <a href="/contacto">
                            <p>Contacto</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Próximamente en</h4>
                        <p><img src={fb} alt="Facebook"></img></p>
                        <p><img src={twitter} alt="Twitter"></img></p>
                        <p><img src={instagram} alt="Instagram"></img></p>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} CodeInn. Todos los derechos reservados.
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terminos"><div><p>Términos y Condiciones</p></div></a>
                    <a href="/privacidad"><div><p>Privacidad</p></div></a>
                    <a href="/seguridad"><div><p>Seguridad</p></div></a>
                    <a href="/cookie"><div><p>Declaración de Cookies</p></div></a>
                </div>
            </div>
        </div>
    )
}
