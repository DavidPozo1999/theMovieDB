import React from "react";
import logo from '../imagenes/LOGODAVIDEO.png'
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import '../hojas_estilo/footer.css'
function Footer(){
    return(
        <footer class="pie">
        <div class="header">
            <div class="logo">
                <img src={logo} alt="" />
                <p class="logotipo">Informatica Studios</p>
            </div>
            <div class="redes">
                <span class="fb"><FaFacebookSquare/></span>
                <span class="tw"><FaXTwitter /></span>
                <span class="in"><IoLogoInstagram /></span>
                <span class="li"><FaLinkedin /></span>
                <span class="yt"><FaYoutube /></span>
            </div>
        </div>
        <hr />
        <div class="footer-options-section">
            <div>
                <h2>Explorar</h2>
                <a href="#">Populares</a>
                <a href="#">Mejor valoradas</a>
                <a href="#">Ultimos estrenos</a>
                <a href="#">Por género</a>
            </div>
            <div>
                <h2>Información</h2>
                <a href="#">Sobre nosotros</a>
                <a href="#">Contacto</a>
                <a href="#">Preguntas frecuentes</a>
                <a href="#">Términos de servicio</a>
            </div>
            <div>
                <h2>Recursos</h2>
                <a href="#">Blog</a>
                <a href="#">Guías</a>
                <a href="#">Trailers</a>
                <a href="#">Criticas y reseñas</a>
            </div>
            <div>
                <h2>Soporte</h2>
                <a href="#">Centro de ayuda</a>
                <a href="#">Política de privacidad</a>
                <a href="#">Reportar un problema</a>
                <a href="#">Preguntas frecuentes</a>
            </div>
            <div>
                <h2>Suscribe</h2>
                <form action="" className="form-footer">
                    <input type="text" placeholder="Enter your Email" />
                    <button type="submit">Suscribe</button>
                </form>
            </div>
        </div>
        <hr />
        <div class="derechos">
            <p>Copyright©2022Informatica Studios. All right reserved</p>
            <p>Privacy Policy  Terms and conditions</p>
        </div>
    </footer>
    )
}

export default Footer