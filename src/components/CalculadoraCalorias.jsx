import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/calculadora.css";
import { faFemale, faMale } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Proptypes from "prop-types";

// eslint-disable-next-line no-unused-vars
const ShowResult = ({ sexo, edad, altura, peso, actividad, objetivo }) => {
  const [tmb, setTmb] = useState(0);
  const [result, setResult] = useState(0);
  const [macros, setMacros] = useState({proteina: 0, grasas: 0, carbohidratos: 0});

  useEffect(() => {
    let TMB = 0;
    if (sexo === "hombre") {
      TMB = 88.36 + (13.39 * peso) + (4.79 * altura) - (5.67 * edad);
    } else if (sexo === "mujer") {
      TMB = 447.59 + (9.24 * peso) + (3.09 * altura) - (4.33 * edad);
    }

    let actividadFactor = 1;
    switch (actividad) {
      case "poca":
        actividadFactor = 1.1;
        break;
      case "moderado":
        actividadFactor = 1.25;
        break;
      case "mucha":
        actividadFactor = 1.45;
        break;
      default:
        actividadFactor = 0;
        break;
    }
    setTmb(TMB);

    let caloriasFinales;
    switch (objetivo) {
      case "mantener":
        caloriasFinales = tmb * actividadFactor;
        macros.proteina = caloriasFinales * 0.25 / 4;
        macros.grasas = caloriasFinales * 0.25 / 9;
        macros.carbohidratos = caloriasFinales * 0.50 / 4;
        setMacros(macros)
        break;
      case "ganar":
        caloriasFinales = (tmb * actividadFactor) * 1.13;
        macros.proteina = caloriasFinales * 0.35 / 4;
        macros.grasas = caloriasFinales * 0.20 / 4;
        macros.carbohidratos = caloriasFinales * 0.45 / 4;
        setMacros(macros)
        break
      case "perder": 
        caloriasFinales = (tmb *  actividadFactor) * 0.90;
        macros.proteina = caloriasFinales * 0.25 / 4;
        macros.grasas = caloriasFinales * 0.20 / 9;
        macros.carbohidratos = caloriasFinales * 0.55 / 4;
        setMacros(macros)
        break
      default:
        caloriasFinales = tmb * actividadFactor;
        setMacros(macros)
        break;
    }
    setResult(caloriasFinales)    
  }, [sexo, edad, altura, peso, actividad, objetivo, tmb, macros]);

  return (
    <main className="main_result">
      <h2>RESULTADO</h2>
      <section className="cont_TMB">
        <div className="metabolismo">
          <b>Tasa Metabolismo Basal - </b>
          <b>{tmb.toFixed(0)}</b>
        </div>
        <div className="calorias_objetivo">
          <b>Calorias Objetivas - {objetivo} - </b>
          <b>{result.toFixed(0)}</b>
        </div>
      </section>
      <section className="cont_macros">
        <div className="macro">🧈 Grasas: {macros.grasas.toFixed(0)}g</div>
        <div className="macro">🍗 Proteinas: {macros.proteina.toFixed(0)}g</div>
        <div className="macro">🍞 Carbohidratos: {macros.carbohidratos.toFixed(0)}g</div>
      </section>
    </main>
  );
};

ShowResult.propTypes = {
  sexo: Proptypes.string.isRequired,
  edad: Proptypes.number.isRequired,
  altura: Proptypes.number.isRequired,
  peso: Proptypes.number.isRequired,
  actividad: Proptypes.string.isRequired,
  objetivo: Proptypes.string.isRequired,
};

