import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/rutinas.css";
import { Link } from "react-router-dom";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Ejercicios } from "./Ejercicios";


const rutinasMusculacion = [
  {
    name: "Rutina de Pecho y Tríceps",
    id: 0, // Ajusta el ID según sea necesario
    description:
      "Rutina para trabajar el pecho y tríceps con opciones tanto con equipo como sin equipo.",
    ejercicios: {
      ejercicio1: {
        conEquipo:
          "Press de pecho con mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo: "Flexiones de pecho - 4 series de 8-12 repeticiones",
      },
      ejercicio2: {
        conEquipo:
          "Aperturas con mancuernas en banco plano - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Aperturas de pecho en suelo (simulando con toallas) - 3 series de 10-15 repeticiones",
      },
      ejercicio3: {
        conEquipo: "Fondos en paralelas - 3 series de 8-12 repeticiones",
        sinEquipo: "Fondos entre sillas - 3 series de 8-12 repeticiones",
      },
      ejercicio4: {
        conEquipo:
          "Extensiones de tríceps con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Extensiones de tríceps con toalla (tras la cabeza) - 3 series de 10-15 repeticiones",
      },
      ejercicio5: {
        conEquipo:
          "Press de tríceps en banco con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Flexiones de tríceps (manos juntas) - 3 series de 10-15 repeticiones",
      },
    },
  },
  {
    name: "Rutina de Bíceps, Espalda y Hombros",
    id: 1, // Ajusta el ID según sea necesario
    description:
      "Rutina para trabajar bíceps, espalda y hombros con opciones tanto con equipo como sin equipo.",
    ejercicios: {
      ejercicio1: {
        conEquipo: "Remo con mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo: "Remo invertido con mesa - 4 series de 8-12 repeticiones",
      },
      ejercicio2: {
        conEquipo:
          "Curl de bíceps con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Curl de bíceps con banda elástica - 3 series de 10-15 repeticiones",
      },
      ejercicio3: {
        conEquipo:
          "Elevaciones laterales con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Elevaciones laterales con botellas de agua - 3 series de 10-15 repeticiones",
      },
      ejercicio4: {
        conEquipo:
          "Press militar con mancuernas - 3 series de 8-12 repeticiones",
        sinEquipo: "Pike push-ups - 3 series de 8-12 repeticiones",
      },
      ejercicio5: {
        conEquipo: "Pull-over con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Pull-over sin equipo (simulación en el suelo) - 3 series de 10-15 repeticiones",
      },
    },
  },
  {
    name: "Rutina de Hombros",
    id: 2, // Ajusta el ID según sea necesario
    description:
      "Rutina enfocada en el desarrollo de los músculos del hombro con opciones tanto con equipo como sin equipo.",
    ejercicios: {
      ejercicio1: {
        conEquipo:
          "Press militar con mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo: "Pike push-ups - 4 series de 8-12 repeticiones",
      },
      ejercicio2: {
        conEquipo:
          "Elevaciones laterales con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Elevaciones laterales con botellas de agua - 3 series de 10-15 repeticiones",
      },
      ejercicio3: {
        conEquipo:
          "Elevaciones frontales con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Elevaciones frontales con botellas de agua - 3 series de 10-15 repeticiones",
      },
      ejercicio4: {
        conEquipo: "Remo al cuello con barra - 3 series de 8-12 repeticiones",
        sinEquipo:
          "Remo al cuello con banda elástica - 3 series de 8-12 repeticiones",
      },
      ejercicio5: {
        conEquipo:
          "Face pulls con banda elástica - 3 series de 12-15 repeticiones",
        sinEquipo:
          "Remo en posición de face pull con banda elástica - 3 series de 12-15 repeticiones",
      },
    },
  },
  {
    name: "Rutina de Piernas",
    id: 3, // Ajusta el ID según sea necesario
    description:
      "Rutina para el desarrollo de los músculos de las piernas con opciones tanto con equipo como sin equipo.",
    ejercicios: {
      ejercicio1: {
        conEquipo:
          "Sentadillas con barra o mancuernas - 4 series de 10-15 repeticiones",
        sinEquipo:
          "Sentadillas con el peso del cuerpo - 4 series de 10-15 repeticiones",
      },
      ejercicio2: {
        conEquipo:
          "Peso muerto con barra o mancuernas - 4 series de 10-15 repeticiones",
        sinEquipo: "Puente de glúteos - 4 series de 10-15 repeticiones",
      },
      ejercicio3: {
        conEquipo:
          "Zancadas con mancuernas - 3 series de 12 repeticiones por pierna",
        sinEquipo:
          "Zancadas con el peso del cuerpo - 3 series de 12 repeticiones por pierna",
      },
      ejercicio4: {
        conEquipo:
          "Elevaciones de talones con mancuernas - 3 series de 15-20 repeticiones",
        sinEquipo:
          "Elevaciones de talones con el peso del cuerpo - 3 series de 15-20 repeticiones",
      },
      ejercicio5: {
        conEquipo: "Prensa de piernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Sentadillas búlgaras con el peso del cuerpo - 3 series de 12 repeticiones por pierna",
      },
    },
  },
  {
    name: "Rutina de Piernas Variante 2",
    id: 4, // Ajusta el ID según sea necesario
    description:
      "Otra rutina para el desarrollo de los músculos de las piernas con opciones tanto con equipo como sin equipo.",
    ejercicios: {
      ejercicio1: {
        conEquipo:
          "Sentadillas frontales con barra o mancuernas - 4 series de 10-15 repeticiones",
        sinEquipo:
          "Sentadillas profundas con el peso del cuerpo - 4 series de 10-15 repeticiones",
      },
      ejercicio2: {
        conEquipo:
          "Peso muerto sumo con barra o mancuernas - 4 series de 10-15 repeticiones",
        sinEquipo:
          "Puente de glúteos a una pierna - 4 series de 10-15 repeticiones por pierna",
      },
      ejercicio3: {
        conEquipo:
          "Zancadas laterales con mancuernas - 3 series de 12 repeticiones por lado",
        sinEquipo:
          "Zancadas laterales con el peso del cuerpo - 3 series de 12 repeticiones por lado",
      },
      ejercicio4: {
        conEquipo:
          "Elevaciones de talones en máquina - 3 series de 15-20 repeticiones",
        sinEquipo:
          "Elevaciones de talones en escalón - 3 series de 15-20 repeticiones",
      },
      ejercicio5: {
        conEquipo:
          "Sentadillas en máquina Hack - 3 series de 10-15 repeticiones",
        sinEquipo: "Sentadillas con salto - 3 series de 12-15 repeticiones",
      },
    },
  },
  {
    name: "Rutina de Torso - Enfoque Completo",
    id: 5,
    description: "Rutina para trabajar todo el torso con opciones tanto con equipo como sin equipo.",
    ejercicios: {
      ejercicio1: {
        conEquipo: "Press de pecho con mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo: "Flexiones de pecho - 4 series de 8-12 repeticiones"
      },
      ejercicio2: {
        conEquipo: "Remo con barra - 4 series de 8-12 repeticiones",
        sinEquipo: "Remo inverso con mesa - 4 series de 8-12 repeticiones"
      },
      ejercicio3: {
        conEquipo: "Elevaciones laterales con mancuernas - 4 series de 10-15 repeticiones",
        sinEquipo: "Elevaciones laterales con botellas de agua - 4 series de 10-15 repeticiones"
      },
      ejercicio4: {
        conEquipo: "Curl de bíceps con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo: "Curl isométrico con toalla - 3 series de 10-15 repeticiones"
      },
      ejercicio5: {
        conEquipo: "Extensión de tríceps con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo: "Fondos entre sillas - 3 series de 10-15 repeticiones"
      }
    }
  },
  {
    name: "Rutina de Torso - Alternativa Completa",
    id: 6,
    description: "Rutina integral para el torso, con enfoque en pectorales, espalda, hombros, bíceps y tríceps.",
    ejercicios: {
      ejercicio1: {
        conEquipo: "Press inclinado con mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo: "Flexiones inclinadas - 4 series de 8-12 repeticiones"
      },
      ejercicio2: {
        conEquipo: "Pull-over con mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo: "Remo con banda elástica - 4 series de 8-12 repeticiones"
      },
      ejercicio3: {
        conEquipo: "Press militar con mancuernas - 4 series de 10-15 repeticiones",
        sinEquipo: "Pike push-ups - 4 series de 10-15 repeticiones"
      },
      ejercicio4: {
        conEquipo: "Curl de bíceps con barra - 3 series de 10-15 repeticiones",
        sinEquipo: "Curl con banda elástica - 3 series de 10-15 repeticiones"
      },
      ejercicio5: {
        conEquipo: "Extensión de tríceps en polea alta - 3 series de 10-15 repeticiones",
        sinEquipo: "Extensión de tríceps con banda elástica - 3 series de 10-15 repeticiones"
      }
    }
  },
  {
    name: "Rutina de Abdomen - Básica",
    id: 7,
    description: "Rutina básica para trabajar el abdomen con opciones tanto con equipo como sin equipo.",
    ejercicios: {
      ejercicio1: {
        conEquipo: "Crunches en banco inclinado - 4 series de 15-20 repeticiones",
        sinEquipo: "Crunches en suelo - 4 series de 15-20 repeticiones"
      },
      ejercicio2: {
        conEquipo: "Elevaciones de piernas en banco - 3 series de 15-20 repeticiones",
        sinEquipo: "Elevaciones de piernas en suelo - 3 series de 15-20 repeticiones"
      },
      ejercicio3: {
        conEquipo: "Twist ruso con mancuernas - 3 series de 20 repeticiones por lado",
        sinEquipo: "Twist ruso sin peso - 3 series de 20 repeticiones por lado"
      },
      ejercicio4: {
        conEquipo: "Plancha con pies elevados - 3 series de 30-60 segundos",
        sinEquipo: "Plancha - 3 series de 30-60 segundos"
      }
    }
  },
  {
    name: "Rutina de Abdomen - Avanzada",
    id: 8,
    description: "Rutina avanzada para fortalecer el abdomen con opciones tanto con equipo como sin equipo.",
    ejercicios: {
      ejercicio1: {
        conEquipo: "Crunch con rueda abdominal - 4 series de 10-15 repeticiones",
        sinEquipo: "Crunches en bicicleta - 4 series de 10-15 repeticiones por lado"
      },
      ejercicio2: {
        conEquipo: "Elevaciones de piernas colgado - 3 series de 12-15 repeticiones",
        sinEquipo: "Elevaciones de piernas en suelo con soporte - 3 series de 12-15 repeticiones"
      },
      ejercicio3: {
        conEquipo: "Roll-out con rueda abdominal - 3 series de 10-15 repeticiones",
        sinEquipo: "Roll-out con toalla en suelo - 3 series de 10-15 repeticiones"
      },
      ejercicio4: {
        conEquipo: "Plancha con levantamiento de piernas - 3 series de 30-45 segundos por lado",
        sinEquipo: "Plancha lateral - 3 series de 30-45 segundos por lado"
      }
    }
  },
  {
    name: "Espalda de Acero",
    id: 9,
    description: "Rutina intensa para fortalecer y definir la espalda con opciones para trabajar con y sin equipo.",
    ejercicios: {
      ejercicio1: {
        conEquipo: "Remo con barra - 4 series de 8-12 repeticiones",
        sinEquipo: "Remo inverso con mesa - 4 series de 8-12 repeticiones"
      },
      ejercicio2: {
        conEquipo: "Jalones en polea alta - 3 series de 10-15 repeticiones",
        sinEquipo: "Pull-ups (dominadas) asistidas - 3 series de 8-12 repeticiones"
      },
      ejercicio3: {
        conEquipo: "Peso muerto con barra - 4 series de 8-12 repeticiones",
        sinEquipo: "Peso muerto con una mochila cargada - 4 series de 8-12 repeticiones"
      },
      ejercicio4: {
        conEquipo: "Remo en máquina - 3 series de 10-15 repeticiones",
        sinEquipo: "Remo con bandas de resistencia - 3 series de 10-15 repeticiones"
      }
    }
  }
];

export const RutinasMusculacion = () => {
  return (
    <main>
      {rutinasMusculacion.map((item, index) => (
        <div className="card_rutinas" key={index}>
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
          <div className="cont_link_rutina">
            <Link className="link_rutina" to={`musculacion/${item.id}`}>{<FontAwesomeIcon icon={faArrowRightFromBracket} />}
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
};



export const Musculacion = () => {
  return (
    <Ejercicios tipoDeRutina={rutinasMusculacion}/>
  )
}


