import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const Ejercicios = ({ tipoDeRutina }) => {
  const { id } = useParams();
  const rutina = tipoDeRutina.find((rutina) => rutina.id === parseInt(id));
  console.log(rutina);
  if (!rutina) {
    return <div>Rutina no encontrada</div>;
  }

  return (
    <div className="main_ejercicios">
      <h1 className="title_ejercicios">{rutina.name}</h1>
      <ul className="ul_ejercicios">
        {/* Verifica si al menos un ejercicio tiene 'conEquipo' */}
        {Object.values(rutina.ejercicios).some(ejercicio => ejercicio.conEquipo) && (
          <>
            <h2>🏋️‍♂️ Rutina con equipo</h2>
            {Object.entries(rutina.ejercicios).map((item, index) => (
              item[1].conEquipo && (
                <div className="cont_ejercicios" key={index}>
                  <li>⚡ {item[1].conEquipo}</li>
                </div>
              )
            ))}
          </>
        )}
        
        {/* Verifica si al menos un ejercicio tiene 'sinEquipo' */}
        {Object.values(rutina.ejercicios).some(ejercicio => ejercicio.sinEquipo) && (
          <>
            <h2>📌 Rutina sin equipo </h2>
            {Object.entries(rutina.ejercicios).map((item, index) => (
              item[1].sinEquipo && (
                <div className="cont_ejercicios" key={index}>
                  <li>⚡ {item[1].sinEquipo}</li>
                </div>
              )
            ))}
          </>
        )}
      </ul>
    </div>
  );
};
Ejercicios.propTypes = {
  tipoDeRutina: PropTypes.array.isRequired,
};
