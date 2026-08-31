import { useInView } from "../hooks/useInView";
import { formatLegRange } from "../data/phases";
import "./PhaseCard.css";

// Este componente recibe una fase (un objeto de la lista que armamos
// en phases.js) y dibuja su tarjeta. "isFinal" es un valor aparte
// para saber si hay que darle el estilo especial dorado.
export default function PhaseCard({ phase, isFinal }) {
  // Usamos el hook que ya armamos: "ref" hay que pegarlo a un elemento,
  // e "inView" nos dice si ese elemento ya es visible en la pantalla.
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    // Le pegamos el "ref" a este div para que el hook pueda vigilarlo.
    // La clase "is-visible" se agrega solo cuando inView es true,
    // y esa clase es la que dispara la animación en el CSS.
    // La clase "phase-row--final" se agrega solo si esta tarjeta es la Final.
    <div
      ref={ref}
      className={`phase-row ${inView ? "is-visible" : ""} ${
        isFinal ? "phase-row--final" : ""
      }`}
    >
      {/* Columna izquierda: el círculo (nodo) de la línea vertical */}
      <div className="phase-row__rail">
        <div className="phase-row__node">
          {/* El ícono de trofeo solo se dibuja en la tarjeta de la Final */}
          {isFinal && (
            <svg
              viewBox="0 0 24 24"
              className="phase-row__trophy"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M6 3h12v2h2.5a1 1 0 0 1 1 1v1.5c0 2.4-1.75 4.4-4.03 4.78A5.51 5.51 0 0 1 13 16.36V19h3v2H8v-2h3v-2.64a5.51 5.51 0 0 1-4.47-4.08C4.25 11.9 2.5 9.9 2.5 7.5V6a1 1 0 0 1 1-1H6V3Zm0 4H4.5v.5C4.5 8.9 5.4 10.05 6.6 10.4A8.9 8.9 0 0 1 6 7Zm12 0a8.9 8.9 0 0 1-.6 3.4c1.2-.35 2.1-1.5 2.1-2.9V7H18Z"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Columna derecha: el contenido de la tarjeta */}
      <div className="phase-row__card">
        <div className="phase-row__meta">
          <span className="phase-row__eyebrow">{phase.shortName}</span>
          <span className="phase-row__count">
            {phase.teamsIn} → {phase.teamsOut} equipos
          </span>
        </div>

        <h3 className="phase-row__title">{phase.name}</h3>

        {/* formatLegRange viene de phases.js: convierte las fechas
            en texto legible, por ejemplo "16 feb 2027 → 24 feb 2027" */}
        <p className="phase-row__dates">{formatLegRange(phase.legs)}</p>

        {/* El campo "venue" solo existe en la fase Final, así que
            esta línea solo se dibuja ahí. Para el resto de fases,
            phase.venue es undefined y React no dibuja nada. */}
        {phase.venue && <p className="phase-row__venue">{phase.venue}</p>}

        <p className="phase-row__description">{phase.description}</p>

        {/* Espacio reservado para los resultados. Por ahora
            siempre está vacío porque todavía no existen los partidos. */}
        <div className="phase-row__matches">
          <span className="phase-row__matches-label">Resultados</span>
          <p className="phase-row__empty">
            Aún no hay resultados cargados para esta ronda.
          </p>
        </div>
      </div>
    </div>
  );
}