export const CalculadoraCalorias = () => {
  const [clickSelect, setMenActive] = useState("ninguno");
  const [actividadCard, setActividadCard] = useState("ninguno");
  const [objetivo, setObjetivo] = useState("ninguno");
  const [edad, setEdad] = useState(null);
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [ver, setVer] = useState(false);

  const clickSex = (sexo) => {
    setMenActive(sexo);
  };

  const clickPoca = (cant) => {
    setActividadCard(cant);
  };

  const clickObjetivo = (objetivo) => {
    setObjetivo(objetivo);
  };

  const handleEdad = (e) => {
    setEdad(e.target.value);
  };
  const handleAltura = (e) => {
    setAltura(e.target.value);
  };
  const handlePeso = (e) => {
    setPeso(e.target.value);
  };

  const resultado = (event) => {
    event.preventDefault();
    console.log(clickSelect, actividadCard, edad, altura, peso, objetivo);
  };

  const verResultado = () =>{
    setVer(true)
  }

  return (
    <main className="main_calculadora">
      <form action="#" onSubmit={resultado}>
        <section className="info_basica">
          <h2>INFORMACION BASICA</h2>
          <div className="cont_input full-width sexo">
            <FontAwesomeIcon
              icon={faMale}
              className={`hombre ${
                clickSelect == "hombre" ? "blueCard" : "ninguno"
              }`}
              onClick={() => clickSex("hombre")}
            />
            <FontAwesomeIcon
              icon={faFemale}
              className={`hombre ${
                clickSelect == "mujer" ? "blueCard" : "ninguno"
              }`}
              onClick={() => clickSex("mujer")}
            />
          </div>
          <div className="cont_input edad">
            <label htmlFor="edad">Edad</label>
            <input
              type="number"
              name="edad"
              id="edad"
              max={99}
              onChange={handleEdad}
            />
          </div>
          <div className="cont_input altura">
            <label htmlFor="altura">Altura - cm</label>
            <input
              type="text"
              name="altura"
              id="altura"
              maxLength={3}
              onChange={handleAltura}
            />
          </div>
          <div className="cont_input peso">
            <label htmlFor="peso">Peso - kg</label>
            <input
              type="float"
              name="peso"
              id="peso"
              maxLength={5}
              onChange={handlePeso}
            />
          </div>
        </section>

        <section className="actividad_fisica">
          <h2>NIVEL DE ACTIVIDAD</h2>
          <div
            className={`cont_card_actividad_fisica ${
              actividadCard == "poca" ? "blueCard" : "ninguno"
            }`}
            onClick={() => clickPoca("poca")}
          >
            <h3>Poca</h3>
            <p>
              Mayor parte del dia sentado y no hace actividad fisica en la
              semana
            </p>
          </div>
          <div
            className={`cont_card_actividad_fisica ${
              actividadCard == "moderado" ? "blueCard" : "ninguno"
            }`}
            onClick={() => clickPoca("moderado")}
          >
            <h3>Moderado</h3>
            <p>Tiene actividad en el dia, y entrena de 1-3 veces por semana</p>
          </div>
          <div
            className={`cont_card_actividad_fisica mucha ${
              actividadCard == "mucha" ? "blueCard" : "ninguno"
            }`}
            onClick={() => clickPoca("mucha")}
          >
            <h3>Mucha</h3>
            <p>Tiene actividad en el dia, y entrena de 4-6 veces por semana</p>
          </div>
        </section>

        <section className="section_objetivo">
          <h2>ELIGE TU OBJETIVO</h2>
          <div
            className={`cont_card_objetivo ${
              objetivo == "ganar" ? "blueCard" : "ninguno"
            }`}
            onClick={() => clickObjetivo("ganar")}
          >
            <h3>GANAR PESO</h3>
          </div>
          <div
            className={`cont_card_objetivo ${
              objetivo == "mantener" ? "blueCard" : "ninguno"
            }`}
            onClick={() => clickObjetivo("mantener")}
          >
            <h3>MANTENERSE</h3>
          </div>
          <div
            className={`cont_card_objetivo ${
              objetivo == "perder" ? "blueCard" : "ninguno"
            }`}
            onClick={() => clickObjetivo("perder")}
          >
            <h3>PERDER PESO</h3>
          </div>
        </section>
        <button type="submit" onClick={verResultado}>CALCULAR</button>
      </form>

      {ver ? <ShowResult
        actividad={actividadCard}
        altura={parseInt(altura)}
        peso={parseFloat(peso)}
        edad={parseInt(edad)}
        objetivo={objetivo}
        sexo={clickSelect}
      /> : <></>}
      
    </main>
  );
};
