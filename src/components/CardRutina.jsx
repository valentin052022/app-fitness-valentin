import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const CardRutina = ({ objetorutina, tipo }) => {
  return (
    <main>
      {objetorutina.map((item, index) => (
        <div className="card_rutinas" key={index}>
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
          <div className="cont_link_rutina">
            <Link className="link_rutina" to={`${tipo}/${item.id}`}>
              {<FontAwesomeIcon icon={faArrowRightFromBracket} />}
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
};

CardRutina.propTypes = {
  objetorutina: Proptypes.array.isRequired,
  tipo: Proptypes.string.isRequired,
};
