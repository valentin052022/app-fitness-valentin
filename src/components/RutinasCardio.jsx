import { CardRutina } from "./CardRutina";
import { Ejercicios } from "./Ejercicios";
import "./styles/rutinas.css";

const cardioRutinas = [
  {
    name: "Cardio Total: Intensidad Alta",
    id: 0,
    description:
      "Rutina de cardio intenso para quemar calorías y mejorar la resistencia cardiovascular.",
    ejercicios: {
      ejercicio1: {
        conEquipo: null,
        sinEquipo: "Saltos de tijera - 4 s de 30-45 seg",
      },
      ejercicio2: {
        conEquipo: null,
        sinEquipo: "Burpees - 4 s de 10-15 rep",
      },
      ejercicio3: {
        conEquipo: null,
        sinEquipo: "Correr en el lugar - 4 s de 1-2 min",
      },
      ejercicio4: {
        conEquipo: null,
        sinEquipo: "Mountain climbers - 4 s de 30-45 seg",
      },
    },
  },
  {
    name: "Cardio Suave: Recuperación Activa",
    id: 1,
    description:
      "Rutina de cardio suave ideal para recuperación activa y mejora de la resistencia general.",
    ejercicios: {
      ejercicio1: {
        conEquipo: null,
        sinEquipo: "Caminata rápida - 5 s de 3-5 min",
      },
      ejercicio2: {
        conEquipo: null,
        sinEquipo: "Marcha en el lugar - 5 s de 2-3 min",
      },
      ejercicio3: {
        conEquipo: null,
        sinEquipo: "Jumping jacks moderados - 5 s de 1-2 min",
      },
      ejercicio4: {
        conEquipo: null,
        sinEquipo: "Estiramientos dinámicos - 5 s de 2-3 min",
      },
    },
  },
  {
    name: "Cardio Energizante: Intervalos Cortos",
    id: 2 ,
    description: "Rutina de cardio basada en intervalos cortos para aumentar la resistencia y la quema de calorías.",
    ejercicios: {
      ejercicio1: {
        conEquipo: null,
        sinEquipo: "Sprints en el lugar - 5 s de 20-30 seg"
      },
      ejercicio2: {
        conEquipo: null,
        sinEquipo: "Jumping jacks rápidos - 5 s de 30 seg"
      },
      ejercicio3: {
        conEquipo: null,
        sinEquipo: "Saltos de cuerda simulados - 5 s de 30 seg"
      },
      ejercicio4: {
        conEquipo: null,
        sinEquipo: "Descanso activo (caminar despacio) - 5 s de 30 seg"
      }
    }
  },
  {
    name: "Cardio Fluido: Resistencia Moderada",
    id: 3,
    description: "Rutina de cardio para mantener una resistencia moderada y mejorar la capacidad aeróbica.",
    ejercicios: {
      ejercicio1: {
        conEquipo: null,
        sinEquipo: "Caminata rápida - 4 s de 5 min"
      },
      ejercicio2: {
        conEquipo: null,
        sinEquipo: "Marcha en el lugar - 4 s de 3 min"
      },
      ejercicio3: {
        conEquipo: null,
        sinEquipo: "Sentadillas con salto - 4 s de 15-20 rep"
      },
      ejercicio4: {
        conEquipo: null,
        sinEquipo: "Estiramientos suaves - 4 s de 3 min"
      }
    }
  },
  {
    name: "Cardio Explosivo: Saltos y Movimientos Rápidos",
    id: 4,
    description: "Rutina de cardio que combina saltos y movimientos rápidos para mejorar la agilidad y la quema de calorías.",
    ejercicios: {
      ejercicio1: {
        conEquipo: null,
        sinEquipo: "Burpees - 4 s de 12-15 rep"
      },
      ejercicio2: {
        conEquipo: null,
        sinEquipo: "Saltos de tijera - 4 s de 30 seg"
      },
      ejercicio3: {
        conEquipo: null,
        sinEquipo: "Escaladores - 4 s de 30 seg"
      },
      ejercicio4: {
        conEquipo: null,
        sinEquipo: "Descanso activo (caminar despacio) - 4 s de 30 seg"
      }
    }
  },
  {
    name: "Cardio Enérgico: Circuito de Ritmo Rápido",
    id:5,
    description: "Rutina de cardio que incluye un circuito con movimientos de ritmo rápido para mantener alta la frecuencia cardíaca.",
    ejercicios: {
      ejercicio1: {
        conEquipo: null,
        sinEquipo: "Sprints en el lugar - 4 s de 40 seg"
      },
      ejercicio2: {
        conEquipo: null,
        sinEquipo: "Rodillas altas - 4 s de 40 seg"
      },
      ejercicio3: {
        conEquipo: null,
        sinEquipo: "Jumping jacks - 4 s de 40 seg"
      },
      ejercicio4: {
        conEquipo: null,
        sinEquipo: "Descanso activo (caminata ligera) - 4 s de 30 seg"
      }
    }
  },
  {
    name: "Cardio Dinámico: Ritmo Moderado con Movimiento Continuo",
    id: 6,
    description: "Rutina de cardio para mantener un ritmo moderado con movimientos continuos para una sesión de entrenamiento constante.",
    ejercicios: {
      ejercicio1: {
        conEquipo: null,
        sinEquipo: "Caminata rápida - 5 s de 6 min"
      },
      ejercicio2: {
        conEquipo: null,
        sinEquipo: "Marcha en el lugar - 5 s de 4 min"
      },
      ejercicio3: {
        conEquipo: null,
        sinEquipo: "Sentadillas sin peso - 5 s de 15 rep"
      },
      ejercicio4: {
        conEquipo: null,
        sinEquipo: "Estiramientos suaves - 5 s de 4 min"
      }
    }
  },
  {
    name: "Cardio Intenso: Circuito de Alta Energía",
    id: 7,
    description: "Rutina de cardio intensa que mezcla movimientos de alta energía para una quema de calorías eficiente.",
    ejercicios: {
      ejercicio1: {
        conEquipo: null,
        sinEquipo: "Burpees - 4 s de 15 rep"
      },
      ejercicio2: {
        conEquipo: null,
        sinEquipo: "Saltos de cuerda - 4 s de 45 seg"
      },
      ejercicio3: {
        conEquipo: null,
        sinEquipo: "Escaladores - 4 s de 45 seg"
      },
      ejercicio4: {
        conEquipo: null,
        sinEquipo: "Descanso activo (caminata ligera) - 4 s de 30 seg"
      }
    }
  },
  {
    name: "Cardio Progresivo: Alternancia de Ritmos",
    id: 8,
    description: "Rutina de cardio que alterna entre ritmos rápidos y moderados para mejorar la resistencia cardiovascular.",
    ejercicios: {
      ejercicio1: {
        conEquipo: null,
        sinEquipo: "Sprint en el lugar - 3 s de 1 min"
      },
      ejercicio2: {
        conEquipo: null,
        sinEquipo: "Marcha en el lugar - 3 s de 1 min"
      },
      ejercicio3: {
        conEquipo: null,
        sinEquipo: "Jumping jacks - 3 s de 1 min"
      },
      ejercicio4: {
        conEquipo: null,
        sinEquipo: "Descanso activo (caminar despacio) - 3 s de 1 min"
      }
    }
  },
  {
    name: "Cardio Total: Rutina con Pesas Rusas",
    id: 9,
    description: "Rutina de cardio que incorpora pesas rusas para un entrenamiento completo y desafiante.",
    ejercicios: {
      ejercicio1: {
        conEquipo: "Swing con pesa rusa - 4 s de 15 rep",
        sinEquipo: null
      },
      ejercicio2: {
        conEquipo: "Sentadillas con pesa rusa - 4 s de 12 rep",
        sinEquipo: null
      },
      ejercicio3: {
        conEquipo: "Press de hombros con pesa rusa - 4 s de 12 rep",
        sinEquipo: null
      },
      ejercicio4: {
        conEquipo: "Descanso activo (caminar ligera) - 4 s de 30 seg",
        sinEquipo: null
      }
    }
  }
];

export const RutinasCardio = () => {
  return (
    <CardRutina tipo="cardio" objetorutina={cardioRutinas}/>
  );
};

export const Cardio = () => {
  return <Ejercicios tipoDeRutina={cardioRutinas} />;
};