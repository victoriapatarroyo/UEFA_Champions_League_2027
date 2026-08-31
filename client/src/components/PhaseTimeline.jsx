import PhaseCard from "./PhaseCard";
import "./PhaseTimeline.css";

// Este componente recibe la lista completa de fases (el array de 5
// objetos que armamos en phases.js) y dibuja una PhaseCard por cada una.
export default function PhaseTimeline({ phases }) {
  return (
    // El id="fases" es el destino del botón "Ver las fases" del Hero
    // (¿recuerdas el href="#fases" del Paso 9?). Al hacer clic ahí,
    // el navegador baja el scroll hasta este elemento.
    <section id="fases" className="timeline">
      <div className="timeline__intro">
        <span className="timeline__intro-eyebrow">Fase de eliminación</span>
        <h2 className="timeline__intro-title">Cinco rondas, un solo camino</h2>
        <p className="timeline__intro-text">
          Cada fase se estrecha hacia la final. A medida que se carguen
          resultados reales, esta línea va a ir marcando quién sigue vivo en el
          camino a Madrid.
        </p>
      </div>

      {/* Esta línea vertical decorativa atraviesa todas las tarjetas
          por detrás (el detalle de cómo se ubica está en el CSS) */}
      <div className="timeline__rail-line" aria-hidden="true" />

      <div className="timeline__rows">
        {/* .map() recorre la lista "phases" y por cada elemento
            dibuja un <PhaseCard>. Es el equivalente a un for-each
            que en vez de imprimir texto, devuelve componentes de React. */}
        {phases.map((phase) => (
          <PhaseCard
            key={phase.id}
            phase={phase}
            isFinal={phase.id === "final"}
          />
        ))}
      </div>
    </section>
  );
}
