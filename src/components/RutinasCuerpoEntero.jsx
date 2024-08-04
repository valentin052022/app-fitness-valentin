import "./styles/rutinas.css";
import { Ejercicios } from "./Ejercicios";
import { CardRutina } from "./CardRutina";

const rutinasFullBody = [
  {
    name: "Desafío Total: Fuerza y Resistencia",
    id: 0,
    description:
      "¡Prepárate para un entrenamiento completo que desafía cada grupo muscular! Ideal tanto si tienes equipo como si prefieres trabajar con tu propio peso.",
    ejercicios: {
      ejercicio1: {
        conEquipo:
          "Sentadillas con barra o mancuernas - 4 series de 10-15 repeticiones",
        sinEquipo:
          "Sentadillas con el peso del cuerpo - 4 series de 10-15 repeticiones",
      },
      ejercicio2: {
        conEquipo:
          "Press de pecho con mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo: "Flexiones de pecho - 4 series de 8-12 repeticiones",
      },
      ejercicio3: {
        conEquipo:
          "Remo con barra o mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo: "Remo invertido con mesa - 4 series de 8-12 repeticiones",
      },
      ejercicio4: {
        conEquipo:
          "Press militar con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo: "Pike push-ups - 3 series de 10-15 repeticiones",
      },
      ejercicio5: {
        conEquipo:
          "Curl de bíceps con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Curl isométrico (usando una toalla) - 3 series de 10-15 repeticiones",
      },
      ejercicio6: {
        conEquipo: "Fondos en paralelas - 3 series de 8-12 repeticiones",
        sinEquipo: "Fondos entre sillas - 3 series de 8-12 repeticiones",
      },
      ejercicio7: {
        conEquipo:
          "Peso muerto con barra o mancuernas - 4 series de 10-15 repeticiones",
        sinEquipo: "Puente de glúteos - 4 series de 10-15 repeticiones",
      },
    },
  },
  {
    name: "Cuerpo en Equilibrio: Entrenamiento Integral 2",
    id: 1,
    description:
      "Descubre una rutina que ofrece un equilibrio perfecto para desarrollar fuerza y resistencia, con opciones para todos los niveles de equipamiento.",
    ejercicios: {
      ejercicio1: {
        conEquipo:
          "Zancadas con mancuernas - 3 series de 12 repeticiones por pierna",
        sinEquipo:
          "Zancadas con el peso del cuerpo - 3 series de 12 repeticiones por pierna",
      },
      ejercicio2: {
        conEquipo:
          "Aperturas con mancuernas en banco plano - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Aperturas de pecho en suelo (simulando con toallas) - 3 series de 10-15 repeticiones",
      },
      ejercicio3: {
        conEquipo:
          "Remo a una mano con mancuernas - 4 series de 8-12 repeticiones por brazo",
        sinEquipo:
          "Remo invertido a una mano con mesa - 4 series de 8-12 repeticiones por brazo",
      },
      ejercicio4: {
        conEquipo:
          "Elevaciones laterales con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Elevaciones laterales sin mancuernas (movimiento lento y controlado) - 3 series de 10-15 repeticiones",
      },
      ejercicio5: {
        conEquipo: "Curl de bíceps con barra - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Curl de bíceps con toalla (isométrico) - 3 series de 10-15 repeticiones",
      },
      ejercicio6: {
        conEquipo:
          "Extensión de tríceps con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo: "Flexiones diamante - 3 series de 10-15 repeticiones",
      },
      ejercicio7: {
        conEquipo:
          "Peso muerto rumano con mancuernas - 4 series de 10-15 repeticiones",
        sinEquipo:
          "Puente de glúteos a una pierna - 4 series de 10-15 repeticiones por pierna",
      },
    },
  },
  {
    name: "Potencia Total: Entrenamiento Completo 1",
    id: 2, // Ajusta el ID según sea necesario
    description:
      "Una rutina versátil que combina fuerza y resistencia para un entrenamiento equilibrado, ya sea en casa o en el gimnasio.",
    ejercicios: {
      ejercicio1: {
        conEquipo: "Prensa de pierna - 4 series de 10-15 repeticiones",
        sinEquipo:
          "Sentadillas búlgaras - 4 series de 10-15 repeticiones por pierna",
      },
      ejercicio2: {
        conEquipo:
          "Press inclinado con mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo:
          "Flexiones con las manos elevadas - 4 series de 8-12 repeticiones",
      },
      ejercicio3: {
        conEquipo: "Pull-over con mancuerna - 4 series de 10-15 repeticiones",
        sinEquipo:
          "Pull-over sin mancuerna (simulando el movimiento) - 4 series de 10-15 repeticiones",
      },
      ejercicio4: {
        conEquipo:
          "Elevación frontal con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Elevaciones frontales sin mancuernas (movimiento lento y controlado) - 3 series de 10-15 repeticiones",
      },
      ejercicio5: {
        conEquipo:
          "Curl de bíceps martillo con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Curl de bíceps concentrado (sin peso, contracción máxima) - 3 series de 10-15 repeticiones",
      },
      ejercicio6: {
        conEquipo:
          "Extensión de tríceps en polea - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Extensiones de tríceps en banco (dips de tríceps) - 3 series de 10-15 repeticiones",
      },
      ejercicio7: {
        conEquipo:
          "Peso muerto sumo con mancuernas - 4 series de 10-15 repeticiones",
        sinEquipo:
          "Elevaciones de cadera (puente de glúteos) - 4 series de 10-15 repeticiones",
      },
    },
  },
  {
    name: "Reto Total: Fuerza y Resistencia 2",
    id: 3, // Ajusta el ID según sea necesario
    description:
      "Desafía tus límites con esta rutina dinámica que proporciona un entrenamiento completo y variado para todos los grupos musculares.",
    ejercicios: {
      ejercicio1: {
        conEquipo:
          "Sentadillas en máquina Smith - 4 series de 10-15 repeticiones",
        sinEquipo: "Sentadillas con salto - 4 series de 10-15 repeticiones",
      },
      ejercicio2: {
        conEquipo: "Press de pecho en máquina - 4 series de 8-12 repeticiones",
        sinEquipo:
          "Flexiones declinadas (pies elevados) - 4 series de 8-12 repeticiones",
      },
      ejercicio3: {
        conEquipo: "Remo en máquina - 4 series de 8-12 repeticiones",
        sinEquipo: "Remo con mochila cargada - 4 series de 8-12 repeticiones",
      },
      ejercicio4: {
        conEquipo:
          "Press de hombros en máquina - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Flexiones de hombros contra la pared - 3 series de 10-15 repeticiones",
      },
      ejercicio5: {
        conEquipo: "Curl de bíceps en máquina - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Curl de bíceps isométrico contra la pared - 3 series de 10-15 repeticiones",
      },
      ejercicio6: {
        conEquipo:
          "Extensión de tríceps en máquina - 3 series de 10-15 repeticiones",
        sinEquipo: "Flexiones en diamante - 3 series de 10-15 repeticiones",
      },
      ejercicio7: {
        conEquipo:
          "Peso muerto en máquina Smith - 4 series de 10-15 repeticiones",
        sinEquipo:
          "Elevaciones de cadera a una pierna - 4 series de 10-15 repeticiones por pierna",
      },
    },
  },
  {
    name: "Fuerza Total: Rutina Completa 3",
    id: 4,
    description:
      "Explora una rutina integral que trabaja todos los grupos musculares, perfecta para quienes buscan un desafío adicional y variedad en sus entrenamientos.",
    ejercicios: {
      ejercicio1: {
        conEquipo:
          "Sentadillas en máquina Smith - 4 series de 10-15 repeticiones",
        sinEquipo: "Sentadillas con salto - 4 series de 10-15 repeticiones",
      },
      ejercicio2: {
        conEquipo: "Press de pecho en máquina - 4 series de 8-12 repeticiones",
        sinEquipo:
          "Flexiones declinadas (pies elevados) - 4 series de 8-12 repeticiones",
      },
      ejercicio3: {
        conEquipo: "Remo en máquina - 4 series de 8-12 repeticiones",
        sinEquipo: "Remo con mochila cargada - 4 series de 8-12 repeticiones",
      },
      ejercicio4: {
        conEquipo:
          "Press de hombros en máquina - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Flexiones de hombros contra la pared - 3 series de 10-15 repeticiones",
      },
      ejercicio5: {
        conEquipo: "Curl de bíceps en máquina - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Curl de bíceps isométrico contra la pared - 3 series de 10-15 repeticiones",
      },
      ejercicio6: {
        conEquipo:
          "Extensión de tríceps en máquina - 3 series de 10-15 repeticiones",
        sinEquipo: "Flexiones en diamante - 3 series de 10-15 repeticiones",
      },
      ejercicio7: {
        conEquipo:
          "Peso muerto en máquina Smith - 4 series de 10-15 repeticiones",
        sinEquipo:
          "Elevaciones de cadera a una pierna - 4 series de 10-15 repeticiones por pierna",
      },
    },
  },
  {
    name: "Desafío Equilibrio: Rutina Completa 4",
    id: 5,
    description:
      "Desafía tu cuerpo con esta rutina que combina movimientos esenciales tanto con equipo como sin él. Perfecta para mantener un entrenamiento equilibrado y efectivo.",
    ejercicios: {
      ejercicio1: {
        conEquipo:
          "Peso muerto rumano con barra - 4 series de 10-15 repeticiones",
        sinEquipo:
          "Peso muerto a una pierna - 4 series de 10-15 repeticiones por pierna",
      },
      ejercicio2: {
        conEquipo: "Press de banca con barra - 4 series de 8-12 repeticiones",
        sinEquipo:
          "Flexiones de pecho con manos juntas - 4 series de 8-12 repeticiones",
      },
      ejercicio3: {
        conEquipo: "Remo con barra - 4 series de 8-12 repeticiones",
        sinEquipo:
          "Remo inverso en mesa (Inverted Rows) - 4 series de 8-12 repeticiones",
      },
      ejercicio4: {
        conEquipo:
          "Elevación lateral con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Elevaciones laterales con botellas de agua - 3 series de 10-15 repeticiones",
      },
      ejercicio5: {
        conEquipo: "Curl de bíceps con barra - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Curl de bíceps con resistencia manual - 3 series de 10-15 repeticiones",
      },
      ejercicio6: {
        conEquipo:
          "Extensión de tríceps sobre la cabeza con mancuerna - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Extensiones de tríceps en el suelo - 3 series de 10-15 repeticiones",
      },
      ejercicio7: {
        conEquipo:
          "Sentadillas frontales con barra - 4 series de 10-15 repeticiones",
        sinEquipo: "Sentadillas con pausa - 4 series de 10-15 repeticiones",
      },
    },
  },
  {
    name: "Fuerza y Resistencia Total: Rutina Completa 5",
    id: 6,
    description:
      "Una rutina dinámica para entrenar todos los grupos musculares, adecuada tanto para el gimnasio como para el hogar, con ejercicios adaptables y efectivos.",
    ejercicios: {
      ejercicio1: {
        conEquipo: "Sentadillas con barra - 4 series de 10-15 repeticiones",
        sinEquipo: "Sentadillas al aire - 4 series de 10-15 repeticiones",
      },
      ejercicio2: {
        conEquipo:
          "Press de banca inclinado con mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo:
          "Flexiones en declive (pies elevados) - 4 series de 8-12 repeticiones",
      },
      ejercicio3: {
        conEquipo: "Pull-ups (dominadas) - 4 series de 8-12 repeticiones",
        sinEquipo:
          "Remo invertido bajo la mesa - 4 series de 8-12 repeticiones",
      },
      ejercicio4: {
        conEquipo:
          "Press militar con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo: "Flexiones de pike - 3 series de 10-15 repeticiones",
      },
      ejercicio5: {
        conEquipo:
          "Curl de bíceps con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo: "Curl de bíceps con toalla - 3 series de 10-15 repeticiones",
      },
      ejercicio6: {
        conEquipo:
          "Extensión de tríceps en polea alta - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Extensiones de tríceps con banda elástica - 3 series de 10-15 repeticiones",
      },
      ejercicio7: {
        conEquipo:
          "Peso muerto convencional con barra - 4 series de 10-15 repeticiones",
        sinEquipo: "Peso muerto con mochila - 4 series de 10-15 repeticiones",
      },
    },
  },
  {
    name: "Fuerza y Equilibrio: Rutina Completa ",
    id: 7,
    description:
      "Una rutina completa para fortalecer todos los grupos musculares con opciones versátiles para usar equipo o realizar ejercicios sin él. Ideal para mantener el equilibrio y la fuerza general.",
    ejercicios: {
      ejercicio1: {
        conEquipo:
          "Sentadilla búlgara con mancuernas - 4 series de 10-15 repeticiones por pierna",
        sinEquipo:
          "Sentadilla búlgara sin peso - 4 series de 10-15 repeticiones por pierna",
      },
      ejercicio2: {
        conEquipo: "Press de pecho con barra - 4 series de 8-12 repeticiones",
        sinEquipo:
          "Flexiones de pecho con aplauso - 4 series de 8-12 repeticiones",
      },
      ejercicio3: {
        conEquipo: "Remo con mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo:
          "Remo invertido con toalla en puerta - 4 series de 8-12 repeticiones",
      },
      ejercicio4: {
        conEquipo:
          "Elevación frontal con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Elevaciones frontales con botellas de agua - 3 series de 10-15 repeticiones",
      },
      ejercicio5: {
        conEquipo:
          "Curl de martillo con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Curl de martillo con botellas de agua - 3 series de 10-15 repeticiones",
      },
      ejercicio6: {
        conEquipo:
          "Fondos en banco para tríceps - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Fondos en silla para tríceps - 3 series de 10-15 repeticiones",
      },
      ejercicio7: {
        conEquipo:
          "Zancadas con barra - 4 series de 10-15 repeticiones por pierna",
        sinEquipo:
          "Zancadas sin peso - 4 series de 10-15 repeticiones por pierna",
      },
    },
  },
  {
    name: "Entrenamiento Total: Rutina Completa",
    id: 8,
    description:
      "Optimiza tu entrenamiento con esta rutina completa que trabaja todos los grupos musculares. Perfecta para adaptarse a tu hogar o al gimnasio, garantizando un entrenamiento efectivo y variado.",
    ejercicios: {
      ejercicio1: {
        conEquipo:
          "Sentadillas con mancuernas - 4 series de 10-15 repeticiones",
        sinEquipo: "Sentadillas con salto - 4 series de 10-15 repeticiones",
      },
      ejercicio2: {
        conEquipo:
          "Press inclinado con mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo: "Flexiones en pared - 4 series de 8-12 repeticiones",
      },
      ejercicio3: {
        conEquipo:
          "Remo a una mano con mancuerna - 4 series de 8-12 repeticiones por brazo",
        sinEquipo: "Remo invertido en silla - 4 series de 8-12 repeticiones",
      },
      ejercicio4: {
        conEquipo: "Press militar con barra - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Flexiones en pica (pies elevados) - 3 series de 10-15 repeticiones",
      },
      ejercicio5: {
        conEquipo:
          "Curl concentrado con mancuerna - 3 series de 10-15 repeticiones por brazo",
        sinEquipo:
          "Curl de bíceps con banda elástica - 3 series de 10-15 repeticiones",
      },
      ejercicio6: {
        conEquipo:
          "Extensión de tríceps en banco plano con barra - 3 series de 10-15 repeticiones",
        sinEquipo:
          "Extensiones de tríceps con toalla - 3 series de 10-15 repeticiones",
      },
      ejercicio7: {
        conEquipo: "Peso muerto con barra - 4 series de 10-15 repeticiones",
        sinEquipo:
          "Peso muerto a una pierna sin peso - 4 series de 10-15 repeticiones por pierna",
      },
    },
  },
  {
    name: "Cuerpo Completo en Acción",
    id: 9,
    description: "Rutina completa que trabaja todos los grupos musculares principales con opciones para equipos y sin ellos.",
    ejercicios: {
      ejercicio1: {
        conEquipo: "Sentadillas con barra - 4 series de 10-15 repeticiones",
        sinEquipo: "Sentadillas con el peso del cuerpo - 4 series de 10-15 repeticiones"
      },
      ejercicio2: {
        conEquipo: "Press de pecho con mancuernas - 4 series de 8-12 repeticiones",
        sinEquipo: "Flexiones de pecho - 4 series de 8-12 repeticiones"
      },
      ejercicio3: {
        conEquipo: "Remo con barra - 4 series de 8-12 repeticiones",
        sinEquipo: "Remo inverso con mesa - 4 series de 8-12 repeticiones"
      },
      ejercicio4: {
        conEquipo: "Elevaciones de talones con mancuernas - 3 series de 15-20 repeticiones",
        sinEquipo: "Elevaciones de talones con el peso del cuerpo - 3 series de 15-20 repeticiones"
      },
      ejercicio5: {
        conEquipo: "Press militar con mancuernas - 3 series de 8-12 repeticiones",
        sinEquipo: "Pike push-ups - 3 series de 8-12 repeticiones"
      },
      ejercicio6: {
        conEquipo: "Curl de bíceps con mancuernas - 3 series de 10-15 repeticiones",
        sinEquipo: "Curl isométrico con toalla - 3 series de 10-15 repeticiones"
      },
      ejercicio7: {
        conEquipo: "Fondos en paralelas - 3 series de 8-12 repeticiones",
        sinEquipo: "Fondos entre sillas - 3 series de 8-12 repeticiones"
      },
      ejercicio8: {
        conEquipo: null,
        sinEquipo: "Plancha - 3 series de 30-60 segundos"
      }
    }
  }
];

export const RutinasCuerpoEntero = () => {
  return (
    <CardRutina tipo="fullbody" objetorutina={rutinasFullBody}/>
  );
};

export const FullBody = () => {
  return <Ejercicios tipoDeRutina={rutinasFullBody} />;
};
