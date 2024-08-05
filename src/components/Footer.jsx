import { Link } from "react-router-dom"
import "./styles/footer.css"
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>GymMotivacion22</h2>
          <p>
            Tu sitio de confianza para encontrar las mejores rutinas de entrenamiento en casa. ¡Mantente motivado y alcanza tus metas!
          </p>
        </div>
        <div className="footer-section links">
          <h2>Enlaces Útiles</h2>
          <ul>
          <li>
          <Link className="link_ul_footer" to="/terminos-condiciones">
            Terminos y Condiciones
          </Link>
        </li>
        <li>
          <Link className="link_ul_footer" to="/politica-privacidad">
            Politica De Privacidad
          </Link>
        </li>           
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contacto</h2>
          <p><i className="fas fa-envelope"></i> gymmotivacion22@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} GymMotivacion22 | Todos los derechos reservados.
      </div>
    </footer>
  )
}
