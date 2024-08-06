import "./styles/comoEntrenar.css";

export const ComoEntrenar = () => {
  return (
    <section className="section_comoEntrenar">
      <h1>
        Aprendé todos los conceptos necesarios para aprender a entrenar y
        armarte tus propias rutinas
      </h1>
      <article>
        <ol>
          <h3 className="section_conceptos_title">
            Coneceptos que aprenderas:
          </h3>
          <li className="conceptos">
            <a className="concepto_link" href="#volumen">
              Volumen de Entrenamiento
            </a>
          </li>
          <li className="conceptos">
            <a className="concepto_link" href="#frecuencia">
              Frecuencia de Entrenamiento
            </a>
          </li>
          <li className="conceptos">
            <a className="concepto_link" href="#intensidad">
              Intensidad
            </a>
          </li>
          <li className="conceptos">
            <a className="concepto_link" href="#progresion">
              Progresion
            </a>
          </li>
          <li className="conceptos">
            <a className="concepto_link" href="#rir">
              RIR: Repeticiones en reserva
            </a>
          </li>
          <li className="conceptos">
            <a className="concepto_link" href="#tiposDeEjercicios">
              Tipos de Ejercicios
            </a>
          </li>
          <li className="conceptos">
            <a className="concepto_link" href="#descanso">
              Descanso y recuperacion
            </a>
          </li>
          <li className="conceptos">
            <a className="concepto_link" href="#nutricion">
              Nutricion
            </a>
          </li>
          <li className="conceptos">
            <a className="concepto_link" href="#comoCrearMisRutinas">
              Como hacer mis propias rutinas.
            </a>
          </li>
        </ol>
      </article>

      <article className="article_concepto">
      <h3  className="article_title">Guia Completa para que organices tus ruitnas</h3>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/KXnOryN4ENc?si=iiqEq5-uhW8RacoN"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p>Propiedad de: Andres Vazquez Personal Trainer</p>
      </article>
      <article className="article_concepto" id="volumen">
      
        <h3 className="article_title">Volumen de entrenamiento:</h3>
        <p>
          Se refiere a la cantidad total de trabajo que realizas en tus sesiones
          de ejercicio. Se calcula multiplicando el número de series por el
          número de repeticiones por la carga (peso) utilizada. Es un factor
          crucial para estimular el crecimiento muscular y la fuerza.
        </p>
        <ul className="article_ul">
          <li>
            <b>Ejemplo:</b> Si haces 3 series de 12 repeticiones de press de
            banca con 60 kg, el volumen de entrenamiento sería 3 x 12 x 60 =
            2160 kg.
          </li>
          <li>
            <b> Recomendación:</b> Para ganar masa muscular, un volumen de
            entrenamiento semanal de 10-20 series por grupo muscular es
            generalmente efectivo. Esto puede variar según la experiencia de
            cada persona y su capacidad de recuperación.
          </li>
        </ul>
      </article>

      <article className="article_concepto" id="frecuencia">
        <h3 className="article_title">Frecuencia de entrenamiento</h3>
        <p>
          La frecuencia se refiere a cuántas veces se entrena un grupo muscular
          específico por semana. Una mayor frecuencia permite una mayor
          oportunidad para estimular el músculo y promover la síntesis de
          proteínas musculares.
        </p>
        <ul className="article_ul">
          <li>
            <b>Ejemplo:</b> Entrenar los músculos del pecho los lunes y jueves.
          </li>
          <li>
            <b>Recomendación:</b> Para la mayoría de las personas, entrenar cada
            grupo muscular 2-3 veces por semana puede ser óptimo, distribuyendo
            el volumen de entrenamiento total para maximizar la recuperación y
            el crecimiento muscular.
          </li>
        </ul>
      </article>
      <article className="article_concepto" id="intensidad">
        <h3 className="article_title">Intensidad</h3>
        <p>
          {" "}
          La intensidad del entrenamiento se refiere al esfuerzo relativo
          necesario para realizar un ejercicio, a menudo medido como un
          porcentaje de tu 1RM (una repetición máxima). La intensidad adecuada
          varía según los objetivos de entrenamiento, como la fuerza, la
          hipertrofia o la resistencia muscular.
        </p>
        <ul className="article_ul">
          <li>
            <b>Ejemplo:</b> Si tu 1RM en el press de banca es de 100 kg, y haces
            series con 75 kg, estás trabajando al 75% de tu 1RM.
          </li>
          <li>
            <b>Recomendación:</b> Para la hipertrofia, trabajar en un rango de
            65-85% del 1RM es generalmente efectivo. Para la fuerza máxima,
            trabajar en el rango de 85-100% del 1RM es más adecuado.
          </li>
        </ul>
      </article>
      <article className="article_concepto" id="progresion">
        <h3 className="article_title">Progresion</h3>
        <p>
          La progresión o sobrecarga progresiva es aumentar gradualmente la
          carga, el volumen o la intensidad del entrenamiento para continuar
          desafiando al cuerpo y evitar el estancamiento. Es esencial para las
          adaptaciones continuas y mejoras en la fuerza y el tamaño muscular.
        </p>
        <ul className="article_ul">
          <li>
            <b>Ejemplo:</b> Aumentar el peso en un ejercicio en 2.5 kg cada
            semana o añadir una serie adicional cada pocas semanas.
          </li>
          <li>
            <b>Recomendación:</b> Aplicar la sobrecarga progresiva,
            incrementando asi la demanda del entrenamiento para estimular
            mejoras constantes.
          </li>
        </ul>
      </article>
      <article className="article_concepto" id="rir">
        <h3 className="article_title">RIR: Repeticiones en reserva</h3>
        <p>
          RIR es una medida de cuántas repeticiones crees que podrías realizar
          al final de una serie antes de llegar al fallo muscular. Es una
          herramienta útil para gestionar la intensidad y asegurar que estás
          entrenando lo suficientemente duro sin sobreentrenarte.
        </p>
        <ul className="article_ul">
          <li>
            <b>Ejemplo:</b> Si estás haciendo una serie de sentadillas y puedes
            hacer 10 repeticiones, pero sientes que podrías haber hecho 2 más
            antes de fallar, tu RIR sería 2.
          </li>
          <li>
            <b>Recomendación:</b> Utilizar un RIR de 1-3 en la mayoría de los
            ejercicios para asegurar que estás trabajando cerca del fallo
            muscular, lo que es efectivo para el crecimiento muscular y la
            fuerza sin comprometer la recuperación.
          </li>
        </ul>
      </article>
      <article className="article_concepto" id="tiposDeEjercicios">
        <h3 className="article_title">Tipos de Ejercicios</h3>
        <ul className="article_ul">
          <li>
            <b>Ejercicios Compuestos:</b> Involucran múltiples grupos musculares
            y articulaciones, lo que permite levantar más peso y estimular un
            mayor crecimiento muscular. Ejemplos: sentadillas, press de banca,
            peso muerto.
          </li>
          <li>
            <b>Ejercicios Aislados:</b> Enfocados en un solo grupo muscular o
            articulación, útiles para trabajar músculos específicos o corregir
            desequilibrios. Ejemplos: curl de bíceps, extensiones de tríceps.
          </li>
          <li>
            <b>Recomendación:</b> Priorizar ejercicios compuestos para construir
            una base sólida de fuerza y añadir ejercicios aislados para trabajar
            áreas específicas y mejorar la simetría muscular.
          </li>
        </ul>
      </article>
      <article className="article_concepto" id="descanso">
        <h3 className="article_title">Descanso y Recuperación</h3>
        <p>
          El tiempo necesario para que los músculos se recuperen y se reparen
          después del ejercicio. La recuperación adecuada es crucial para el
          crecimiento muscular y la prevención de lesiones.
        </p>
        <ul className="article_ul">
          <li>
            <b>Ejemplo:</b> Tomar 48 horas de descanso antes de volver a
            trabajar el mismo grupo muscular.
          </li>
          <li>
            <b>Recomendación:</b> Asegurar un sueño adecuado (7-9 horas por
            noche) y considerar días de descanso activos, como caminatas ligeras
            o estiramientos, para facilitar la recuperación sin sobrecargar el
            cuerpo.
          </li>
        </ul>
      </article>
      <article className="article_concepto" id="nutricion">
        <h3 className="article_title">Nutrición</h3>
        <p>
          Una dieta equilibrada que proporciona los nutrientes necesarios para
          apoyar el entrenamiento, la recuperación y el crecimiento muscular. La
          ingesta adecuada de macronutrientes (proteínas, carbohidratos y
          grasas) y micronutrientes (vitaminas y minerales) es crucial.
        </p>
        <ul className="article_ul">
          <li>
            <b>Ejemplo:</b> Consumir una dieta rica en proteínas, carbohidratos
            complejos y grasas saludables.
          </li>
          <li>
            <b>Recomendación:</b> Consumir suficientes proteínas (1.6-2.2 g/kg
            de peso corporal) para apoyar la síntesis de proteínas musculares,
            mantener una hidratación adecuada y ajustar la ingesta calórica
            según los objetivos (ganancia muscular o pérdida de grasa).
          </li>
        </ul>
      </article>
      <article className="article_concepto" id="comoCrearMisRutinas">
        <h3 className="article_title">Como crear mis rutinas</h3>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/JwN4zvdZRBQ?si=0gRNtgdY9JBKIae7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
        <p>Propiedad y creditos a: Andrez Vazquez Personal Trainer</p>
        <p>
          Lo primero que tenes que tener en cuenta es tu objetivo(ganar musculo,
          perder grasa, estar atletico). Una vez hecho esto podras ajustar lo
          que son las variantes pricipales para crear una buena rutina, que son
          las que aprendiste anteriormente.
        </p>
        <p>Asi debes aplicar los conceptos aprendidos: </p>
        <h4>Ganar Músculo</h4>
        <p>
          Si tu objetivo es ganar músculo, es fundamental centrarse en el
          volumen de entrenamiento y la intensidad. Aquí tienes una guía básica:
        </p>
        <ul className="article_ul">
          <li>
            <strong>Volumen:</strong> Realiza entre 10 y 20 series por grupo
            muscular por semana.
          </li>
          <li>
            <strong>Frecuencia:</strong> Entrena cada grupo muscular 2-3 veces
            por semana.
          </li>
          <li>
            <strong>Intensidad:</strong> Trabaja en el rango del 65-85% de tu
            1RM (una repetición máxima).
          </li>
          <li>
            <strong>RIR:</strong> Mantén un RIR de 1-3 para asegurar un esfuerzo
            suficiente sin llegar al fallo en cada serie.
          </li>
          <li>
            <strong>Progresión:</strong> Aumenta gradualmente el peso o el
            número de series/repeticiones cada 2-4 semanas.
          </li>
          <li>
            <strong>Ejercicios:</strong> Prioriza ejercicios compuestos como
            sentadillas, press de banca y peso muerto, e incluye ejercicios
            aislados para áreas específicas.
          </li>
        </ul>

        <h4>Perder Grasa</h4>
        <p>
          Si tu objetivo es perder grasa, el enfoque debe estar en mantener la
          masa muscular mientras aumentas el gasto calórico:
        </p>
        <ul className="article_ul">
          <li>
            <strong>Volumen:</strong> Mantén un volumen moderado de 8-15 series
            por grupo muscular por semana.
          </li>
          <li>
            <strong>Frecuencia:</strong> Entrena cada grupo muscular 2-3 veces
            por semana.
          </li>
          <li>
            <strong>Intensidad:</strong> Utiliza un rango de 60-75% de tu 1RM.
          </li>
          <li>
            <strong>RIR:</strong> Mantén un RIR de 2-4 para asegurar un esfuerzo
            adecuado sin agotarte excesivamente.
          </li>
          <li>
            <strong>Cardio:</strong> Incluye sesiones de cardio moderado a
            intenso 3-5 veces por semana.
          </li>
          <li>
            <strong>Progresión:</strong> Ajusta la dieta y el cardio
            gradualmente para continuar perdiendo grasa sin sacrificar la masa
            muscular.
          </li>
        </ul>

        <h4>Estar Atlético</h4>
        <p>
          Si tu objetivo es mejorar tu condición física general y estar
          atlético, debes enfocarte en la fuerza, la resistencia y la movilidad:
        </p>
        <ul className="article_ul">
          <li>
            <strong>Volumen:</strong> Realiza un volumen equilibrado de 10-15
            series por grupo muscular por semana.
          </li>
          <li>
            <strong>Frecuencia:</strong> Entrena cada grupo muscular 2-3 veces
            por semana.
          </li>
          <li>
            <strong>Intensidad:</strong> Varía la intensidad entre 60-85% de tu
            1RM.
          </li>
          <li>
            <strong>RIR:</strong> Mantén un RIR de 1-3 en ejercicios de fuerza y
            un RIR de 3-5 en ejercicios de resistencia.
          </li>
          <li>
            <strong>Progresión:</strong> Introduce variaciones en los ejercicios
            y aumenta gradualmente la dificultad.
          </li>
          <li>
            <strong>Movilidad:</strong> Incluye ejercicios de movilidad y
            flexibilidad en tu rutina semanal.
          </li>
        </ul>

        <p>
          Recuerda que la clave del éxito en cualquier rutina es la consistencia
          y la adaptación a medida que progresas. Ajusta tu plan de
          entrenamiento según tus avances y necesidades.
        </p>
      </article>
    </section>
  );
};
