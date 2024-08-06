import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavBar = ({ visible }) => {
  return (
    <nav className={`nav ${visible}`}>
      <ul className="nav_ul">
        <li>
          <Link className="link_ul_header" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="link_ul_header" to="/como-entrenar">
            Como Entrenar
          </Link>
        </li>
        <li>
          <Link className="link_ul_header" to="/calculadora-de-calorias">
            Calculadora de Calorias
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export function Header() {
  const [showNav, setShowNav] = useState(false);

  const handleButton = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="hader">
      <div className="logo">
        <div className="cont_logo">
          <img src="images/LogoGym.png" alt="logo app"></img>
        </div>
        <b>GYMM22</b>
      </div>
      {showNav ? <NavBar visible="show" /> : <NavBar visible="hide" />}
      {showNav ? (
        <FontAwesomeIcon onClick={handleButton} icon={faX} className="icon_header" />
      ) : (
        <FontAwesomeIcon onClick={handleButton} icon={faBars} className="icon_header"/>
      )}
    </header>
  );
}
