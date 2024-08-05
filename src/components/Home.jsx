import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/home.css"
import { Link } from "react-router-dom";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";


export const Home = () => {
  return (
    <>
      <section className="section_hero">
        <h1 className="hero_title">Rutinas de entrenamiento en casa</h1>
        <h3 className="hero_subtitle">
          Como <span>entrenar</span> desde tu <span>hogar</span> y conseguir{" "}
          <span>resultados</span>
        </h3>
        <b className="flecha"><FontAwesomeIcon className="icon-flecha" icon={faCircleArrowDown}/></b>
      </section>
      <section className="section_nosotros">
        <div className="nosotros_cont_text">
          <h2 className="nosotros_title">
            Entrenamiento en casa: ¡Tu cambio corporal al alcance de un clic!
          </h2>
        </div>
        <article className="cont_card" id="rutinas">
          <div className="card">
            <div className="card_cont_img">
              <img
                src="/images/musculacion-entrenamiento.webp"
                alt="musculacion en casa"
                className="card_img"
              />
            </div>
            <div className="card_content">
              <h3>Musculacion</h3>
              <p>
                Rutinas para la ganacia de masa muscular de direntes grupos musculares.
              </p>
              <div className="card_tags">
                <div className="tags">Hipertrofia</div>
                <div className="tags">Volumen</div>
                <div className="tags">En casa</div>
                <div className="tags">Definicion</div>
                <div className="tags">Musculacion</div>
              </div>
              <Link to={"/rutinas-musculacion"} className="link">Ver Rutinas Musculación</Link>
            </div>
          </div>

          <div className="card">
            <div className="card_cont_img">
              <img
                src="/images/cuerpo-completo-en-casa.jpg"
                alt="cuerpo completo en casa"
                className="card_img"
              />
            </div>
            <div className="card_content">
              <h3>Cuerpo Entero</h3>
              <p>
                Ideal para entrenar pocas veces por semana, entrenamientos que
                abarcan todo el cuerpo
              </p>
              <div className="card_tags">
                <div className="tags">En casa</div>
                <div className="tags">Facil</div>
                <div className="tags">Sin equipamiento</div>
                <div className="tags">Peso corporal</div>
                <div className="tags">Rapido</div>
              </div>
              <Link to={"/rutinas-cuerpo-entero"} className="link">Ver Rutinas Cuerpo Entero</Link>
            </div>
          </div>

          <div className="card">
            <div className="card_cont_img">
              <img
                src="/images/cardio-en-casa.jpeg"
                alt="cardio en casa"
                className="card_img cardio_img"
              />
            </div>
            <div className="card_content">
              <h3>Cardio</h3>
              <p>
                Ejercicios efectivos para complementar deficits calóricos, y
                perder peso
              </p>
              <div className="card_tags">
                <div className="tags">Perder peso</div>
                <div className="tags">Cuerpo Atletico</div>
                <div className="tags">Definicion</div>
                <div className="tags">Hiit</div>
                <div className="tags">liis</div>
                <div className="tags">En casa</div>
              </div>
              <Link to={"/rutinas-cardio"} className="link">Ver Rutinas Cardio</Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
