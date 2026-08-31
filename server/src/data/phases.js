// Calendario de la fase de eliminación de la UEFA Champions League 2026-27.
// Fuente: UEFA.com (las fechas pueden cambiar levemente si la UEFA
// las reprograma más adelante).
//
// Por ahora esta lista vive "en memoria": son datos fijos que el
// servidor entrega tal cual. Cuando se agregue el ingreso de resultados,
// este archivo (o una base de datos) va a guardar también los partidos
// de cada fase.

const phases = [
  {
    id: "playoffs",
    order: 1,
    name: "Playoffs de Octavos",
    shortName: "Playoffs",
    legs: ["2027-02-16", "2027-02-24"],
    teamsIn: 16,
    teamsOut: 8,
    description:
      "Los puestos 9º a 24º de la fase de liga juegan ida y vuelta por los últimos 8 cupos de octavos.",
    matches: [], // acá van a ir los partidos reales de esta fase
  },
  {
    id: "ro16",
    order: 2,
    name: "Octavos de Final",
    shortName: "Octavos",
    legs: ["2027-03-09", "2027-03-17"],
    teamsIn: 16,
    teamsOut: 8,
    description:
      "Los 8 mejores de la fase de liga entran directo a esta ronda.",
    matches: [],
  },
  {
    id: "qf",
    order: 3,
    name: "Cuartos de Final",
    shortName: "Cuartos",
    legs: ["2027-04-06", "2027-04-14"],
    teamsIn: 8,
    teamsOut: 4,
    description: "Ida y vuelta, sorteo abierto y sin cabezas de serie.",
    matches: [],
  },
  {
    id: "sf",
    order: 4,
    name: "Semifinal",
    shortName: "Semis",
    legs: ["2027-04-27", "2027-05-05"],
    teamsIn: 4,
    teamsOut: 2,
    description: "Los últimos dos cruces antes de la final en Madrid.",
    matches: [],
  },
  {
    id: "final",
    order: 5,
    name: "Gran Final",
    shortName: "Final",
    legs: ["2027-06-05"],
    teamsIn: 2,
    teamsOut: 1,
    venue: "Estadio Metropolitano, Madrid",
    description: "Partido único. No hay equipo local ni visitante.",
    matches: [],
  },
];

// module.exports es la forma en que este proyecto de Node exporta
// datos para que otros archivos los puedan usar con require(...).
// Es equivalente al "export" que usamos en el frontend, pero con
// otra sintaxis porque el servidor usa el sistema de módulos
// clásico de Node (CommonJS) en vez del que usa Vite/React (ES Modules).
module.exports = phases;
