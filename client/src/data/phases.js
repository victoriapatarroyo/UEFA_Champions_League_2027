// Lista con las 5 fases de la eliminatoria.
// Más adelante esta misma información va a venir de un servidor,
// pero por ahora la escribimos aquí directamente para poder
// construir y probar la página sin depender de nada más.
export const phases = [
  {
    id: "playoffs",
    order: 1,
    name: "Playoffs de Octavos",
    shortName: "Playoffs",
    legs: ["2027-02-16", "2027-02-24"], // fecha de ida y fecha de vuelta
    teamsIn: 16,
    teamsOut: 8,
    description:
      "Los puestos 9º a 24º de la fase de liga juegan ida y vuelta por los últimos 8 cupos de octavos.",
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
  },
  {
    id: "final",
    order: 5,
    name: "Gran Final",
    shortName: "Final",
    legs: ["2027-06-05"], // partido único, por eso solo una fecha
    teamsIn: 2,
    teamsOut: 1,
    venue: "Estadio Metropolitano, Madrid",
    description: "Partido único. No hay equipo local ni visitante.",
  },
];

// Lista de meses abreviados en español, para armar fechas
// como "16 feb 2027" a partir de un texto tipo "2027-02-16".
const MESES = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

// Convierte "2027-02-16" en "16 feb 2027"
export function formatLegDate(isoDate) {
  const [y, m, d] = isoDate.split("-").map(Number);
  return `${d} ${MESES[m - 1]} ${y}`;
}

// Si la fase tiene ida y vuelta, muestra las dos fechas con una flecha.
// Si es la final (una sola fecha), muestra solo esa.
export function formatLegRange(legs) {
  if (legs.length === 1) return formatLegDate(legs[0]);
  return `${formatLegDate(legs[0])} → ${formatLegDate(legs[1])}`;
}
